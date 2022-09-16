
const getTimeString = ( hours, minutes, seconds ) => {
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (hours < 10) {
            hours = `0${hours}`;
        }
    return `${hours}:${minutes}:${seconds}`;
};

const getDateString = ( month, day, year ) => {
        if (month === 0) {
            month = 'January';
        };
        if (month === 1) {
            month = 'February';
        }; 
        if (month === 2) {
            month = 'March';
        }; 
        if (month === 3) {
            month = 'April';
        }; 
        if (month === 4) {
            month = 'May';
        };
        if (month === 5) {
            month = 'June';
        };
        if (month === 6) {
            month = 'July';
        }; 
        if (month === 7) {
            month = 'August';
        }; 
        if (month === 8) {
            month = 'September';
        };
        if (month === 9) {
            month = 'October';
        };
        if (month === 10) {
            month = 'November';
        };
        if (month === 11) {
            month = 'December';
        };
    return `${month} ${day}, ${year}`;
};

const getAlarmString = (alarmTime) => {
    return `${alarmTime}:00`;
};

const getAlarmTime = () => {
    const alarmTime = document.getElementById("alarm").value;
    let alarmDisplay = document.getElementById("currentAlarm");
    const alarmString = getAlarmString(alarmTime.toString());
    alarmDisplay.innerHTML = alarmString;
};


const checkAlarm = (hours, minutes, seconds, alarmTime) => {
    const timeString = getTimeString( hours, minutes, seconds );
    const checkAlarmTime = getAlarmString(alarmTime);
    let alarmBanner = document.getElementById("alarmBanner");
    const R2D2 = new Audio('sounds/R2D2.mp3');
    if (timeString === checkAlarmTime) {
        R2D2.play();
        alarmBanner.innerHTML = '!!ALARM!!';
    };
};

const getDateTime = () => {
    let nowTime = document.getElementById("time");
    let currentDate = document.getElementById("date");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    let month = currentTime.getMonth();
    let day = currentTime.getDate();
    let year = currentTime.getFullYear();
    
    const timeString = getTimeString( hours, minutes, seconds );
    const dateString = getDateString( month, day, year);
    nowTime.innerHTML = timeString;
    currentDate.innerHTML = dateString;

    let alarmTime = document.getElementById("alarm").value;
    checkAlarm(hours, minutes, seconds, alarmTime);
};


getDateTime();
setInterval(getDateTime, 1000);

const alarmButton = document.getElementById("setAlarm");
alarmButton.addEventListener("click", getAlarmTime);

