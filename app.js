const form = document.querySelector("form");
const secInput = document.querySelector("input");

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(secInput.value);
    countDown(secInput.value);

})

function countDown(num){
    
    let timer = setInterval(function(){
        num--;
        
        if(num <= 0){
            clearInterval(timer);
            console.log('Done')
        }
        else {
            console.log(num);
        }
        

    },1000);
    


  }
