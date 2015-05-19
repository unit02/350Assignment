$('#division').change(function(e){
    var locAppend = $(this).find('option:selected').val(),
        locSnip   = window.location.href.split('?')[0];

    alert("Redirecting to: " + locSnip + locAppend);
});