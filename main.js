var currentIndex = 0;

$(document).ready(function(){
    $('body > :not(#myDiv)').hide();
    $(LoadingText).show();
    var pastDelay = 0;
    var text = "SquidyDev"; 
    var currentOutput = "> _";
    var timePerIteration = 0;

    $("body").css({"background-image": "linear-gradient(to bottom right, rgb(31, 31, 31), rgb(54, 54, 54))"});

    for(var i = 0; i < text.length; i++)
    {
        setTimeout(function() {
            currentOutput = currentOutput.slice(0, -1);
            currentOutput += text.charAt(currentIndex);
            currentOutput += '_';
            $(LoadingText).text(currentOutput);
            currentIndex++;
        }, pastDelay);

        pastDelay += timePerIteration;
    }

    for(var i = 0; i < text.length; i++)
    {
        setTimeout(function() {
            currentOutput = currentOutput.slice(0, -1);
            currentOutput = currentOutput.slice(0, -1);
            currentOutput += "_";
            $(LoadingText).text(currentOutput);
            currentIndex++;
        }, pastDelay);

        pastDelay += timePerIteration;
    }

    setTimeout(function() {
        $(LoadingText).text("");
        $("body").css({"background-color": "white"});
        $("html").css({"background-color": "white"});
        $('body > :not(#myDiv)').fadeIn(500);
    }, pastDelay);

    setTimeout(function(){
        alert("This websie is undercosntruction, everything is not implemented yet !");
    }, (pastDelay + 500));
});