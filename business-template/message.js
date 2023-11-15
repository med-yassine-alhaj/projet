async function fetchMessages() {
  const data = await fetch("http://localhost:3000/message", { method: "GET" });
  const message = await data.json();
  return message;
}

// table // services
async function insertMessages() {
  const messages = await fetchMessages();

  const messageTable = document.getElementById("message");

  // 10 services
  messages.forEach(message => {
    let messageHtml = `<tr>
        <td>${message.name}</td>
        <td>${message.email}</td>
        <td>${message.message}</td>
      </tr>`;
    messageTable.innerHTML += messageHtml;
  });
}

insertMessages();
