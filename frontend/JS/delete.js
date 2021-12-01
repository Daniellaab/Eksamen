document.addEventListener("DOMContentLoaded", (event) => {
    const bruger = localStorage.getItem("bruger");
    if (!bruger) {
      location.href = "/index.html";
    }
  
    document.getElementById("delete").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const bruger = JSON.parse(localStorage.removeItem("bruger"));
  
      fetch("http://localhost:1801/brugere/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bruger),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            localStorage.removeItem("bruger");
            location.href = "/index.html";
          }
        })
        .catch(() => {
          window.alert("Fejl");
        });
    });
  });
  