require('dotenv').config()

exports.helloPubSub = (event, context) => {
  var payload = JSON.parse(Buffer.from(event.data, 'base64').toString());
  console.log(payload);
};
