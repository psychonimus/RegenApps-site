$(document).ready(function(){
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        console.log(scroll);
        if(scroll>=800){
            $("#a1").addClass("animate__fadeInUp");
        }
        else{
            $("#a1").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=6000){
            $("#a2").addClass("animate__fadeInLeft");
        }
        else{
            $("#a2").removeClass("animate__fadeInLeft");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=6800){
            $("#a3").addClass("animate__fadeInUp");
        }
        else{
            $("#a3").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=7100){
            $("#a4").addClass("animate__fadeInUp");
        }
        else{
            $("#a4").removeClass("animate__fadeInUp");
        }
    });

    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=7200){
            $("#a5").addClass("animate__fadeInUp");
        }
        else{
            $("#a5").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=7300){
            $("#a6").addClass("animate__fadeInUp");
        }
        else{
            $("#a6").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=9000){
            $("#a7").addClass("animate__fadeInUp");
        }
        else{
            $("#a7").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=9300){
            $(".a8").addClass("animate__fadeInUp");
        }
        else{
            $(".a8").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=9500){
            $(".a9").addClass("animate__fadeInUp");
        }
        else{
            $(".a9").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=9700){
            $(".a10").addClass("animate__fadeInUp");
        }
        else{
            $(".a10").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=9900){
            $(".a11").addClass("animate__fadeInUp");
        }
        else{
            $(".a11").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=10100){
            $(".a12").addClass("animate__fadeInUp");
        }
        else{
            $(".a12").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=10300){
            $(".a13").addClass("animate__fadeInUp");
        }
        else{
            $(".a13").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=10500){
            $(".a14").addClass("animate__fadeInUp");
        }
        else{
            $(".a14").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=10900){
            $(".a15").addClass("animate__fadeInUp");
        }
        else{
            $(".a15").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=11000){
            $(".a16").addClass("animate__fadeInUp");
        }
        else{
            $(".a16").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=7700){
            $(".a17").addClass("animate__fadeInUp");
        }
        else{
            $(".a17").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=400){
            $(".navbar").addClass("sticky");
        }
        else{
            $(".navbar").removeClass("sticky");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=700){
            $(".a18").addClass("animate__fadeInLeft");
        }
        else{
            $(".a18").removeClass("animate__fadeInLeft");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=1300){
            $(".a19").addClass("animate__fadeInLeft");
        }
        else{
            $(".a19").removeClass("animate__fadeInLeft");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=2000){
            $(".a20").addClass("animate__fadeInLeft");
        }
        else{
            $(".a20").removeClass("animate__fadeInLeft");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=2600){
            $(".a21").addClass("animate__fadeInLeft");
        }
        else{
            $(".a21").removeClass("animate__fadeInLeft");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=100){
            $(".a22").addClass("animate__fadeInUp");
        }
        else{
            $(".a22").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=1300){
            $(".a23").addClass("animate__fadeInUp");
        }
        else{
            $(".a23").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=2250){
            $(".a24").addClass("animate__fadeInUp");
        }
        else{
            $(".a24").removeClass("animate__fadeInUp");
        }
    });
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        
        if(scroll>=90){
            $(".a25").addClass("animate__fadeInUp");
        }
        else{
            $(".a25").removeClass("animate__fadeInUp");
        }
    });
    $('#myList li').click(function() {
        // Remove active class from all li elements
        $('#myList li').removeClass('active');
        
        // Add active class to the clicked li element
        $(this).addClass('active');

        var index = $(this).index();
        
        // Hide all div elements
        $('.tab-box').hide();
        
        // Show the corresponding div based on the index
        $('#div' + (index + 1)).show();
      });
    
});