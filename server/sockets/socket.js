const { io } = require('../server')

io.on('connection', (client) => {
    console.log('usuario concectado');


    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el clinte
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien!'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal!!!!!!'
        //     });
        // }
    });
});
