
'use strict'        
        
        var socket = io();

        socket.on('connect', function () {

            console.log('Conectado al servidor');

        })

        // on para escuchar sucesos
        socket.on('disconnect', function () {

            console.log('Se perdio la conexion con el servidor')
        })


        //emit para enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Fernando',
            mensaje: 'Hola Mundo',
        }, function(resp){
            console.log('respuesta', resp)
        });

        socket.on('enviarMensaje', function(mensaje){
            console.log(mensaje)
        })