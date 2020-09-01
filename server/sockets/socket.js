const { io } = require('../server');
//mensages del io
io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.emit('enviarMensaje', {
        usuario: "Administrador",
        mensaje: "Bienvenido a la aplicación"
    });
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);


        /*if (message.usuario) {
            callback({
                resp: "Todo salió bien"
            });
        } else {
            callback({
                resp: "Algo salió mal"
            });
        }*/



    });
});