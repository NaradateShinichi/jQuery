(function($, window) {
  $(function() {
    // ここに処理を書きます
    const config = {
    wrap: true
    }   
    flatpickr('.flatpickr', config);
    
    flatpickr('.flatpickr', {
    locale: "ja",
    });
  });
})(jQuery, window);