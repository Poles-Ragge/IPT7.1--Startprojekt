

document.querySelector("form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        language: document.querySelector('input[name="lang"]:checked').value.toLowerCase()
    };

    try {
        const response = await fetch("https://ipt71.kuno-schuerch.bbzwinf.ch/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result);
        alert("gut");
    } catch (error) {
        console.error("Error:", error);
        alert("fail");
    }

});
