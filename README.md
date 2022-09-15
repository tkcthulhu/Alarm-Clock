# Alarm-Clock
Alarm clock project

**HTML**
>*MVP*   
>>-Create an element for the current time display
>>
>>-Create an element for alarm time input (use HTML datetime for a nice deep stretch)
>>
>>-Create an element to display active alarm

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
>>
>>-Create a function to display the current time updating every second
>>>-Convert to String?
>>
>>-Create a function to trigger alarm if currentTime === alarmTime
``` 
IF currentTime = alarmTime 
pop up message & play audio
```
```
const alarm = (timesting) => {
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