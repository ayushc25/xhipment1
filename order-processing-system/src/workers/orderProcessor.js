const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
});

const sqs = new AWS.SQS();
const QUEUE_URL = process.env.SQS_QUEUE_URL;

async function processOrders() {
  console.log("🔄 Worker listening for orders...");

  const params = {
    QueueUrl: QUEUE_URL,
    MaxNumberOfMessages: 1,
    VisibilityTimeout: 20,  // ✅ Ensures message is invisible for 20s while processing
    WaitTimeSeconds: 5
  };

  try {
    const data = await sqs.receiveMessage(params).promise();

    if (data.Messages && data.Messages.length > 0) {
      const message = data.Messages[0];
      const order = JSON.parse(message.Body);

      console.log(`✅ Processing Order: ${order.orderId} for User: ${order.userId}`);

      // ✅ Simulating order processing
      await new Promise(resolve => setTimeout(resolve, 5000));

      // ✅ DELETE message after processing
      await sqs.deleteMessage({
        QueueUrl: QUEUE_URL,
        ReceiptHandle: message.ReceiptHandle
      }).promise();

      console.log("🗑️ Order removed from queue.");
    } else {
      console.log("⚠️ No messages in queue.");
    }
  } catch (error) {
    console.error("❌ Error receiving message:", error);
  }
}

// Keep checking for messages
setInterval(processOrders, 5000);
