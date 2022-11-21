const fetch = require("node-fetch");

exports.fetchImagePrediction = (URL) => {
  let USER_ID = "alexmsmith";
  let PAT = "44e576875aeb4838bfb766db8dc9dd3c";
  let APP_ID = "my-first-application";
  let MODEL_ID = "general-image-recognition";
  MODEL_VERSION_ID = "aa7f35c01e0642fda5cf400f543e7c40";

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  /*   console.log(
    "https://api.clarifai.com/v2/models/" +
      MODEL_ID +
      "/versions/" +
      MODEL_VERSION_ID +
      "/outputs"
  ); */

  let predictions = fetch(
    "https://api.clarifai.com/v2/users/" +
      USER_ID +
      "/apps/" +
      APP_ID +
      "/models/" +
      MODEL_ID +
      "/outputs",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      result = JSON.parse(result);

      let predictions = result.outputs[0].data.concepts;

      //console.log("In model", predictions);
      //console.log(predictions);
      /*       predictions.forEach((i) => {
        console.log(i.name, i.value);
      }); */
      return predictions;
    })
    .catch((err) => console.log("error", err));

  return predictions;
};

exports.fetchRPSPrediction = (URL) => {
  let USER_ID = "alexmsmith";
  let PAT = "2504ebd866a24a6a823a993efd91f6ca";
  let APP_ID = "rock-paper-scissors";
  let MODEL_ID = "rock-paper-scissors";
  MODEL_VERSION_ID = "cdeaa64feb9744b2b2da51dfad6ee3f4";
  //const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  console.log(URL, " to post");

  let predictions = fetch(
    "https://api.clarifai.com/v2/users/" +
      USER_ID +
      "/apps/" +
      APP_ID +
      "/models/" +
      MODEL_ID +
      "/outputs",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      result = JSON.parse(result);
      let predictions = result.outputs[0].data.concepts;

      return predictions;
    })
    .catch((err) => console.log("error", err));

  return predictions;
};
