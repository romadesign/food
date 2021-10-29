$( document ).ready(function() {
    //VARIABLES
    var onClick = $('.contenedor')
    var textoAbajo = $('.texto-abajo')
    var linkImage = 'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg'


    /**   ------- LAS MEJORES RECETAS  SECTION 1--------   */

    $(onClick).mouseover(function(){
        $(this).children(textoAbajo).show()
        $(this).children('.centrado').css({
            color: 'rgb(53 53 53)',
            opacity: 0.9,
            position: 'absolute',
            background: '#c3ffc5',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '1rem',
            fontSize: '13px',
            border: '3px solid rgb(195 255 197)',
            top: '49%',
            width: '100%',
            left: '50%',
            transform:' translate(-50%,-50%)',
            cursor: 'pointer',
        })
        
    }).mouseout(function(){
        $(this).children('.centrado').css({'display':'none'})
        $(textoAbajo ).hide()

    })

    /**   ------- TODAS LAS RECETAS SECTION 3 --------   */

    $('.content_image_text').hover(function() {       
        $(this).siblings('.image').children('#img_1').hide()
        $(this).children('.image').prepend(` 
                    <img id="img_2" src=${linkImage}
                        style="position:absolute; top:0;left:0; display:none; width:100%;border-radius: 1rem;"
                    /> 
                `)
                $('#img_2').stop().fadeIn(5)
    }, function() {
        $('.content_image_text').children('.image').find('#img_2').stop().fadeOut(5, function(){
            $(this).parents().children('#img_2').stop().remove()
        })
    })

   

    //Linea horizontal mejores recetas
    var linea = $('.linea-horizontal').hide()
    var linea = $('.linea-horizontal').css('left')
    $('.content_cards').mouseover(function () { 
        $(this).children('.linea-horizontal').show()
        $(this).children('.linea-horizontal').stop().animate({ left: '' },800)
    }).mouseout(function (){
        $(this).children('.linea-horizontal').stop().animate({ left: linea }, 2000, function () { 
            $('.linea-horizontal').hide()
        })
    } )
    
    //Linea horizontal todas las recetas
    var linea = $('.linea-horizontal-two').hide()
    var linea = $('.linea-horizontal-two').css('left')

    $('section').children('.section_three').mouseover(function () { 
        $('.linea-horizontal-two').show()
        $(this).children('div .linea-horizontal-two').stop().animate({ left: '' },800)
    })
    $('section').children('.section_three').mouseout(function (){
        $(this).children('div .linea-horizontal-two').stop().animate({ left: linea }, 2000, function () { 
            $('.linea-horizontal-two').hide()
         })
    } )

    //Validación formulario
    var exito = $('#exito').css({'display':'none'})

    function validaForm(){
        if($("#nombre").val() == ""){
            alert("El campo Nombre no puede estar vacío.")
            $("#nombre").focus()     
            return false
        }
        if($("#apellidos").val() == ""){
            alert("El campo Apellidos no puede estar vacío.")
            $("#apellidos").focus()
            return false
        }
        if($("#direccion").val() == ""){
            alert("El campo Dirección no puede estar vacío.")
            $("#direccion").focus()
            return false
        }
        if(!$("#mayor").is(":checked")){
            alert("Debe confirmar que es mayor de 18 años.")
            return false
        }
        if($('#imageFileId').val()== ''){
            window.alert('Ingresa una imagen')
            
        return false
        }
        return false
    }

     $("#botonenviar").click( function() { 
        $('#exito').css({'display':'flex'})
         if(validaForm()){
             $('input[type="text"]').val('')
             $('input[type=checkbox]').each(function(){ 
                 $(this).prop('checked', false) 
             })
             $('#imageFileId').val("")

             $(exito).show()
           
             return false
           
         }else{
             $('.fracaso').show()
         }
     })    

     /*$('.content_popup_send > p').click(function (){
         $('#exito').hide()
         return true
     })*//
    
    

    //Scroll
    function scrollRecipe(){
        var position = $(".section_three").offset().top
        $("html, body").animate({ scrollTop: position -70 }, 1500)
    }
    $('#recetas').click( function(e){
        e.preventDefault()
        scrollRecipe()
    })

    function scrollContact(){
        var position = $(".formulario_content").offset().top
        $("html, body").animate({ scrollTop: position -70 }, 1500)
    }
    $('#contact').click( function(e){
        e.preventDefault()
        scrollContact()
    })

    function scrollArrow(){
        var position = $(".content_cards").offset().top
        $("html, body").animate({ scrollTop: position -70 }, 1500)
    }
    $('.icon-arrow-down').click( function(e){
        e.preventDefault()
        scrollArrow()
    })

    function subir(){
        $("html, body").animate({
            scrollTop: 0}, 1500)}
    $(".onClickArrow").click(function(){
        subir()
    })
    
    $(window).scroll( function(){
        var capturandoScroll = $(window).scrollTop()
        var subir = $(".onClickArrow")
     
        if(capturandoScroll > 1200 && subir.css("display") == "none"){
            subir.fadeIn(800)
        }
        if(capturandoScroll < 1200 && subir.css("display") == "block"){
            subir.fadeOut(800)
        }
    })


    //NavResponsive
    var close = $('.icon-cross').hide()
    var open = $('.icon-menu')
    var content_responsive = $('nav .menu_text')

    var onClickMenu = false
    var onClickCross= false

    $(open).click(function(){
        $(this).hide();
        $(close).show()
        $(content_responsive).stop().animate({"left":"0%"}, 800)
        onClickMenu = true
        onClickCross = false
    })
    $(close).click(function(){
        $(this).hide();
        $(open).show()
        $(content_responsive).stop().animate({"left":"-100%"}, 800)
        onClickMenu = false
        onClickCross = true
    })  

    $( window ).resize(function() {
        if (window.matchMedia("(min-width: 700px)").matches) {
            $(close).hide()
            $(open).hide()
            $(content_responsive).css({"left":"0%"});
            
        } else {
            $(open).show()
            $(content_responsive).css({"left":"-100%"});
            $(close).hide()

            if(onClickMenu == true){
                $(content_responsive).css({"left":"0%"})
                $(open).hide()
                $(close).show()
            }
            if(onClickCross == true){
                $(open).show()
                $(close).hide()
                $(content_responsive).css({"left":"-100%"})
            }
        }
    })
    var video = $('.video_food').css({
        'display': 'none'
        })
        $(".i_food").mouseover(function(){
                $(video).show()
        })
        $(".video_close_food p").click(function(){
            $(video).hide()
    })
})
