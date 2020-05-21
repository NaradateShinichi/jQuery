(function($, window) {
  $(function() {
    // ここに処理を書きます
    $('#date_picker').flatpickr({"locale": "ja"});
    $('#date_picker_button').on("click",function(){
      $("#date_picker").flatpickr().open();
    });
  });
})(jQuery, window);