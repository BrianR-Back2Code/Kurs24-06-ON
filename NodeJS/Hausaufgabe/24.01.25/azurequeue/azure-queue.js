const { QueueServiceClient } = require("@azure/storage-queue");
const readline = require("readline");
require("dotenv").config();
const CONNECTION_STRING = process.env.CONNECTION_STRING; // Replace with your actual connection string
const queueName = "ramazonoderservice";

async function getLastMessage(queueClient) {
  try {
    // Receive a single message (the most recent one)
    const { receivedMessageItems } = await queueClient.receiveMessages({
      numberOfMessages: 1,
      visibilityTimeout: 10, // optional, makes the message invisible to other consumers temporarily
    });

    if (receivedMessageItems.length > 0) {
      const message = receivedMessageItems[0];
      console.log(`Last message received: ${message.messageText}`);

      // Optionally, delete the message after processing it
      await queueClient.deleteMessage(message.messageId, message.popReceipt);
      console.log("Message deleted after processing.");
    } else {
      console.log("No messages in the queue.");
    }
  } catch (err) {
    console.error("Error occurred while reading the last message:", err);
  }
}

async function main() {
  // Create a QueueServiceClient using the connection string
  const queueServiceClient =
    QueueServiceClient.fromConnectionString(CONNECTION_STRING);

  // Get a reference to the queue
  const queueClient = queueServiceClient.getQueueClient(queueName);

  // Create the queue if it does not exist
  await queueClient.createIfNotExists();

  console.log("Queue created (if not already existing).");

  // Create readline interface for user input
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Get the user input
  rl.question("Enter your message: ", async (messageText) => {
    try {
      // Send the message to the Azure Queue Storage
      const sendMessageResponse = await queueClient.sendMessage(messageText);
      console.log(
        `Sent message: ${messageText}, Message ID: ${sendMessageResponse.messageId}`
      );

      // Call getLastMessage() to read the last message
      await getLastMessage(queueClient);
    } catch (err) {
      console.error(
        "Error occurred while sending or receiving a message:",
        err
      );
    } finally {
      rl.close(); // Close the readline interface
    }
  });
}

main().catch((err) => {
  console.error("Error occurred:", err);
});
