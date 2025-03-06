const emailService = require('./services/emailService');  // ✅ Ensure correct path

const testEmail = async () => {
  try {
    const userEmail = 'cayush125@gmail.com';  // ✅ Replace with a real recipient email
    const order = { orderId: '123456' };       // ✅ Sample order data

    console.log('🔍 Sending test email to:', userEmail);
    await emailService.sendOrderConfirmation(userEmail, order);
    console.log('✅ Test email sent successfully!');
  } catch (error) {
    console.error('❌ Error sending test email:', error);
  }
};

testEmail();
