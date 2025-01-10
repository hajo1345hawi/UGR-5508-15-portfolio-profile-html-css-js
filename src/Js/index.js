function checkRequiredFields() {
  var requiredFields = document.querySelectorAll("input[required]");
  var allFilled = true;

  requiredFields.forEach(function (field) {
    if (!field.value.trim()) {
      allFilled = false;
      field.classList.add("error");
    } else {
      field.classList.remove("error");
    }
  });

  return allFilled;
}

document.getElementById("send-btn").addEventListener("click", () => {
  if (checkRequiredFields())
    alert("Thank you for sending me this message!I'll get in touch");
  else {
    alert("Please fill in all required fields.");
  }
});
