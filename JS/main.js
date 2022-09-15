
const getTimeString = ({ hours, minutes, seconds }) => {
    return `${hours}:${minutes}:${seconds}`;
};

const getDateString = ({ month, day, year }) => {
    return `${month}\/${day}\/${year}`;
};

const getDateTime = () => {
    let currentTime = document.getElementById("time");
    let currentDate = document.getElementById("date");
    const todayDate = new Date();
    let [hours, minutes, seconds] = [todayDate.getHours(), todayDate.getMinutes(), todayDate.getSeconds()];
    let [month, day, year] = [todayDate.getMonth(), todayDate.getDate(), todayDate.getFullYear()];
    //let AMPM = hours >= 12 ? "PM" : "AM";
    const timeString = getTimeString({ hours, minutes, seconds});
    const dateString = getDatestring({ month, day, year});
    currentTime.innerHTML = timeString;
    currentDate.innerHTML = dateString;
}

setInterval(1000);