import express from "express";
var app     = express();
import { join } from "path";
import { json } from 'body-parser';
app.use(json());


import { createConnection } from 'mysql';
var connection = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'testdb'
});


app.get('/',function(req,res){
  res.sendFile(join(__dirname+'/src/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/bundle.js',function(req,res){
  res.sendFile(join(__dirname+'/src/build/bundle.js'));
  //__dirname : It will resolve to your project folder.
});

app.get('/lib/jquery-1.3.2.min.js',function(req,res){
  res.sendFile(join(__dirname+'/html/lib/jquery-1.3.2.min.js'));
  //__dirname : It will resolve to your project folder.
});

app.get('/abc',function(req,res){
  // console.log("requset recieved");

  connection.query('select *  from student;',  (error, results, fields) => {
    if (error) throw error;
    
    res.send(results);
  });
});

app.post('/login',function(req,res){
  console.log(JSON.stringify(req.body));
  console.log("requset recieved");
  var body = req.body
  connection.query('select * from users where username = ? and password = ?',  [body.username, body.password ], (error, results, fields) => {
    if (error) throw error;
    if(results.length > 0){
      res.send("success");
    } else {
      res.send("result is empty");
    }
  });
});

app.post('/insertdata', function(req, res) {
  // console.log(req.hasOwnProperty("body"));
  console.log(JSON.stringify(req.body));
  for(var index in req.body){
    connection.query('insert into student set ?',  req.body[index], (error, results, fields) => {
      if (error) throw error;
    });
  }
  if(req.body.length > 0){
    res.send("success");
  } else {
    res.send("result is empty");
    }
});

app.listen(3000);

console.log("Running at Port 3000");
