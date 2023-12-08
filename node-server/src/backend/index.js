import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from 'path';
import apiRouter from "./router.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.set('views', path.join(__dirname, '../frontend'));
// app.set('view engine', 'pug');
app.use('/', apiRouter);

const configuration = new Configuration({
    organization: "org-NcFeGspmcbktUPFTEcilcyIA",
    apiKey: "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",
  });
const openai = new OpenAIApi(configuration);

app.post("/", async (request, response) => {
    const { chat } = request.body;
    
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          // content: "You are a EbereGPT. You can help with graphic design tasks",
          content: "You are a helpful assistant",
        },
        chat
      ],
    });
  
    response.json({
      output: result.data.choices[0].message,
    });
});

var server = app.listen(4000, function(){
    console.log('server started');
});