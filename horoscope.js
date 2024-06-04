const form = document.getElementById("horoscopeForm");

form.addEventListener("submit", (event) => {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const starSign = document.getElementById("starSign");
  if (
    firstName.value.trim() === "" ||
    lastName.value.trim() === "" ||
    starSign.value.trim() === ""
  ) {
    event.preventDefault(); //this needs to be first for some reason.
    firstName.classList.add("error");
    lastName.classList.add("error");
    starSign.classList.add("error");
  } else {
    firstName.classList.remove("error");
    lastName.classList.remove("error");
    starSign.classList.remove("error");
  }
});
