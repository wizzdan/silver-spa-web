
/**
 * SILVER BEAUTY SPA - BOOKING SYSTEM BACKEND
 * 
 * Technology Stack: Node.js, Express, MySQL, Africa's Talking (SMS), Twilio (WhatsApp)
 */

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');
const AfricasTalking = require('africastalking');
const twilio = require('twilio');

const app = express();
const PORT = process.env.PORT || 3000;

// --- MIDDLEWARE ---
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// --- CONFIGURATION ---

// Database Config
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'silver_beauty_spa'
};

// SMS Config (Africa's Talking)
const africastalking = AfricasTalking({
    apiKey: process.env.AT_API_KEY,
    username: process.env.AT_USERNAME || 'sandbox'
});
const sms = africastalking.SMS;

// WhatsApp Config (Twilio)
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Owner Details
const OWNER_PHONE_SMS = process.env.OWNER_PHONE || '+254740619025';
const OWNER_PHONE_WHATSAPP = `whatsapp:${OWNER_PHONE_SMS}`;
const TWILIO_WHATSAPP_NUMBER = process.env.TWILIO_FROM_NUMBER || 'whatsapp:+14155238886';

// --- VALIDATION UTILS ---
const validateBooking = (data) => {
    const errors = [];
    if (!data.name || data.name.split(' ').length < 2) errors.push("Full name required");
    if (!data.phone) errors.push("Phone required");
    if (!data.service) errors.push("Service required");
    if (!data.date || !data.time) errors.push("Date and time required");
    return errors;
};

// --- ROUTES ---

// Health Check
app.get('/api/status', (req, res) => {
    res.json({ status: 'online', timestamp: new Date() });
});

// Handle Booking Submission
app.post('/api/book', async (req, res) => {
    console.log('Received booking request:', req.body);

    const validationErrors = validateBooking(req.body);
    if (validationErrors.length > 0) {
        return res.status(400).json({ success: false, message: 'Validation failed', errors: validationErrors });
    }

    const { name, phone, service, date, time, notes } = req.body;
    const connection = await mysql.createConnection(dbConfig);

    try {
        // 1. Save to Database
        const [result] = await connection.execute(
            `INSERT INTO bookings (client_name, client_phone, service, booking_date, booking_time, notes, status) 
             VALUES (?, ?, ?, ?, ?, ?, 'pending')`,
            [name, phone, service, date, time, notes]
        );
        const bookingId = result.insertId;

        // 2. Send Notifications (Async)
        
        // A. SMS Notification via Africa's Talking
        const smsMessage = `New booking from ${name} – ${service} at ${date} ${time}. Contact: ${phone}`;
        try {
            await sms.send({
                to: [OWNER_PHONE_SMS],
                message: smsMessage
            });
            console.log('SMS sent successfully');
        } catch (err) {
            console.error('SMS failed:', err.message);
            // Don't fail the request if SMS fails, just log it
        }

        // B. WhatsApp Notification via Twilio
        const whatsappMessage = `New Booking Alert – Silver Beauty Spa\n\nService: ${service}\nDate & Time: ${date} ${time}\nClient Name: ${name}\nClient Phone: ${phone}\nNotes: ${notes || 'None'}\n\nPlease confirm availability.`;
        
        try {
            await twilioClient.messages.create({
                from: TWILIO_WHATSAPP_NUMBER,
                to: OWNER_PHONE_WHATSAPP,
                body: whatsappMessage
            });
            console.log('WhatsApp sent successfully');
        } catch (err) {
            console.error('WhatsApp failed:', err.message);
        }

        // 3. Send Confirmation SMS to Client (Optional but good UX)
        try {
            await sms.send({
                to: [phone],
                message: `Hello ${name}, your request for ${service} at Silver Beauty Spa has been received. We will confirm shortly.`
            });
        } catch (clientErr) {
            console.error('Client SMS failed:', clientErr.message);
        }

        res.status(201).json({ 
            success: true, 
            message: 'Booking received successfully',
            bookingId: bookingId
        });

    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    } finally {
        await connection.end();
    }
});

app.listen(PORT, () => {
    console.log(`Silver Beauty Backend running on port ${PORT}`);
});
