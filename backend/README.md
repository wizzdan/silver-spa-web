
# Silver Beauty Spa - Booking System Documentation

This directory contains the backend logic for the Silver Beauty Spa booking system, handling database storage, SMS notifications (Africa's Talking), and WhatsApp notifications (Twilio).

## 1. Prerequisites

- Node.js (v14 or higher)
- MySQL Database
- Africa's Talking Account (for SMS)
- Twilio Account (for WhatsApp API)

## 2. Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install express mysql2 body-parser cors dotenv africastalking twilio
   ```

## 3. Database Setup

1. Log in to your MySQL server.
2. Import the schema:
   ```bash
   mysql -u root -p < schema.sql
   ```

## 4. Configuration (.env)

Create a `.env` file in the `backend` folder with the following credentials:

```env
PORT=5000

# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=silver_beauty_spa

# Africa's Talking (SMS)
AT_USERNAME=sandbox
AT_API_KEY=your_africas_talking_api_key

# Twilio (WhatsApp)
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_FROM_NUMBER=whatsapp:+14155238886

# Business Owner Contact
OWNER_PHONE=+254740619025
```

## 5. Running the Server

Start the development server:
```bash
node server.js
```

## 6. API Endpoints

### POST /api/book
Accepts JSON payload:
```json
{
  "name": "Jane Doe",
  "phone": "0712345678",
  "service": "Deep Tissue Massage",
  "date": "2023-12-25",
  "time": "14:00",
  "notes": "Allergic to nuts"
}
```

## 7. Deployment Notes

- **Hosting**: Can be deployed on Heroku, DigitalOcean, or any Node.js compatible host.
- **CORS**: Ensure the frontend domain is allowed in the CORS configuration in `server.js` for production.
- **WhatsApp**: For Twilio Sandbox, the owner must join the sandbox first. For production, you must register a WhatsApp Business Sender.
