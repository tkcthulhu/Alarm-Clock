const getTimeString = ({ hours, minutes, seconds, AMPM }) => {
    return `${hours}:${minutes}:${seconds} ${AMPM}`;
};

const getTime = () => {
    let currentTime = document.getElementById("clock");
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let AMPM = hours >= 12 ? "PM" : "AM";
}
