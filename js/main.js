function validateForm(){
	/* primero obtengo el valor de los campos
	del formulario */
	const name = $('#name').val().trim();
	const lastname = $('#lastname').val().trim();
	const email = $('#input-email').val().trim();
	const password = $('#input-password').val().trim();
 	const bike = $('select').val().trim();
 
	/* Ahora pruebo 1 a 1 los valores */
	if (name.match(/^[A-Z][a-z]{1,}/) == null){
		$('#name').parent().append('<span>Tu nombre debe contener al menos 2 letras y la primera letra Mayúscula</span>');
	}
	else {
		$('#name').siblings().remove();
	}

	if (lastname.match(/^[A-Z][a-z]{1,}/) == null){
		$('#lastname').parent().append('<span>Tu apellido debe contener al menos 2 letras y la primera letra Mayúscula</span>');
	}
	else {
		$('#lastname').siblings().remove();
	}

	if (email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null){
		$('#input-email').parent().append('<span>Tu email debe ser en el formato usuario@dominio.tld</span>');
	}
	else {
		$('#input-email').siblings().remove();
	}

	if (password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/) == null){
		$('#input-password').parent().append('<span>Tu contraseña debe contener al menos 6 caracteres, una letra Mayúscula y una minúscula</span>');
	}
	else {
		$('#input-password').siblings().remove();
	}

	if (bike == 0){
		$('select').parent().append('<span>Selecciona un tipo de bici</span>');
	}
	else {
		$('select').siblings().remove();
	}
}