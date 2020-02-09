console.log("client side javascript page");
 const weatherForm = document.querySelector('form');
 const search = document.querySelector('input');
 const messageOne = document.querySelector('#message-1');



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    fetch('/weather?address='+location).then((response)=>{
               response.json().then((data)=>{
                if(data.error) {
                    console.log(data.error);  
                    messageOne.textContent = `Error! Invalid Location!`;   
                }
                else
                {
                    console.log(data);
                    console.log(data.location);
                    messageOne.textContent = `It is ${data.forecast}. It is ${data.temperature} fareignheight. There is ${data.probability}% of rain. ${data.location}.Wind speed is ${data.windSpeed}`;   
                
                }
   
            })
        
    })
   
})
