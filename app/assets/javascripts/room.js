$(function(){
   $('#new_room_message').on('ajax:success', function(a,b,c){
       $(this).find('#room_message_message').val('');
   });
});