const figlet = require("figlet");

figlet("H i t m a n  4 5", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });