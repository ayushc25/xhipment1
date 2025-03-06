const { SendMessageCommand } = require("@aws-sdk/client-sqs");
const { sqsClient } = require("../config/aws");
require("dotenv").config();

const QUEUE_URL = process.env.SQS_QUEUE_URL;

// Function to send an order to the SQS queue
exports.sendToQueue = async (order) => {
  const params = {
    QueueUrl: QUEUE_URL,
    MessageBody: JSON.stringify(order)
  };

  try {
    const command = new SendMessageCommand(params);
    await sqsClient.send(command);
    console.log(`📤 Order sent to SQS: ${order.orderId}`);
  } catch (error) {
    console.error("❌ Error sending message to SQS", error);
  }
};
