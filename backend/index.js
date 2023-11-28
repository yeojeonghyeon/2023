import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(cors());

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

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
