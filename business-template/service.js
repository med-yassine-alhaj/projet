// fetch liste de services

async function fetchServices() {
  const data = await fetch("http://localhost:3000/service", { method: "GET" });
  const services = await data.json();
  return services;
}

// table // services
async function insertServiceIntoDiv(idContainer) {
  const services = await fetchServices();

  const servicesDiv = document.getElementById("servicesContainer");

  // 10 services
  services.forEach(service => {
    let serviceHtml;

    serviceHtml = `
      <div class="col-lg-4 col-md-6">
        <div class="single-services">
          <div class="service-icon">
            <i class="lni lni-shortcode"></i>
          </div>
          <div class="service-content">
            <h4>${service.name}</h4>
            <p>${service.description}</p>
          </div>
        </div>
      </div>`;

    servicesDiv.innerHTML += serviceHtml;
  });
}

async function insertServicesIntoTable() {
  const services = await fetchServices();

  const servicesDiv = document.getElementById("table");

  services.forEach(service => {
    let serviceHtml;
    serviceHtml = `<tr>
        <td>${service.name}</td>
        <td>${service.description}</td>
        <td>${service.action}</td>
         <button id="${service.id}"class="btn btn-danger" onClick="deleteService(event)">
           delete
         </button> 
        </td>
      </tr>`;
    servicesDiv.innerHTML += serviceHtml;
  });
}

// delete service
async function deleteService(event) {
  console.log(event);
  const id = event.target.id;

  await fetch("http://localhost:3000/service", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });

  window.location.reload();
}
