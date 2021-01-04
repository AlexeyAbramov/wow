$(document).ready(function () {
  $button = $("#calculate");
  $clear = $("#clear");
  $result = $('.result__cost');
  $button.click(function (e) {
    $b = $("#beladonna").val()*3;
    $s = $("#slavolist").val()*4;
    $k = $("#koren").val()*4;
    $v = $("#vdovocvet").val()*4;
    $f = $("#fakel").val()*4;
    e.preventDefault();
    $summ = $b+$s+$k+$v+$f;

    $result.text(`${$summ.toFixed(2)}g`);
  });
  $clear.click(function(){
    $('input[type="number"]').val('');
    $result.text('0g');
  });
});
