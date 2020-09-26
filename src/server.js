import express from "express";
import bodyParser from "body-parser";

const app = express();
const router = express.Router();

const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.use(function (req, res, next) {
  console.log("/" + req.method);
  // TODO : middleware authenticate here
  next();
});

router.post("/api/v1/reminder/", function (req, res) {
  res.send(200);
});

app.use("/", router);

app.listen(port, function () {
  console.log(`server listening on port ${port}`);
});
