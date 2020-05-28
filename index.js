/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString){
  let str=timeString.split(":");
  let parsed=parseInt(str,2);
  if(parsed< 12){
    return "Good Morning";
  }
 else if (12>str<17){
 return "Good Afternoon";
}
else (str > 17){
  return "Good Evening";
}
}
function displayMessage(txt){
  document.getElementById("#greeting").innertext=txt;
}

