"use strict";!function(){var a=!1,t=0,i=parseInt($("[data-name='image-counter']").attr("content"));$("#contact-form").on("submit",function(t){var i;return t.preventDefault(),i=$(this),$.ajax({url:i.attr("action"),method:"POST",data:i.formObject(),dataType:"json",success:function(){alert("Todo salió bien")}}),!1}),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),setInterval(function(){t<i?t++:t=0,$("#gallery .inner").css({left:"-"+100*t+"%"})},4e3),$(window).scroll(function(){var t,i=(t=$("#description").height(),$(window).scrollTop()>$(window).height()-2*t);i&&!a&&(a=!0,$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp(),$("#sticky-navigation").slideDown("fast")),!i&&a&&(a=!1,$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast"))})}();