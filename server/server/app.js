var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const CakesRouter = require("./routes/cakes");

var app = express();

mongoose
  .connect(
    "mongodb+srv://admin:adminadmin@cluster0.qbfby.mongodb.net/?retryWrites=true&w=majority&appName=cakes.cakes1"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err));

app.use(cors());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/cakes", CakesRouter);

app.post("/send-message", (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: "tvoje.email@doména.com",

    subject: subject,
    text: `Zpráva od: ${name} (${email})\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Došlo k chybě při odesílání zprávy.",
        });
    }
    res.json({ success: true, message: "Zpráva byla úspěšně odeslána!" });
  });
});

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
