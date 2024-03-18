import express from "express";
import morgan from "morgan";
import path from "path";
// app.js
const app = express();
const port = 4000;
const __dirname=path.resolve();

//middleware
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}));
// request handlers,route
// app.get('/', (req, res) => {
//   res.send('Welcome to Lillians Backend Server');
// });
let errorMessage = null;

app.get('/', (req, res) => {
  if(errorMessage){
  
    res.sendFile(path.join(__dirname,"public/login.html"))
  } else{
    res.sendFile(path.join(__dirname,"public/login.html"))

  }
  // res.sendFile(path.join(__dirname,"public/login.html"))
});

app.get('/node-course', (req, res) => {
  res.sendFile(path.join(__dirname,"public/node-course.html"))
});

app.post('/login',function(req, res){
  console.log(req.body)
  const password=req.body.password
  if(password && password=='Lillian'){
    //res.sendFile(path.join(__dirname,"public/node-course.html"))
    res.redirect("/node-course")
  } else{
  //  errorMessage='Wrong Password Entered'
  //  res.redirect("/")
  res.send(`
  <script>
    alert("Incorrect Password Entered");
    window.location.href = "/";
  </script>
`);
    
  }
  res.end()
});



app.listen(port, () => {
  console.log(`Server is listening on port 4000`);
});
