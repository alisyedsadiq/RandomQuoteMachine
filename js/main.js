var getAQuote = function() {
    $('h3').empty();
    $('h4').empty();
    $('h3').append('<i class="fa fa-spinner fa-spin fa-3x">');
    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
        type: 'GET', // The HTTP Method
        data: {}, // Additional parameters here
        datatype: 'json',
        success: function(data) {
            obj = jQuery.parseJSON(data);
            currentQuote = obj.quote;
            currentAuthor = obj.author;
            var length = currentQuote.length + currentAuthor.length + 11;
            if (length < 140 || length == 140) {
                $('h3').empty();
                $('h4').empty();
                $('h3').append("\"" + obj.quote + "\"");
                $('h4').append("-" + obj.author);
            } else
                getAQuote();
        },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "2W1js31pYJmshjhSeK7bv8Sb4SIgp1HPxkDjsnxBZqr7ZhGKZ2"); // Enter here your Mashape key
        }

    });

}
var openthis = function() {
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
}


$(document).ready(function() {
    getAQuote();
    $('#newquote').click(function() {

        getAQuote();
    });
    $('#tweet').click(function() {
        openthis();

    });

    

});
