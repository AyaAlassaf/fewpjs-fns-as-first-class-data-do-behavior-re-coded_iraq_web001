/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){
  let parsed=parseInt(time.split(":")[0]);
  
  if(parsed < 12){
    return "Good Morning";
  }
  else if (parsed > 17){
  return "Good Evening";
}
 else {
 return "Good Afternoon";
}}
function displayMessage(txt){
  document.getElementById('greeting').innertext=txt;
}

