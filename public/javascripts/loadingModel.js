var socket = io.connect('http://localhost:3000');
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
        socket.emit('loadMore', $('#m').val());
        $('#m').val('');
        return false;
    });
});
function addNewObject(data) {
    $('#realList').append('<li>'+data+'</li>');
}