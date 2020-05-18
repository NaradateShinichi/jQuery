(function($, window) {
  $(function() {
    // ここに処理を書きます
    $(document).ready(function() {
        $('#btn_post').jpostal({
            click : '#btn_post',
            postcode : [
            '#zip1'
            ],
            address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
            }
        });
    });
  });
})(jQuery, window);