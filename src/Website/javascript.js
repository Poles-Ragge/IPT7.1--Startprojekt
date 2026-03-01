document.querySelector("form")?.addEventListener("submit", async function(e) { ///Needed to change this. Wouldn't work otherwise because i have two diff js codes in one file. I lost 30 mins on this bullshit
    e.preventDefault();

    const data = {
        username: document.getElementById("username")?.value,
        password: document.getElementById("password")?.value,
        firstname: document.getElementById("firstname")?.value,
        lastname: document.getElementById("lastname")?.value,
        language: document.querySelector('input[name="lang"]:checked')?.value?.toLowerCase()
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

document.getElementById("anmelde")?.addEventListener("submit", async function (e) { ///Why does this shit work but NOT my idea jesus christ help me b4 i punch dat screen
    e.preventDefault();

    const data = {
        username: document.getElementById("username")?.value,
        password: document.getElementById("passwort")?.value 
    };

    try {
        const response = await fetch("https://ipt71.kuno-schuerch.bbzwinf.ch/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }); 

        if (!response.ok) {
            throw new Error("fail");
        }
        const result = await response.json();
        console.log(result);
        alert("gut");
    } catch (error) {
        console.error("Eror:", error);
        alert("fail");
    }


});