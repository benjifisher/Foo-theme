(function ($) {
  $(document).ready(function() {
    $('input.form-checkboxes').click(function(event) {
      var next = $(this).parent().next();
      if ($(this).is(':checked') && next.is('ul')) {
        next.find('input.form-checkboxes').click();
      }
    })
  });
})(jQuery);
