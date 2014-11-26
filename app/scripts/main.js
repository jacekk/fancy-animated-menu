(function($){
  'use strict';

  $('.nav a').on('click', function(){
    var $li = $(this).parent();
    $li.siblings('.active').removeClass('active');
    $li.addClass('active');
  });
})(jQuery);
