// Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",

          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

const form = document.getElementById("bookingForm");
const alert = document.querySelector(".alert");

const firebaseConfig = {
  apiKey: "AIzaSyCNglkgxV2NCy8P-lLbMzdLF25NMRrG8WY",
  authDomain: "dsffsfsfsf-3e80d.firebaseapp.com",
  databaseURL: "https://dsffsfsfsf-3e80d-default-rtdb.firebaseio.com",
  projectId: "dsffsfsfsf-3e80d",
  storageBucket: "dsffsfsfsf-3e80d.appspot.com",
  messagingSenderId: "972160730943",
  appId: "1:972160730943:web:119cea27aafed04178b58a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const ref = database.ref("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const inputPhone = document.getElementById("inputPhone").value;
  const inputStartTimeHour = document.getElementById("inputStartTimeHour").value;
 console.log(inputStartTimeHour);

  ref.push({
    name: name,
    email: email,
    inputPhone: inputPhone,
    inputStartTimeHour: inputStartTimeHour,
   
  });
  alert.style.display = "block";

  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);

  form.reset();
});
