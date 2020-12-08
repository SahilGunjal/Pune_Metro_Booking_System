var express = require('express');
var mysql = require('mysql');
var app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const creds = require('./config');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

global.From_Station_No = undefined ;
global.To_Station_No = undefined;
global.Train_No;
global.Train_from;
global.Train_to;
global.Passenger_Id;
//global.pass_id = 1;

app.use(cors());
app.use(express.json());

var connection = mysql.createConnection({
//properties
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pune_metro_rail'
});

connection.connect(function(error){
    if(!!error) {
        console.log('Error');
    }
    else
    {
        console.log("Connected!");

    }
});

app.post("/insert", (req, res) => {

    const name = req.body.name;

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const age = req.body.age;
    const gender = req.body.gender;
    const address = req.body.address;
    const contact = req.body.contact;
    
    //var pass_id;

    
    
  
    connection.query(
      "INSERT INTO passenger (User_Name, Name, Password, Gender, Email, Age) VALUES (?,?,?,?,?,?)",
      [username, name, password, gender, email, age],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          //res.send("Values Inserted");
          //pass_id++;
          console.log("Gender");
          console.log(gender);
        }
      }
    );

   
/*
    connection.query("SELECT Passenger_Id FROM passenger  WHERE User_Name = ? AND Name = ? AND Password = ? ",[username,name,password],(err,result) => {
        if (err)
        {
            console.log(err);
        }
        else {
            
            console.log("Selecting passenger Id")
            console.log(result)
            console.log(result[0].Passenger_Id)
            pass_id = result[0].Passenger_Id;
            console.log(pass_id);
            
        }
    });
*/
 
  connection.query(
    "INSERT INTO ticket ( Passenger_Id,Status, No_of_Passengers, Cost, Train_No, From_Station, To_Station) VALUES (?,?,?,?,?,?,?)",
    [1,"C", 1, 100, Train_No, Train_from, Train_to  ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        //res.send("Values Inserted");
      }
    }
  );

  connection.query(
    "UPDATE ticket,passenger SET ticket.Passenger_Id =passenger.Passenger_Id  WHERE passenger.User_Name = ? AND passenger.Name = ? AND passenger.Password = ? AND ticket.Ticket_Id = passenger.Passenger_id ",[username,name,password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        //res.send("Values Inserted");
      }
    }
  );

  connection.query(
    "INSERT INTO contact ( Pass_Id, Contact_No) VALUES (?,?)",
    [1,contact],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        //res.send("Values Inserted");
      }
    }
  );

  connection.query(
    "UPDATE contact,passenger SET contact.Pass_Id =passenger.Passenger_Id  WHERE passenger.User_Name = ? AND passenger.Name = ? AND passenger.Password = ? AND contact.Pass_Id=1 AND contact.Contact_No=?",[username,name,password,contact],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        //res.send("Values Inserted");
      }
    }
  );

  connection.query("SELECT passenger.Name,passenger.User_Name,passenger.Email,passenger.Age,ticket.Train_No,ticket.From_Station,ticket.To_Station FROM ticket,passenger WHERE passenger.Name=? AND passenger.User_Name=? AND ticket.From_Station=? AND ticket.To_Station=?",[name,username,Train_from,Train_to], (err,result) => {
    if (err)
    {
        console.log(err);
    }
    else {
        res.send(result);
        console.log(result);
    }
});
  
});



app.get('/', function(req,resp){
    //about mysql
    connection.query("SELECT * FROM station", function(error, rows, fields) { 
        if(!!error) {
            console.log('Error in the query');
        }
        else {
            console.log('Succesful Query');
            console.log(rows[0].Station_Name);
            resp.json(rows);
            resp.send(results);
        }
});
});
/*
app.post("/search", (req, res) => {
    const Train_from = req.body.from;
    const Train_to = req.body.to;

    connection.query("SELECT Station_No FROM station WHERE Station_Name = ? ",[Train_from],(err,result) => {
        if (err)
        {
            console.log(err);
        }
        else {
            console.log(result);
            From_Station_No = result[0].Station_No;
            console.log(From_Station_No);
        }
    });


    connection.query("SELECT Station_No FROM station WHERE Station_Name = ? ",[Train_to],(err,result) => {
        if (err)
        {
            console.log(err);
        }
        else {
            To_Station_No = result[0].Station_No;
            console.log(To_Station_No);
        }
    });
});
*/
    /*
    db.query(
      "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
      [name, age, country, position, wage],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
    
  });
*/

app.post('/trains', (req,res) => {

     Train_from = req.body.from;
     Train_to = req.body.to;


     connection.query("SELECT Station_No FROM station  WHERE Station_Name = ? ",[Train_from],(err,result) => {
        if (err)
        {
            console.log(err);
        }
        else {
            From_Station_No = result[0].Station_No;
            console.log(From_Station_No);
        }
    });

    
    connection.query("SELECT Station_No FROM station  WHERE Station_Name = ? ",[Train_from],(err,result) => {
        if (err)
        {
            console.log(err);
        }
        else {
            From_Station_No = result[0].Station_No;
            console.log(From_Station_No);
        }
    });


    connection.query("SELECT Station_No FROM station WHERE Station_Name = ? ",[Train_to],(err,result) => {
        if (err)
        {
            console.log(err);
        }
        else {
            To_Station_No = result[0].Station_No;
            console.log(To_Station_No);
        }
    });
    

    if(From_Station_No < To_Station_No)
    {
    connection.query("SELECT stops_at.Train_No,Train_Name,stops_at.Station_No,Station_Name,Arrival_Time,Departure_Time,Date FROM stops_at,train,station WHERE stops_at.Train_No=train.Train_No AND stops_at.Station_No=station.Station_No and stops_at.Station_No IN (SELECT Station_No FROM station where Station_Name = ?) and train.From_Station_Id = 1 and train.To_Station_Id = 14",[Train_from], (err,result) => {
        if (err)
        {
            console.log(err);
        }
        else {
            console.log(Train_from)
            console.log(From_Station_No);
            console.log(To_Station_No);
            res.send(result);
        }
    });

    connection.query("SELECT stops_at.Train_No FROM stops_at,train,station WHERE stops_at.Train_No=train.Train_No AND stops_at.Station_No=station.Station_No and stops_at.Station_No IN (SELECT Station_No FROM station where Station_Name = ?) and train.From_Station_Id = 1 and train.To_Station_Id = 14",[Train_from], (err,result) => {
        if (err)
        {
            console.log(err);
        }
        else {
            Train_No = result[0].Train_No;
        }
    });

    }
    else
    {
        connection.query("SELECT stops_at.Train_No,Train_Name,stops_at.Station_No,Station_Name,Arrival_Time,Departure_Time,Date FROM stops_at,train,station WHERE stops_at.Train_No=train.Train_No AND stops_at.Station_No=station.Station_No and stops_at.Station_No IN (SELECT Station_No FROM station where Station_Name = ?) and train.From_Station_Id = 14 and train.To_Station_Id = 1",[Train_from], (err,result) => {
            if (err)
            {
                console.log(err);
            }
            else {
                console.log(Train_to)
                console.log("Hello")
                console.log(To_Station_No);
                res.send(result);
            }
        });

        connection.query("SELECT stops_at.Train_No FROM stops_at,train,station WHERE stops_at.Train_No=train.Train_No AND stops_at.Station_No=station.Station_No and stops_at.Station_No IN (SELECT Station_No FROM station where Station_Name = ?) and train.From_Station_Id = 14 and train.To_Station_Id = 1",[Train_from], (err,result) => {
            if (err)
            {
                console.log(err);
            }
            else {
                Train_No = result[0].Train_No;
            }
        });
    }

    

    
});

app.post('/delete', (req,res) => {

    TicketNo = req.body.ticketNo;

    connection.query("SELECT passenger.Name,passenger.User_Name,passenger.Email,passenger.Age,ticket.Train_No,ticket.From_Station,ticket.To_Station FROM ticket,passenger WHERE passenger.Passenger_Id=ticket.Passenger_Id AND ticket.Ticket_Id=?",[TicketNo], (err,result) => {
        if (err)
        {
            console.log(err);
        }
        else {
            res.send(result);
            console.log(result);
        }
    });


    

    
    
    
    connection.query("DELETE FROM ticket WHERE ticket.Ticket_Id=?",[TicketNo],(err,result) => {
       if (err)
       {
           console.log(err);
       }
       else {
           //console.log("Deleted");
           //console.log(TicketNo);
       }
   });

   connection.query("DELETE FROM passenger WHERE passenger.Passenger_Id = ?",[TicketNo],(err,result) => {
       if(err)
       {
           console.log(err);
       }
       else {
           //console.log("Deleted from Passenger");
       }
   })

   
});

app.post('/report1', (req,res) => {

    stationName = req.body.stationName;

    connection.query("SELECT passenger.Passenger_Id,passenger.Name,passenger.Age,passenger.Gender,ticket.From_Station,ticket.To_Station,ticket.Train_No FROM ticket,passenger WHERE passenger.Passenger_Id=ticket.Passenger_Id AND ticket.From_Station=? AND passenger.Age<26",[stationName], (err,result) => {
        if (err)
        {
            console.log(err);
        }
        else {
            res.send(result);
            console.log(result);
        }
    });
});

app.post('/report2', (req,res) => {

    stationName = req.body.stationName;

    connection.query("SELECT passenger.Passenger_Id,passenger.Name,passenger.Age,passenger.Gender,ticket.From_Station,ticket.To_Station,ticket.Train_No FROM ticket,passenger WHERE passenger.Passenger_Id=ticket.Passenger_Id AND ticket.From_Station=? AND passenger.Age>60",[stationName], (err,result) => {
        if (err)
        {
            console.log(err);
        }
        else {
            res.send(result);
            console.log(result);
        }
    });
});

app.post('/report3', (req,res) => {

    stationName = req.body.stationName;

    connection.query("SELECT passenger.Passenger_Id,passenger.Name,passenger.Age,passenger.Gender,ticket.From_Station,ticket.To_Station,ticket.Train_No FROM ticket,passenger WHERE passenger.Passenger_Id=ticket.Passenger_Id AND ticket.From_Station=? AND passenger.Gender='Female   '",[stationName], (err,result) => {
        if (err)
        {
            console.log(err);
        }
        else {
            res.send(result);
            console.log(result);
        }
    });
});

app.post('/report4', (req,res) => {

    stationName = req.body.stationName;

    connection.query("SELECT passenger.Passenger_Id,passenger.Name,passenger.Age,passenger.Gender,ticket.From_Station,ticket.To_Station,ticket.Train_No FROM ticket,passenger WHERE passenger.Passenger_Id=ticket.Passenger_Id AND ticket.From_Station=? AND passenger.Gender='Male'",[stationName], (err,result) => {
        if (err)
        {
            console.log(err);
        }
        else {
            res.send(result);
            console.log(result);
        }
    });
});

app.post('/form', (req,res)=>{
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service:'Gmail',
        port:465,
        auth:{
            user:creds.USER,
            pass:creds.PASS
        }
    });

    let mailOptions={
        from:data.email,
        to:'murtuzanh1@gmail.com',
        subject:`Message from ${data.name}`,
        html:`
        
            <h3>Sender Info</h3>
            <ul>
                <li>Name : ${data.name}</li>
                <li>Email : ${data.email}</li>
                <li>Phone : ${data.phone}</li>
                <li>Message : ${data.message}</li>
                </ul>

                <h3>Message</h3>
                <p>${data.message}</p>

        `
    };


    smtpTransport.sendMail(mailOptions, (error, response)=>{
        if(error){
            res.send(error);
        }
        else{
            console.log("Success");
            res.send('Success');
        }
    })

    smtpTransport.close();
})

app.listen(1337);
