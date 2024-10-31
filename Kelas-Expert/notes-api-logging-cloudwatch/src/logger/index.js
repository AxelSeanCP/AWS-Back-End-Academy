const winston = require("winston");
const WinstonCloudWatch = require("winston-cloudwatch");

const cloudwatchConfig = {
  logGroupName: "Application-Log-Group",
  logStreamName: "Application-Log-Stream",
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
  awsRegion: process.env.AWS_REGION,
  messageFormatter: ({ level, message }) => `[${level}] : ${message}}}`,
};

winston.add(new WinstonCloudWatch(cloudwatchConfig));

module.exports = winston;
