(function($, window) {
  $(function() {
    // この中に処理を書きます
    //課題1
    $('h2').remove();
    //課題2
    $('#index').find('li').html();
    //課題3
    $('#index').append('<li>メソッド</li>');
    //課題4
    $('#index').find('li').each(function(){
      alert($(this).text().length);
    });
    //課題5
    $('#index').find('li').each(function(){
      $(this).append('[' + $(this).text().length + '文字]');
    });

  });
})(jQuery, window);
