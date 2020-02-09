const path = require('path');
const express = require('express');// express is a function
const hbs = require('hbs');
const geocode = require('./util/geocode');
const forecast = require('./util/forecast');
// console.log(__dirname);
// console.log(path.join(__dirname,'../public'));
//directory setup

const app = express();

const port  = process.env.PORT || 3000;

var cors = require('cors')

app.use(cors()) 

//define paths for express config
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');
app.use(express.static(path.join(__dirname,'../public')))

//setup handlebars engine and views location

app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

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
        title:'About',
        name:'saish',
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
        msg:'We are happy to help you',
        title:'help',
        name:'Saish Borkar'
    })
})



app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
        return res.send({
            error:'You must enter a location!'
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error)
        {
          return console.log(error);
        }
        forecast(latitude,longitude,(error, {summary,temperature,probability}) => {
         
                if(error)
            {
                return console.log(error);
            }
            res.send({  forecast:summary,
                temperature,
                probability,
                location,
                address:req.query.address}); 
     
        })
        
        })

  
})





app.get('/products',(req,res)=>{
    if(!req.query.search)
    {
       return res.send({
            error:'you must provide a search term'
        })
    }
    console.log(req.query.name);
    res.send({
        products:[]
    })
})


app.get('/help/*',(req,res)=>{

    res.render('404',{
        desc:'Help Article not found',
        name:'saish'
    });
})



app.get('*',(req,res)=>{

    res.render('404',{
        desc:'Page not found',
        name:'saish'
    })
})


app.listen(port,()=>{
    console.log('Server is up on port '+port);
});