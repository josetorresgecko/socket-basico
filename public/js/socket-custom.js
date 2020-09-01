var socket = io();
//on escuchar información
socket.on('connect', () => {
    console.log('conectado al servidor');
});
socket.on('disconnect', () => {
    console.log('perdimos conexión al servidor');
});
//escuchar el cliente
socket.on('enviarMensaje', (message) => {
    console.log(message);
});
//enviar información al server
socket.emit('enviarMensaje', {
    usuario: "Jose Torres",
    mensaje: "Hola mundo"
}, function(message) {
    console.log(message);
});