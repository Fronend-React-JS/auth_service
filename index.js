// const registrationForm = document.getElementById("registrationForm");
// const loginForm = document.getElementById("loginForm");
// const royxat = document.getElementById("royxatdan_otish");
// const username = document.getElementById("Username").value;
// const name = document.getElementById("name").value;
// const surname = document.getElementById("surname").value;
// const language = document.getElementById("language").value;
// const gender = document.getElementById("gender").value;
// const email = document.getElementById("email").value;
// const password = document.getElementById("password").value;
// const inputs = document.querySelectorAll(".inputs").value;

// step2.style.display = "none";

// royxat.addEventListener("click", function () {
//   for (let inputs of inputs) {
//     if (!inputs.value) {
//       alert("Hamma malumotlarni to'ldiring");
//     } else {
//       if (
//         username &&
//         name &&
//         surname &&
//         language &&
//         gender &&
//         email &&
//         password
//       ) {
//         var user = { email, password };
//         localStorage.setItem(username, JSON.stringify(user));
//       }
//     }
//   }
//   registrationForm.style.display = "none";
//   step2.style.display = "block";
// });



const registrationForm = document.getElementById("registrationForm");
const loginForm = document.getElementById("loginForm");
const royxat = document.getElementById("royxatdan_otish");

step2.style.display = "none";

royxat.addEventListener("click", function () {
  const username = document.getElementById("Username").value;
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const language = document.getElementById("language").value;
  const gender = document.getElementById("gender").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const inputElements = document.querySelectorAll(".inputs");

  for (let input of inputElements) {
    if (!input.value) {
        alert("Barcha ma'lumotlarni to'ldiring");
        return; // Agar hech qaysi maydoncha bo'sh bo'lsa, funksiya tugatiladi
    } else if (email && password && username && name && surname) {
        var user = { username, name, surname, language, gender, email, password };
        localStorage.setItem(username, JSON.stringify(user));
    };
    step2.style.display = "block";
    step1.style.display = "none";
    ;
};

});
