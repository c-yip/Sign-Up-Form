const form = document.querySelector("form");

form.addEventListener("submit", e => {
    const password_value = document.querySelector("#password").value;
    const password_confirm_value = document.querySelector("#password_confirm").value;

    const password = document.querySelector("#password");
    const password_confirm = document.querySelector("#password_confirm");

    if (password_value !== password_confirm_value) {
        e.preventDefault();
        password.classList.add("error");
        password_confirm.classList.add("error");
        password.setCustomValidity("Passwords must match.");
        password.reportValidity();
    }
});