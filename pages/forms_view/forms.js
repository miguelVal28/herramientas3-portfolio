function validateForm() {
  debugger;
  //Expresion regular para el formato de correos
  let errorCount = 0;
  //Captura los campos del formulario
  const name = document.getElementById("name");
  const address = document.getElementById("address");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const city = document.getElementById("city");
  const age = document.getElementById("age");

  const fields = [name, address, phone, email, city, age];
  errorCount = errorCount + fieldsValidation(fields);
  errorCount = errorCount + emailValidation(email);

  errorCount = errorCount + numericValidation(age);
  errorCount = errorCount + numericValidation(phone);

  if (errorCount === 0) {
    alert("Formulario enviado con exito");
  }
}

function fieldsValidation(fields) {
  for (field of fields) {
    if (field.value === " " || field.value.length === 0 || !field.value) {
      alert(`El campo ${field.name} está vacío. Por favor diligenciarlo`);
      field.focus();
      return 1;
    }
  }
  return 0;
}

function emailValidation(email) {
  const EMAIL_FORMAT = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  if (!EMAIL_FORMAT.test(email.value)) {
    alert("Por favor, introduce una dirección de correo electrónico válida.");
    email.focus();
    return 1;
  }
  return 0;
}

function numericValidation(field) {
  if (isNaN(field.value)) {
    alert(
      `Por favor, introduce un valor numérico para el campo ${field.name}.`
    );
    field.focus();
    return 1;
  }
  return 0;
}
