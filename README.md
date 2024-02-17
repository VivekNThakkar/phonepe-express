# Node.js Express PhonePe Payment Gateway Integration

Welcome to the Node.js Express PhonePe Payment Gateway Integration repository! This project demonstrates the seamless integration of the PhonePe payment gateway into a Node.js and Express application. Follow the comprehensive guide below to set up the payment gateway for User Acceptance Testing (UAT).

## Features

/pay API: Initiate payments and redirect users to the PhonePe payment flow.
/payment/validate/:merchantTransactionId API: Validate payment status using merchantTransactionId.

## UAT Testing Credentials

For testing purposes in the UAT environment, use the following credentials:

Card number: `4242424242424242`
Expiry month: `12`
Expiry year: `44`
CVV: `936`
OTP: `123456`

## How to Run

Clone the project:
`git clone https://github.com/VivekNThakkar/phonepe-express.git`

Install dependencies:
`npm install`

Run the app:
`npm run start`

Open in your browser:
`http://localhost:3002/pay?amount=300`


## API Endpoints
**/pay API**: Initiate payments.
Method: GET
Endpoint: /pay
Parameters: amount (query parameter)

**/payment/validate** API: Validate payment status.
Method: GET
Endpoint: /payment/validate/:merchantTransactionId


## Contact Information
For any inquiries, collaborations, or development work, feel free to reach out:

LinkedIn: `https://www.linkedin.com/in/vivek-thakkar-b94361121/`
Email: `thakkarv29@gmail.com`
GitHub: `https://github.com/VivekNThakkar`

Happy coding!