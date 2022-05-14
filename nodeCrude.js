const http = require("http");

const PORT = 4000;

const users = [
  { name: "jorge", age: 24 },
  { name: "andy", age: 18 },
  { name: "wendy", age: 26 },
];

let postData = [];

http
  .createServer((request, response) => {
    request.on("data", chunk => {
      // console.log(chunk);
      console.log("un saludo");
      console.log("data is streaming...");
      postData.push(chunk);
    });

    request.on("end", () => {
      const parseData = Buffer.concat(postData).toString();
      console.log(Buffer.concat(postData).toString());
      // console.log(parseData);
    });

    response.write(JSON.stringify(users));
    //console.log(users);
    response.end();
  })
  .listen(4000, () => {
    console.log(`Listening on port ${PORT}`);
  });
