
var login =require('./login');
var m = require('./message');
var m1 = require("./functions");

    console.log(login);
    console.log(m.msg1);
    console.log(m1.msg2("hello Sara"));

    db.mycollection.insert(
        [
          { _id: 11, item: "pencil", qty: 50, type: "no.2" },
          { item: "pen", qty: 20 },
          { item: "eraser", qty: 25 }
        ]
     )