$(document).ready(function() {
    'use strict';
    //navbar_mobile [open]
    $('.navbar-light .navbar-toggler').click(function(){
        $('.navbar-light .collapse').addClass('active');
    })
    //navbar_mobile [close]
    $('.navbar-light .collapse .close_nav').click(function(){
        $('.navbar-light .collapse').removeClass('active');
    })
    // add_active_class_to_Tabs_links
    $('.features .row .tabs-links ul li').click(function(){
        $('.features .row .tabs-links ul li').removeClass('active');
        $(this).addClass('active');
        var contentClass = $(this).data('tab');
        $('.features .content .row').removeClass('active');
        $('.features .content .'+contentClass).addClass('active');
    });
    // Show Content Of Panels in Questions Section
    $('.questions .ask-answer li').click(function(){
        var dataPanel = $(this).attr('data-panel');
        $('.questions .ask-answer li').removeClass('active');
        $(this).addClass('active');
        $('.questions .ask-answer .answers').removeClass('active');
        $('.questions .ask-answer .'+dataPanel).addClass('active');
    });
    // Show Error if Input Value is Empty
    $('.footer .row form .btn').click(function(){
        var inpuVal = $('.footer .row form input').val();
        if(inpuVal == ''){
            $('.footer .row form span').addClass('active');
            $('.footer .row form img').addClass('active');
        } else{
            $('.footer .row form span').removeClass('active');
            $('.footer .row form img').removeClass('active');
        }
    })
});