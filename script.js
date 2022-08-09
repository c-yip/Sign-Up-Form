const form = document.querySelector("form");

form.addEventListener("submit", () => {
    const password = document.querySelector("#password").value;
    const password_confirm = document.querySelector("#password_confirm").value;

    console.log(password);
    console.log(password_confirm);

    if (password !== password_confirm) {
        alert("No bueno")
    }
});