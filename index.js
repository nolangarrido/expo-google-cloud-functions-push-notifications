require('babel-polyfill');

import Expo from 'exponent-server-sdk';

// Create a new Expo SDK client
let expo = new Expo();

// To send push notifications -- note that there is a limit on the number of
// notifications you can send at once, use expo.chunkPushNotifications()
exports.sendNotification = async function(req, res) {
  try {
    let receipts = await expo.sendPushNotificationsAsync([{
      // The push token for the app user to whom you want to send the notification
      to: req.body.token,
      sound: 'default',
      body: "This is a test Notification.",
      data: {withSome: 'data'},
    }]);
    return res.status(200).json(receipts)
  } catch (error) {
    return res.status(500).json({error: error})
  }
};