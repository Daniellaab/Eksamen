document.addEventListener("DOMContentLoaded", (event) => {
    const bruger = localStorage.getItem("bruger");
    if (!bruger) {
      location.href = "/index.html";
    }
  
    document.getElementById("logudform").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const bruger = JSON.parse(localStorage.clear("bruger"));
  
      fetch("http://localhost:1801/brugere/logUd", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bruger),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            localStorage.clear("bruger");
            location.href = "/index.html";
          }
        })
        .catch(() => {
          window.alert("Fejl");
        });
    });
  });
  



  
  document.addEventListener("DOMContentLoaded", (event) => {
    const bruger = localStorage.getItem("bruger");
    if (!bruger) {
      location.href = "/index.html";
    }
  
    document.getElementById("logudform").addEventListener("submit", (event) => {
      event.preventDefault();

      window.localStorage.clear("bruger")
        });
    });

  //Kilde: https://blog.logrocket.com/localstorage-javascript-complete-guide/#setitem