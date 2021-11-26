async function fetchAdmin(token) {
    const response = await fetch("/admin/ErAdmin", {
        method: "GET",
        headers: {
            "conten-Type": "application/json",
            "authorization": token

        }
    });
    try {
        if (response.status !=200) {
            const err = await response.json();
            throw new Error(err.error)
        } else {
            const data = await response.json();
            if(!data.ErAdmin) {
                throw new Error("Kun adgang for admin")
            } else {
                return true;
            }
        }
    } catch (error) {
        return false;
    }
}

const ikkeAdmin = () => {
    console.log("Test test")
    window.location.replace("/");
    alert("For at benytte denne side skal du være admin\n")
}

if (!window.localStorage.getItem("token")) {
    ikkeAdmin()
} else {
    const token = window.localStorage.getItem("token");
    fetchAdmin(token).then(ErAdmin => {
        if(!ErAdmin) {
            ikkeAdmin()
        }
    })
}