const path = require('path');
const express = require('express');// express is a function

// console.log(__dirname);
// console.log(path.join(__dirname,'../public'));
//directory setup

const app = express();

//define paths for express config
const viewsPath = path.join(__dirname,'../templates');
app.use(express.static(path.join(__dirname,'../public')))

//setup handlebars engine and views location
app.set('view engine','hbs');
app.set('views',viewsPath);


// app.get('',(req,res)=>{
//     res.send('<h1>Hello express!</h1>');
// })


// app.get('/help',(req,res)=>{
//     res.send([{
//         name:'Saish',
//         age:22
//     },{
//         name:'Nikhil',age:14
//     }]); 
// })

app.get('/about',(req,res)=>{
    res.render('about',{
        companyName:'Microsoft'
    });
})

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Saish Borkar'
    });
})

app.get('/help',(req,res)=>{
    res.render('help',{
        msg:'We are happy to help you'
    })
})



app.get('/weather',(req,res)=>{
    res.send({latitude:15.232,
               longitude:72.213,
            location:'Margao'}); 
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});