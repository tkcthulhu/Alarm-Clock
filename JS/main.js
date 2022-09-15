
const getTimeString = ( hours, minutes, seconds, AMPM ) => {
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (hours < 10) {
            hours = `0${hours}`;
        }
    return `${hours}:${minutes}:${seconds} ${AMPM}`;
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

const checkTimeString = ( hours, minutes, seconds ) => {
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

const getAlarmString = (alarmTime) => {
    return `${alarmTime}:00`;
}

const getAlarmTime = () => {
    const alarmTime = document.getElementById("alarm").value;
    let alarmDisplay = document.getElementById("currentAlarm");
    const alarmString = getAlarmString(alarmTime.toString());
    alarmDisplay.innerHTML = alarmString;
};

const getDateTime = () => {
    let nowTime = document.getElementById("time");
    let currentDate = document.getElementById("date");
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let month = currentTime.getMonth();
    let day = currentTime.getDate();
    let year = currentTime.getFullYear();
    let AMPM = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
        hours = hours - 12;
    };
    
    const timeString = getTimeString( hours, minutes, seconds, AMPM );
    const dateString = getDateString( month, day, year);
    nowTime.innerHTML = timeString;
    currentDate.innerHTML = dateString;
}

const checkAlarm = (hours, minutes, seconds, alarmTime) => {
    const timeString = checkTimeString( hours, minutes, seconds );
    const checkAlarmTime = getAlarmString(alarmTime);
    if (timeString === checkAlarmTime) {
        alert('It\'s yo ALARM');
    };
};

getDateTime();
setInterval(getDateTime, 1000);

const alarmButton = document.getElementById("setAlarm");
alarmButton.addEventListener("click", getAlarmTime);

setInterval(checkAlarm, 1000);