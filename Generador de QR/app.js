let contenedorQR = document.getElementById('codigoQR');
let formulario = document.getElementById('qrForm');

let QR = new QRCode(codigoQR);

formulario.addEventListener('submit', (event) => {
	event.preventDefault();
	QR.makeCode(qrForm.numCuenta.value);
});