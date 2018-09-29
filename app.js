"use strict";
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const app = express();
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(awsServerlessExpressMiddleware.eventContext());
app.use(express.static("public"));

router.get("/", async (req, res) => {
  const workOrderModel = require("./models/work-orders");
  const count = await workOrderModel.getCount();

  console.log(count);

  res.send(`Hi Dad, db count is: ${count}`);
});

router.get("/order", (req, res) => {
  res.sendFile(`${__dirname}/templates/order-form.html`);
});

router.post("/api/order", async (req, res) => {
  const orderData = Object.assign({}, req.body);

  const workOrderModel = require("./models/work-orders");

  const record = await workOrderModel.save(orderData);

  res.json({ status: "ok" });
});

// The aws-serverless-express library creates a server and listens on a Unix
// Domain Socket for you, so you can remove the usual call to app.listen.
// app.listen(3000)
app.use("/", router);

// Export your express server so you can import it in the lambda function.
module.exports = app;
