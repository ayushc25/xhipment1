const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

exports.sendOrderConfirmation = async (userEmail, order) => {
  const senderEmail = process.env.SENDER_EMAIL;
  console.log("🔍 Sender Email from .env:", senderEmail);  // ✅ Debug log

  if (!senderEmail) {
    console.error("❌ ERROR: Missing SENDER_EMAIL in .env");
    return;
  }

  const params = {
    Source: senderEmail,  // ✅ Ensure sender email is set
    Destination: { ToAddresses: [userEmail] },
    Message: {
      Subject: { Data: `Order Confirmation - ${order.orderId}` },
      Body: {
        Text: { Data: `Thank you for your order! Your order ID is ${order.orderId}.` }
      }
    }
  };

  try {
    await ses.sendEmail(params).promise();
    console.log(`✅ Email sent to ${userEmail} from ${senderEmail}`);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
};
