# Alarm-Clock
Alarm clock project

**HTML**
>*MVP*   
>>-Create an element for the current time display
``` 
DIV "clock"
    CURRENT TIME
    sub div time
    CURRENT DATE
    sub div date
```
>>
>>-Create an element for alarm time input (use HTML datetime for a nice deep stretch)
```
div "alarm time input"
input form (minutes, hours, seconds, AM/PM) <button>SET ALARM</button>
```
>>
>>-Create an element to display active alarm
```
div "alarm time"
display form input as string
```

>*Stretch/for fun*
>>-Create an element for day:month:year
>>
>>-Create a snooze button
>>
>>-Create an on/off toggle
>>
>>-Create a 12hr/24hr toggle
>>
>>-Make an analog clock face
>>
>>-Create a element to show a countdown to alarm

**CSS**


**JS**

>*MVP*
>>-Create a function to get the current time
```
set variable = Date object
variable = [hours, minutes, seconds, AMPM] = [dateVar-getHours(), dateVar-getMinutes(), dateVar-getSeconds]
```
>>
>>-Create a function to display the current time updating every second
>>>-Convert to String?
>>>-Minutes & seconds don't show a zero 
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
>>-Create a function to trigger alarm if currentTime === alarmTime
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
>>-Create a JS input field for the alarm
>>
>>-Build code to handle to alarm form
>>
>>-Create a function to reset alarm
>>
>>-Create a function to convert alarm input from string to numbers