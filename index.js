//OPENAI CHATGPT API TEST

// RESOURCES:
// https://platform.openai.com/docs/api-reference/authentication
// https://reqbin.com/req/javascript/5k564bhv/get-request-bearer-token-authorization-header-example#:~:text=Sending%20Request%20with%20Bearer%20Token,Bearer%20%7Btoken%7D%20HTTP%20header.

//HTTP REQUEST

// Sending Request with Bearer Token Authorization Header [JavaScript/AJAX Code]
// To send a request with a Bearer Token authorization header using JavaScript/AJAX, 
// you need to make an HTTP GET or POST request and provide your Bearer Token with 
// the Authorization: Bearer {token} HTTP header. 
// Bearer Authentication (also called token authentication) is an 
// HTTP authentication scheme created as part of OAuth 2.0 but is now used on its own. 
// For security reasons, bearer tokens are only sent over HTTPS (SSL). 
// In this JavaScript/AJAX Bearer Token Authorization Header example, 
// we send a request with a bearer token to the ReqBin echo URL. 
// Click Send to run the JavaScript/AJAX Bearer Token Authorization 
// Header example online and see the results. 
// The JavaScript/AJAX code was automatically generated for the 
// GET Request Bearer Token Authorization Header example.


// GET /echo/get/json HTTP/1.1
// Host: reqbin.com
// Accept: application/json
// Authorization: Bearer {token}


// The OpenAI API uses API keys for authentication. Visit your API Keys page to retrieve the API key you'll use in your requests.

// Remember that your API key is a secret! Do not share it with others or expose it in any client-side code (browsers, apps). 
// Production requests must be routed through your own backend server where your API key can be securely loaded from an environment variable or key management service.

// All API requests should include your API key in an Authorization HTTP header as follows:

// Authorization: Bearer YOUR_API_KEY

// Requesting organization

// For users who belong to multiple organizations, 
// you can pass a header to specify which organization is used for an API request. 
// Usage from these API requests will count against the specified organization's subscription quota.

// Example curl command:


// curl https://api.openai.com/v1/models \
//   -H 'Authorization: Bearer YOUR_API_KEY' \
//   -H 'OpenAI-Organization: org-D4tdNE2fAQ5OksNhifuYQJaA'

// Example with the openai Node.js package:


// import { Configuration, OpenAIApi } from "openai";
// const configuration = new Configuration({
//     organization: "org-D4tdNE2fAQ5OksNhifuYQJaA",
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();


// Organization IDs can be found on your Organization settings page.

// Making requests
// You can paste the command below into your terminal to run your first API request. Make sure to replace YOUR_API_KEY with your secret API key.


// curl https://api.openai.com/v1/completions \
// -H "Content-Type: application/json" \
// -H "Authorization: Bearer YOUR_API_KEY" \
// -d '{"model": "text-davinci-003", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}'
// This request queries the Davinci model to complete the text starting with a prompt of "Say this is a test". 
// The max_tokens parameter sets an upper bound on how many tokens the API will return. You should get a response back that resembles the following:


// {
//     "id": "cmpl-GERzeJQ4lvqPk8SkZu4XMIuR",
//     "object": "text_completion",
//     "created": 1586839808,
//     "model": "text-davinci:003",
//     "choices": [
//         {
//             "text": "\n\nThis is indeed a test",
//             "index": 0,
//             "logprobs": null,
//             "finish_reason": "length"
//         }
//     ],
//     "usage": {
//         "prompt_tokens": 5,
//         "completion_tokens": 7,
//         "total_tokens": 12
//     }
// }

// Now you've generated your first completion. 
// If you concatenate the prompt and the completion text (which the API will do for you if you set the echo parameter to true), 
// the resulting text is "Say this is a test. This is indeed a test." 
// You can also set the stream parameter to true for the API to stream back text (as data-only server-sent events).

