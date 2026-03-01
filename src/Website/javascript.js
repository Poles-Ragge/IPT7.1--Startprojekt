document.querySelector("form")?.addEventListener("submit", async function(e) { ///Needed to change this. Wouldn't work otherwise because i have two diff js codes in one file. I lost 30 mins on this bs
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
        document.location = "buecherpage.html";
    } catch (error) {
        console.error("Error:", error);
        alert("fail");
    }

});

document.getElementById("anmelde")?.addEventListener("submit", async function (e) { 
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
        document.location = "buecherpage.html"; ///Ok this works im so happy thank you random stackoverflow man ily
    } catch (error) {
        console.error("Eror:", error);
        alert("fail");
    }


});

async function loadProducts() {
    try {
        const response = await fetch("https://ipt71.kuno-schuerch.bbzwinf.ch/product/list", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error("FAIL PRODUKTE");

        const products = await response.json();
        console.log(products);
        const container = document.getElementById("productContainer");
        container.innerHTML = ""; 

        products.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("product-item");
            div.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Preis: ${product.price} CHF</p>
            `;
            container.appendChild(div);
        });

    } catch (error) {
        console.error("err:", error);
        alert("fail laden");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("productContainer")) {
        loadProducts();
    }


});