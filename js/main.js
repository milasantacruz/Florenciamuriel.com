
$(function(){
    const load = $(".load");
    const menu = $("#menu");
    const btn_about = $("#about")
    const mod_about = $(".modal_about");
    const btn_contact = $("#contact")
    const mod_contact = $(".modal_contact");
    const form = $("contact-form");
    const contact_info = $("#contact_info");
    var reel = $("#myReel").get(0);
    
    load.on("click", function(){
        $(this).fadeOut("slow");
        reel.play();
    })

  
    menu.on("mouseenter", function(){
        $(this).addClass("is-active");
    }).on("mouseleave", function(){
        $(this).removeClass("is-active");
    })

    //menu modales

    btn_about.on("click", function(){
        var close = $(".modal-close");
        mod_about.addClass("is-active");
        close.on("click", function(){
            mod_about.removeClass("is-active");
        })

    })

    btn_contact.on("click", function(){
        var close = $(".modal-close");
        mod_contact.addClass("is-active");
        close.on("click", function(){
            mod_contact.removeClass("is-active");
        })

    })

    var box = $(".card_vid");

    box.hover(function(){
        $(this).find(".hover").slideUp("slow");
        console.log("hover");
        
    }, function(){
        $(this).find(".hover").slideDown("slow");
    });


    //FORM
    const name = $("#name");
    const email = $("#email");
    const message = $("#message");
    const notif = $("#notif");
       

    $("#contact-form").on('submit', (e) =>{
        e.preventDefault();

        let nameVal = name.val().trim();
        let emailVal = email.val().trim();
        let messageVal = message.val().trim();
        const apikey = '288765'; //288765
        const fullmessage = `Hola! 💚 Tienes un mensaje de: ${nameVal} , Email : ${ emailVal } . El cuerpo del mensaje es : ${messageVal}. 🤖Exelente! `;
        let formSucces ;
        console.log(fullmessage);

        // 'https://api.callmebot.com/whatsapp.php?phone=+5491132946845&text=' + email + name + message + '&apikey=' + apikey
        //'https://api.callmebot.com/whatsapp.php?phone=+5491125142822&apikey=' + apikey + '&text=' + fullmessage

         $.ajax({

             url: 'https://api.callmebot.com/whatsapp.php?phone=+5491132946845&apikey=' + apikey + '&text=' + fullmessage,
             //data: myData,
             headers: { 
                "Accept" : "application/json; charset=utf-8",
                "Content-Type": "application/json; charset=utf-8",
                "custom-header": "text/html"
              },
             type: 'POST',
             crossDomain: true,
             complete : function(){
                 success();
             }
         })
       
    });

    const success = () =>{
        contact_info.text("Thanks for write! I'll contact you soon");
        console.log('success');
            form.hide();
            name.val('');
            email.val('');
            message.val('');
            notif.val('');
       
    }

    // const fail = () =>{
    //     contact_info.text("Sorry, some error has occurred. Pleace try later");
    //     console.log('fail');
    //     form.hide();
    //         name.val('');
    //         email.val('');
    //         message.val('');
    //         notif.val('');
       
    // }

})