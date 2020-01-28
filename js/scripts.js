$(document).ready(function() {
  $("form#movieselect").submit(function(event) {
    event.preventDefault();
    var aladdin = parseInt($("input:radio[name=aladdin]:checked").val());
    var diehard = parseInt($("input:radio[name=diehard]:checked").val());
    var lost = parseInt($("input:radio[name=lost]:checked").val());
    var age = $("input:radio[name=age]:checked").val();
  });
});
