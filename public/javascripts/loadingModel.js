var socket = io.connect('http://localhost:3000');
var nextProduct = 0;
//recevoir un objet du serveur
socket.on('newObject', (data) => {
    console.log(data);
    addNewObject(data);
});

//affichage du loader
socket.on('isLoading', (data) =>
{
    console.log(data);
    $('#spinner').css('visibility',data);
    //$('#spinner').style.visibility = data;
});


$(function () {
    $('#loadMore').submit(function(){
        socket.emit('loadMore', "{\"number\": "+$('#m').val()+",\"start\": "+nextProduct+"}");
        return false;
    });
});
function addNewObject(data) {
    $('#realList').append('<div class="row">'+data+'</div>');
}