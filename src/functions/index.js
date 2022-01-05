const functions = require('firebase-functions');
const cors = require('cors')({ origin: '*' });

const { Client, Webhook, resources } = require('coinbase-commerce-node');
const coinbaseSecret = 'bea1f8df-c862-4a63-9196-75dedd845164';

Client.init(coinbaseSecret);

const { Charge } = resources;

exports.createCharge = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    // TODO get real product data from database
    const chargeData = {
      name: 'ICO-1',
      description: 'Useless widget created by Fireship',
      userInfo: 'tokenxx',
      local_price: {
        amount: 1.0,
        currency: 'USD',
      },
      pricing_type: 'fixed_price',
      metadata: {
        user: 'jeffd23',
      },
    };

    const charge = await Charge.create(chargeData);
    console.log(charge);

    res.send(charge);
  });
});

exports.webhookHandler = functions.https.onRequest(async (req, res) => {
  const rawBody = req.rawBody;
  const signature = req.headers['x-cc-webhook-signature'];
  const webhookSecret = '7cff6127-13a0-4dac-b1fe-8da57167163e';
  console.log(" request " + req);
  console.log("rawbody" + rawBody)
  try {
    const event = Webhook.verifyEventBody(rawBody, signature, webhookSecret);

    if (event.type === 'charge:pending') {
      // TODO
      console.log("webhook request" + req)
      console.log("rawbody" + rawBody)
      // user paid, but transaction not confirm on blockchain yet
    }

    if (event.type === 'charge:confirmed') {
      // TODO
      console.log("webhook request" + req)
      console.log("rawbody" + rawBody)
      // all good, charge confirmed
    }

    if (event.type === 'charge:failed') {
      // TODO
      console.log("webhook request" + req)
      // charge failed or expired
    }

    res.send(`success ${event.id}`);
    
  } catch (error) {
    functions.logger.error(error);
    res.status(400).send('failure!');
  }
});
