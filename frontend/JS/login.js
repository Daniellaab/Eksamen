document.addEventListener("DOMContentLoaded", (event) => {
    const bruger = localStorage.getItem("bruger");
    if (bruger) {
      location.href = "/";
    }
  
    document.getElementById("loginform").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const email = document.getElementById("email_input").value;
      const kode = document.getElementById("kode_input").value;
  
      const bruger = {
        email: email,
        kode: kode,
      };
  
      fetch("http://localhost:1801/brugere/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bruger),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            //Kilde: https://www.freecodecamp.org/news/how-to-store-data-in-web-browser-storage-localstorage-and-session-storage-explained/
            //Vha. localStorage kan vi gemme vores data
            localStorage.setItem("bruger", JSON.stringify(bruger));
            location.href = "/hovedside.html";
          } else {
            window.alert("Oplysningerne er forkerte");
          }
        })
        .catch(() => {
          window.alert("Fejlmeddelelse");
        });
    });
  });
  