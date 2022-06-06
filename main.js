var currentIndex = 0;

$(document).ready(function(){
    $('body > :not(#myDiv)').hide();
    $(LoadingText).show();
    var pastDelay = 0;
    var text = "SquidyDev"; 
    var currentOutput = "> _";
    var timePerIteration = 400;

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
        $('body > :not(#myDiv)').fadeIn(1000);
        alert("Website under construction !");
    }, pastDelay);
});