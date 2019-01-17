'use strict';

module.exports.hello = async (event, context) => {
  const {pathParameters} = event;
  const {cmd} = pathParameters;
  let inportedModule;
  try {

    inportedModule = await import("./src/import-modules/" + cmd );
    inportedModule.doit()
  } catch (e) {
    console.log(e);
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!' + cmd + inportedModule.doit(),
      // input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
