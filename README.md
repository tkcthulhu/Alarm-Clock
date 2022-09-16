# Alarm-Clock
Alarm clock project

**HTML**
>*MVP*   
>>-Create an element for the current time display [X]
``` 
DIV "clock"
    CURRENT TIME
    sub div time
    CURRENT DATE
    sub div date
```
>>
>>-Create an element for alarm time input (use HTML datetime for a nice deep stretch) [X]
```
div "alarm time input"
input form (minutes, hours, seconds, AM/PM) <button>SET ALARM</button>
```
```
use DIV alarm form
use FORM element
INPUT hours MIN 1 MAX 12
INPUT minutes MIN 00 MAX 60
INPUT seconds MIN 00 MAX 60
INPUT AM/PM
set alarm BUTTON
```
>>
>>-Create an element to display active alarm [X]
```
div "alarm time"
display form input as string
```

>*Stretch/for fun*
>>-Create an element for day:month:year [X]
>>
>>-Create a snooze button
```
SNOOZE -> getAlarmString -> update +5 to minutes value -> replace alarmString
```
>>
>>-Create an on/off toggle
```
ON/OFF -> (inside checkAlarm) IF ON/OFF button = OFF return/ else if (alarm = time) do alarm shit
```
>>
>>-Create a 12hr/24hr toggle
```
12/24 -> (inside getAlarmTime && getDateTime) -> IF 24 (clicked) getTimeString ELSE IF getTimeString (IF hours > 12 ? PM : AM)(hours = hours - 12)
```
>>
>>-Create a element to show a countdown to alarm
```
const finalCountdown = () => {
    let countdown = (alarmTimeString - timeString)
    push to HTML element
}
setInterval(finalCountDown, 1000)
```

**CSS**

>*Stretch*
>>
>>-Make an analog clock face
>>

**JS**

>*MVP*
>>-Create a function to get the current time [X]
```
set variable = Date object
variable = [hours, minutes, seconds, AMPM] = [dateVar-getHours(), dateVar-getMinutes(), dateVar-getSeconds]
```
>>
>>-Create a function to display the current time updating every second [X]
>>>-Convert to String? [X]
>>>-Minutes & seconds don't show a zero [FIXED]
```
getTimeString = (hours, minutes, seconds) FAT ARROW BOI 

    RETURN (`${hours}:${minutes}:${seconds}`);

getDateString = (month, day, year) FAT ARROW BOI 
    RETURN (`${month}\/${day}\/${year}`);

time = HTML div "time"
date = HTML div "date"

timeString = getTimeString(hours, minutes, seconds, AM/PM)
dateString = getDateString(month, day, year)

push timeString => "time"
push dateString => "date"
```
>>
>>-Create a function to trigger alarm if currentTime === alarmTime [X]
``` 
IF currentTime = alarmTime 
pop up message & play audio
```
```
const alarm = (timeString) => {
    if (alarmString === timeString) {
        alert('It\'s yo ALARM') && alarmAudio.play();
    }
}
```
>>
>>-Create a function to take values from submit form for the alarm [X]
>>
>>-Create a function to convert alarm input from numbers to string [X]
>>
>>-Play a sound on alarm [X]