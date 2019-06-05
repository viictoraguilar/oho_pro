

;(function(){
   let sticky = false 
   let currentPosition = 0

   const imageCounter = parseInt($("[data-name='image-counter']").attr("content"))
   const email = "victorhugo.webdeveloper@gmail.com"

   $("#cotnact-form").on("submit",function (ev) {
       ev.preventDefault()

       sendForm($(this))

       return False
   })
   

   $("#sticky-navigation").removeClass("hidden")
   $("#sticky-navigation").slideUp(0)

   setInterval(() => {

       if(currentPosition < imageCounter){
           currentPosition++
       }else {
           currentPosition = 0
       }




      
       $("#gallery .inner").css({
           left: "-"+currentPosition*100+"%"
       })
   }, 4000)
   
   $(window).scroll(() => {
      const inBottom = isInBottom()

      if(inBottom && !sticky) {
          //Mostrar la navegación stikcy
          sticky = true
          stickNavigation()
        } 
        if(!inBottom && sticky) {
            //Mostrar la navegación sticky
            sticky = false
            unStickNavigation()
      }
   })

   function stickNavigation() {
      $("#description").addClass("fixed").removeClass("absolute")
      $("#navigation").slideUp()
      $("#sticky-navigation").slideDown("fast")
    }
    
    function unStickNavigation() {
        $("#description").removeClass("fixed").addClass("absolute")
        $("#navigation").slideDown("fast")
        $("#sticky-navigation").slideUp("fast")
   }

   function sendForm($form) {
    console.log($form.formObject())
       $.ajax({
           url: $form.attr("action"),
           method: "POST",
           data: $form.formObject(),
           dataType: "json",
           succes: function() {
               alert("Todo salió bien")
           }
       }); 
   }

   function isInBottom() {
       const $description = $("#description")
       const descriptionHeight = $description.height()

       return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
   }


})()