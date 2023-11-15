var a = document.getElementById("navLInk");
function hidemenu() {
  a.style.right = "-200px";
}
function showmenu() {
  a.style.right = "0px";
}

// send message to server
async function sendMessage(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  console.log(name, email, message);

  let data = {
    name,
    email,
    message,
  };

  let response = await fetch("http://localhost:3000/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log(response);

  if (response.status == 200) window.location.reload();
}

const body = Array.from(document.getElementsByTagName("body"))[0];
console.log(body);

function hideOnEvent(event) {
  if (
    event.target.className !== null &&
    event.target.className.includes("not-close")
  )
    return;

  hidemenu();
}

body.addEventListener("click", hideOnEvent);
