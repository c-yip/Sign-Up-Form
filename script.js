const form = document.querySelector("form");

form.addEventListener("submit", () => {
    const password = document.querySelector("#password");
    const password_confirm = document.querySelector("#password_confirm");

    console.log(password);
    console.log(password_confirm);

    if (password !== password_confirm) {
        alert("No bueno")
    }
});