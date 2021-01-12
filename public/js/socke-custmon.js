var socket = io();

//on = escuhar
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Fuera de conexión');
});


//emit = enviar
socket.emit('enviarMensaje', {
    usuario: 'Andrés',
    mensaje: 'Hola'
}, function(resp) {
    console.log('Respuesta del server:', resp);
});

socket.on('enviarMensaje', function(res) {
    console.log(res);
});