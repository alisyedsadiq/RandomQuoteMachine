var getAQuote = function() {
    $('h3').empty();
    $('h4').empty();
    $('h3').append('<i class="fa fa-spinner fa-spin fa-3x">');
    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies',
        type: 'POST', // The HTTP Method
        data: {}, // Additional parameters here
        datatype: 'json',
        success: function(data) {

            obj = jQuery.parseJSON(data);

            currentQuote = obj.quote;
            currentAuthor = obj.author;
            $('h3').empty();
            $('h4').empty();
            $('h3').append("\"" + obj.quote + "\"");
            $('h4').append("-" + obj.author);
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



    $('#newquote').click(function() {

        getAQuote();

    });
    $('#tweet').click(function() {
        openthis();
    });
});
