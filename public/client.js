// all of the HTML elements
var hourContainer = document.getElementById('hour');
var minuteContainer = document.getElementById('minutes');
var secondContainer = document.getElementById('seconds');
var time = document.getElementById('time');
var secondCounter = document.getElementById('secondCounter');

// function to manipulate CSS variables according to the time
var plotIt = function(hour, minute, second, prettyTime) {
    
    /* 
    
    Problem #1: 
    How can I convert values to be able
    to use viewport declarations? 
    
    Answer:
    Divide 100 by 12 for the hour and
    100 by 60 for minutes and seconds 
    
    */
  
    var hourValue = hour * 8.33 + 'vw';
    var minuteValue = minute * 1.67 + 'vh';
    var secondValue = second * 1.67 + 'vh';
    
    /* answer = divide 100 by 12 for the hour and
    100 by 60 for minutes and seconds */
    
    // Thank you, jQuery :)
    $(hourContainer).css('width', hourValue);
    $(minuteContainer).css('height', minuteValue);
    $(secondContainer).css('margin-top', secondValue);
    
    $(time).html(prettyTime);
    $(secondCounter).html(second);
  
};

setInterval(function() {
  
  /* 
  
  Problem #2: 
  How can I access the user's device time and 
  pass the details to the plotIt function? 
  
  Answer:
  Convert the date object to a string and use the
  string split method to isolate details within an array.
  
  */
  
  var now = new Date();
  var currentTime = now.toString().split(' ')[4];

  var currentHour = currentTime.split(':')[0];
  var minute = currentTime.split(':')[1];
  var second = currentTime.split(':')[2];

  /* 
  
  Problem #3: 
  How can I convert the 24-hour formatted time to
  a 12 hour format?
  
  Answer:
  Use an if statement to deal with hour values more than
  or less than 12 differently.
  
  */
  
  if (currentHour > 12) {
    var hour = currentHour - 12;
    var abbr = 'pm';
  } else {
    var hour = currentHour;
    var abbr = 'am'
  }
  
  var prettyTime = ' ' + hour + ':' + minute + ' ' + abbr + '';
  
  plotIt(hour, minute, second, prettyTime);
  
  /* 
  
  Problem #4: 
  How can I create a continuous clock rather than simply
  displaying the time when the user first loads the page?
  
  Answer:
  Use the higher-order setInterval function to update the details
  every second (or 1000 milliseconds).
  
  */
  
}, 1000);