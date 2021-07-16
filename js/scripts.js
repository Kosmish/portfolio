const btns = ["keyboard", "switch", "contact", "work", "videos", "art"];

function init()
{
    $("#sub-nav").hide();
    $("#pic-viewer").hide();
    $("#sub-body").load("about.html");
    $(window).scroll(function(){
        if($(document).scrollTop() > 0) {
            $('#btn-keyboard').addClass("btn-svg-small");
            $('#btn-switch').addClass("btn-svg-small");
            $('#btn-contact').addClass("btn-svg-small");
            $('#logo1').addClass("logo-small");
        } else {
            $('#btn-keyboard').removeClass("btn-svg-small");
            $('#btn-switch').removeClass("btn-svg-small");
            $('#btn-contact').removeClass("btn-svg-small");
            $('#logo1').removeClass("logo-small");
        }
    });
    $(".nav-btns").click(function(){
        turnOnButton(this);
    });
    $(".sub-link").click(function(){
        turnOnSubButton(this);
    });
    $("#pic-viewer").click(function(){
        document.getElementById("pic-viewer").innerHTML="";
        $("#pic-viewer").hide();
    })
}
function turnOnSubButton(btn)
{
    var buttonID = $(btn).attr("id");
    var s = buttonID.split("-")[1];
    if (s == btns[3])
    {
        document.getElementById("btn-work-parent").className = "sub-link-active";
        document.getElementById("btn-videos-parent").className = "sub-link";
        document.getElementById("btn-art-parent").className = "sub-link";
        $('#body-work').css({'display' : 'block'});
        $('#body-videos').css({'display' : 'none'});
        $('#body-art').css({'display' : 'none'});
    }
    if (s == btns[4])
    {
        document.getElementById("btn-work-parent").className = "sub-link";
        document.getElementById("btn-videos-parent").className = "sub-link-active";
        document.getElementById("btn-art-parent").className = "sub-link";
        $('#body-videos').css({'display' : 'block'});
        $('#body-work').css({'display' : 'none'});
        $('#body-art').css({'display' : 'none'});
    }
    if (s == btns[5])
    {
        document.getElementById("btn-work-parent").className = "sub-link";
        document.getElementById("btn-videos-parent").className = "sub-link";
        document.getElementById("btn-art-parent").className = "sub-link-active";
        $('#body-art').css({'display' : 'block'});
        $('#body-work').css({'display' : 'none'});
        $('#body-videos').css({'display' : 'none'});
    }
}
function turnOnButton(btn)
{
    var buttonID = $(btn).attr("id");
    var s = buttonID.split("-")[1];

    if (s == btns[0])
    {
        turnOffButton(1);
        turnOffButton(2);
        document.getElementById("btn-switch-parent").className = "nav-btns";
        document.getElementById("btn-contact-parent").className = "nav-btns";
        const colors = ["red","orange","yellow","lime","turquoise","lightblue","blue","violet","purple","pink","hotpink"];
        for (var i = 1, j = 0; i < 11; i++, j++)
        {
            document.getElementById("r"+i).classList.remove("keyboard-cls-2");
            document.getElementById("r"+i).classList.add("key-"+colors[j]);
        }
        for (var i = 11, j = 1; i < 20; i++, j++)
        {
            document.getElementById("r"+i).classList.remove("keyboard-cls-2");
            document.getElementById("r"+i).classList.add("key-"+colors[j]);
        }
        for (var i = 20, j = 2; i < 28; i++, j++)
        {
            document.getElementById("r"+i).classList.remove("keyboard-cls-2");
            document.getElementById("r"+i).classList.add("key-"+colors[j]);
        }
        for (var i = 28, j = 2; i < 34; i++, j++)
        {
            document.getElementById("r"+i).classList.remove("keyboard-cls-2");
            document.getElementById("r"+i).classList.add("key-"+colors[j]);
        }
        swapPage(0);
    }
    if (s == btns[1])
    {
        turnOffButton(0);
        turnOffButton(2);
        document.getElementById("btn-keyboard-parent").className = "nav-btns";
        document.getElementById("btn-contact-parent").className = "nav-btns";
        document.getElementById("switch1").classList.add("switch_cls-2");
        document.getElementById("switch2").classList.add("switch_cls-3");
        swapPage(1);
    }
    if (s == btns[2])
    {
        turnOffButton(0);
        turnOffButton(1);
        document.getElementById("btn-keyboard-parent").className = "nav-btns";
        document.getElementById("btn-switch-parent").className = "nav-btns";
        document.getElementById("contact1").classList.remove("contact-cls-2");
        document.getElementById("contact1").classList.add("contact-white");
        swapPage(2);
    }

    document.getElementById(buttonID).className = "nav-btns-active";
}
function turnOffButton(btn)
{
    switch(btn)
    {
        case 0:
            for (var i = 1; i < 34; i++)
            {
                document.getElementById("r"+i).classList.add("keyboard-cls-2");
            }
            break;
        case 1:
            document.getElementById("switch1").classList.remove("switch_cls-2");
            document.getElementById("switch1").classList.add("switch-gray");
            document.getElementById("switch2").classList.remove("switch_cls-3");
            document.getElementById("switch2").classList.add("switch-gray");
            break;
        case 2:
            document.getElementById("contact1").classList.add("contact-cls-2");
            break;
    }
    
}
function swapPage(num)
{
    if (document.getElementById("btn-"+btns[num]+"-parent").className!="nav-btns-active")
    {
        var tl = gsap.timeline();
        var tl2 = gsap.timeline();
        if (num != 0)
        {
            tl2.to("#sub-nav", {autoAlpha: 0, duration: 0.2});
        }
        tl.to("#sub-body", {autoAlpha: 0, duration: 0.2, onComplete:updatePage});
        function updatePage()
        {
            switch(num)
            {
                case 0:
                    $("#sub-body").load("work.html");
                    document.getElementById("btn-work-parent").className = "sub-link-active";
                    document.getElementById("btn-videos-parent").className = "sub-link";
                    document.getElementById("btn-art-parent").className = "sub-link";
                    $("#sub-nav").show();
                    break;
                case 1:
                    $("#sub-body").load("about.html");
                    break;
                case 2:
                    $("#sub-body").load("contact.html");
                    break;
            }
            tl.to("#sub-body", {autoAlpha: 1, duration: 0.5});
            if (num == 0)
            {
                tl2.to("#sub-nav", {autoAlpha: 1, duration: 0.5});
            }
        }
        $("html, body").animate({ scrollTop: 0 }, "fast");
    }
}
function viewImage(img)
{
    console.log(img);
    var tl = gsap.timeline();
    $("#pic-viewer").show();
    tl.to("#pic-viewer", {autoAlpha: 0.0, duration: 0.0});
    tl.to("#pic-viewer", {autoAlpha: 1.0, duration: 0.2, onComplete:showImage});
    function showImage()
    {
        document.getElementById("pic-viewer").innerHTML = "<div class='img-full-view'><img src='img/full-view/"+img+".png' class='img-full-view-src'></div>";
    }
}

$(document).ready(init);