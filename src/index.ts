import express from "express";
import routes from "./routes";

const app = express();
const port = 3000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export const myFunc = function (a: number, b: number): number {
  return a + b;
};
