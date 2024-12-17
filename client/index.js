import https from 'https';
import fs from 'fs';

const serverCert = fs.readFileSync('server/.ssl/certificate.pem'); 


const options = {
  hostname: 'localhost', 
  port: 3000,            
  path: '/',             
  method: 'GET',        
  ca: serverCert         
};

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);

  res.on('data', (data) => {
    console.log(`Response: ${data}`);
  });
});


req.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});


req.end();
