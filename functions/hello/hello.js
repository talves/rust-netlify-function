const { hello_world } = require("./pkg/hello");

exports.handler = async function (event) {
  try {
    const { name } = event.queryStringParameters || { name: "World" };
    const message = hello_world(name);

    return {
      statusCode: 200,
      body: message,
    };
  } catch (error) {
    console.log(error);
    return { statusCode: error.statusCode || 500, body: error.message };
  }
};
