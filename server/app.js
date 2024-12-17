import express from "express";
import https from 'https';
import fs from 'fs';


const app = express();
const PORT = '3000';
const options = {
    key: fs.readFileSync('server/.ssl/private-key.pem'),
    cert: fs.readFileSync('server/.ssl/certificate.pem')
  };
app.get('/',(req,res)=>{
    res.send('Hello world');
});


https.createServer(options,app).listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
})