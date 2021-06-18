$(document).ready(() => {

   const socket = io();
   const $messages = $('#messages');
   const $form = $('#form');
   const $input = $('#input');


   $form.on('submit', function (e) {
      e.preventDefault();
      if ($input.val()) {
         socket.emit('chat message', $input.val());
         $input.val('');
      }
   });

   socket.on('chat message', function (msg) {
      $messages.append(`
      <li>
         ${msg}
      </li>
      `)
      window.scrollTo(0, document.body.scrollHeight);
   });


})

