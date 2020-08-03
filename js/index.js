//function Timergo(){
//    setInterval(function(){
//        var hL = document.getElementById('number_1'),
//         mL = document.getElementById('number_2'),
//         sL = document.getElementById('number_3'),
//            
//            dateNow = new Date().setTime(),
//            dateFinish = new Date(19,06,28),
//            
//            sec = Math.floor((dateFinish - dateNow) / 1000),
//            
//            secToMinutes = sec % 3600,
//        
//            hourNumber = Math.floor( sec / 3600), 
//            minNumber = Math.floor( secToMinutes / 60),
//            secNumber = secToMinutes / 60;
//        
//        hL.innerHTML = hourNumber;
//        mL.innerHTML = minNumber;
//        sL.innerHTML = secNumber;
//            
//    })
//}
//
//Timergo();


//

//("October 4, 1957 19:28:34 GMT")

//

function timerLeft(){
    setInterval(function(){
        var hoursLeft = document.getElementById('number_1'),
            //hoursText = document.getElementById('timer-v-hours__text'),
            minutesLeft = document.getElementById('number_2'),
            //minutesText = document.getElementById('timer-v-minutes__text'),
            secLeft = document.getElementById('number_3'),
            //minutesText = document.getElementById('timer-v-seconds__text'),
            dayLeft = document.getElementById('number_4'),
            
            dateNow  = new Date().getTime(),
            dateFinish = new Date("July 30, 2020 19:49:00 GMT"),

            
            sec = Math.floor(( dateFinish - dateNow) / 1000),
            secToMinutes = sec % 3600,
            secToHours = sec % 84600,
            dayNumber = Math.floor(sec / 86400),
            hoursNumber = Math.floor(secToHours / 3600), 
            minutesNumber = Math.floor(secToMinutes / 60),
            secondNumber = secToMinutes % 60;
        
        

        
           hoursLeft.innerHTML = hoursNumber;
           minutesLeft.innerHTML = minutesNumber;
           secLeft.innerHTML = secondNumber;
           dayLeft.innerHTML = dayNumber;
           
    })
}

timerLeft();








//         ALMOST READY

//            sec = Math.floor(( dateFinish - dateNow) / 1000),
//            secToMinutes = sec % 3600,
//            secToHours = sec % 84600,
//            dayNumber = Math.floor(sec / 86400),
//            hoursNumber = Math.floor(secToHours / 3600), 
//            minutesNumber = Math.floor(secToMinutes / 60),
//            secondNumber = secToMinutes % 60;



//        ORIGINAL

//            sec = Math.floor(( dateFinish - dateNow) / 1000),
//            secToMinutes = sec % 3600,
//            dayNumber = Math.floor(sec / 86400),
//            hoursNumber = Math.floor(sec / 3600), 
//            minutesNumber = Math.floor(secToMinutes / 60),
//            secondNumber = secToMinutes % 60;