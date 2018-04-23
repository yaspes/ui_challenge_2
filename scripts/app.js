'use strict';

$(document).ready(function(){
  $('#username').on('change', () => {
    if($('#username').val()) {
      $('#validation').hide();
    } else { $('#validation').show(); }
  });




  
});
