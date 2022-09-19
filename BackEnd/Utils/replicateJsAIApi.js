import Replicate from "replicate-js";

const replicate = new Replicate();

const helloWorldModel = await replicate.models.get("replicate/hello-world");
const helloWorldPrediction = await helloWorldModel.predict({ text: "test" });
console.log(helloWorldPrediction);