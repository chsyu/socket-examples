$(document).ready(()=>{

   const socket = io();
   const $messages = $('#messages');
   socket.on('student message', function(msg) {
      $messages.append(`
      <li>
         ${msg}
      </li>
      `)
      window.scrollTo(0, document.body.scrollHeight);
   });
   

})

