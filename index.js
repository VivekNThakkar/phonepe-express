// importing modules
const express = require("express");
const port = 3002;
const axios = require("axios");
const app = express();
const sha256= require('sha256')

const uniqid = require("uniqid");

const MERCHANT_ID = "PGTESTPAYUAT";
const PHONE_PE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const SALT_INDEX = 1;
const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";

app.get("/", (req, res) => {
  res.send("PhonePe Integration APIs!");
});

app.get("/pay", (req, res) => {
  const payEndpoint = "/pg/v1/pay";

  const merchantTransactionId = uniqid();

  const payload = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: merchantTransactionId,
    merchantUserId: "123",
    amount: 1,
    redirectUrl: `https://localhost:3002/redirect-url/${merchantTransactionId}`,
    redirectMode: "REDIRECT",
    mobileNumber: "9999999999",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const bufferObj = Buffer.from(JSON.stringify(payload, "utf-8"));
  const base64encoded = bufferObj.toString("base64");
  const xVerify = sha256(base64encoded + payEndpoint + SALT_KEY) + "###" + SALT_INDEX

  const options = {
    method: "post",
    url: `${PHONE_PE_HOST_URL}/pg/v1/pay`,
    headers: {
      accept: "text/plain",
      "Content-Type": "application/json",
      "X-VERIFY": xVerify
    },
    data: {
      request: base64encoded,
    },
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);

      res.send(response.data)
    })
    .catch(function (error) {
      console.error(error);
    });
});
