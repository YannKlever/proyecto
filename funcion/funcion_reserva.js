window.onload = function () {
    document.getElementById("nombre").value = "";
}
function reservar() {
    const inputs = document.querySelector('.formulario_1').querySelectorAll('input');
    let todosLlenos = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        todosLlenos = false;
      }
    });
  
    if (todosLlenos) {
      const nombre = document.getElementById('username').value;
      const apellido = document.getElementById('userlastname').value;
      alert(`Muchas gracias ${nombre} ${apellido}, su reserva fue exitosa.`);
    } else {
      alert('Por favor, completa todos los campos del formulario.');
    }
  }
function limpiar() {
    const inputs = document.querySelector('.formulario_1').querySelectorAll('input');
    const selects = document.querySelector('.formulario_1').querySelectorAll('select');

    inputs.forEach(input => {
        input.value = '';
    });
    selects.forEach(select => {
        select.selectedIndex = 0;
    });
}