$(document).ready(function(){

    //functions to collapse and display resume information
    //when the plus sign or clicked. Would be better to
    //use $this here but not sure how to do that properly
    $(".edu-collapsed").click(function(){
        $(".edu-collapsed").css('display', 'none');
        $('.edu-expanded').css('display', 'flex');
    });

    $(".edu-bar").click(function(){
        $(".edu-expanded").css('display', 'none');
        $('.edu-collapsed').css('display', 'flex');
    });

    $(".exp-collapsed").click(function(){
        $(".exp-collapsed").css('display', 'none');
        $('.exp-expanded').css('display', 'flex');
    });

    $(".exp-bar").click(function(){
        $(".exp-expanded").css('display', 'none');
        $('.exp-collapsed').css('display', 'flex');
    });

    $(".int-collapsed").click(function(){
        $(".int-collapsed").css('display', 'none');
        $('.int-expanded').css('display', 'flex');
    });

    $(".int-bar").click(function(){
        $(".int-expanded").css('display', 'none');
        $('.int-collapsed').css('display', 'flex');
    });

    $(".lang-collapsed").click(function(){
        $(".lang-collapsed").css('display', 'none');
        $('.lang-expanded').css('display', 'flex');
    });

    $(".lang-bar").click(function(){
        $(".lang-expanded").css('display', 'none');
        $('.lang-collapsed').css('display', 'flex');
    });

    $(".cert-collapsed").click(function(){
        $(".cert-collapsed").css('display', 'none');
        $('.cert-expanded').css('display', 'flex');
    });

    $(".cert-bar").click(function(){
        $(".cert-expanded").css('display', 'none');
        $('.cert-collapsed').css('display', 'flex');
    });

    $(".ref-collapsed").click(function(){
        $(".ref-collapsed").css('display', 'none');
        $('.ref-expanded').css('display', 'flex');
    });

    $(".ref-bar").click(function(){
        $(".ref-expanded").css('display', 'none');
        $('.ref-collapsed').css('display', 'flex');
    });

    // gets value from email input and returns an alert to user diplaying email
    $('.ref-request').on('submit', function(e) {
        let eMail = $('input').val();

        alert('Thank you for your interest. Reference information will be e-mailed to '+
        eMail + ' shortly');
  });
});
