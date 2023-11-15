// send message to server
async function sendMessage(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

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
