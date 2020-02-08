const express = require('express');// express is a function

const app = express();

app.get('',(req,res)=>{
    res.send('Hello express!');
})

app.get('/help',(req,res)=>{
    res.send('Help page'); 
})

app.get('/about',(req,res)=>{
    res.send('Created by Saish Borkar');
})

app.get('/weather',(req,res)=>{
    res.send('Weather App'); 
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});