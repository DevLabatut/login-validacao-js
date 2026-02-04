document.addEventListener("DOMContentLoaded", () => {
  const inputEmail = document.querySelector("#email");
  const inputPassword = document.querySelector("#password");
  const form = document.querySelector(".login-group");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!inputEmail.value || !inputPassword.value) {
      alert("Campos vazios.");
      return;
    }
    if (
      inputEmail.value === "teste@gmail.com" &&
      inputPassword.value === "teste2026"
    ) {
      alert("Login realizado com sucesso.");
      location.href = "/home.html";
      return;
    }
    alert("Email ou senha incorretos.");
  });
});
