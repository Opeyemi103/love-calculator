var song = new Music('audio/positive.mp3')
function calc(){
    var input1 = userInput1.value
    var input2 = userInput2.value
    
    var ans = Math.random()*100
    var result = `${Math.round(ans)}%`
    userInput1.value =""
    userInput2.value =""
    
    if(input1 == ''){
    disp.innerHTML = 'You must input a value'

    }else if(input2 == ''){
        disp.innerHTML = 'You must input a value'

    }else if(ans >=0 && ans < 40){
        disp.innerHTML =` 
        <h3 style="color:white">You better run away from ${input2}</h3>
        <h1 style="color:white">${Math.round(ans)} % </h1>
        <h3 style="color:red"> Danger Zone!!! Keep Off. 😭😭😭</h3>`
        song()
        
    }else if(ans >=40 && ans < 60 ){
        disp.innerHTML =` 
        <h3 style="color:white">You and ${input2} should have a re-think about it</h3>
        <h1 style="color:white">${Math.round(ans)} % </h1>
        <h3 style="color:yellow"> Warning!!! This isn't good enough you should pray about it.💔💔 </h3> 
        `

    }else if(ans >=60 && ans < 80){
        disp.innerHTML =`
        <h3 style="color:white"> You and ${input2} can proceed</h3> 
        <h1 style="color:white">${Math.round(ans)} % </h1>
        <h3 style="color:orange">This is better you can proceed with your Love 💌💟💌</h3>`

    }else if(ans >=80 && ans <= 100){

        disp.innerHTML =` 
        <h3 style="color:white">You and ${input2} are a perfect match</h3>
        <h1 style="color:white">${Math.round(ans)} % </h1>
        <h3 style="color: green">Wow Congratulations You'll make a great couple.❤❤❤❤ </h3>`
    }
    else{
        var ans = Math.random()*100
        var result = `${Math.round(ans)}%`
        console.log(result);
        disp.innerHTML = result
        
    }
}