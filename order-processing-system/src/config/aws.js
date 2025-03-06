const { SQSClient } = require("@aws-sdk/client-sqs");
require('dotenv').config();

const sqsClient = new SQSClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  }
});

module.exports = { sqsClient };
