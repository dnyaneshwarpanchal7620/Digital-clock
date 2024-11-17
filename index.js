let hr = document.getElementById("hr")
let min = document.getElementById("min")
let sec = document.getElementById("sec")


// console.log(currenttime);
const currentDate = new Date()
console.log(currentDate);



setInterval(()=>{

    const currenttime = new Date();

    hr.innerHTML = (currenttime.getHours()<10?"0":"") + currenttime.getHours();
    min.innerHTML = (currenttime.getMinutes()<10?"0":"") + currenttime.getMinutes();
    sec.innerHTML = (currenttime.getSeconds()<10?"0":"") +currenttime.getSeconds();

 
},1000)
