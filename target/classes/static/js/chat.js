// jQuery Document
$(document).ready(function () {
    $("#submitmsg").click(function () {
        var clientmsg = $("#usermsg").val();
        $.post("post.php", { text: clientmsg });
        $("#usermsg").val("");
        return false;
    });

    function loadLog() {
        var oldscrollHeight = $("#chatbox")[0].scrollHeight - 20; //Scroll height before the request

        $.ajax({
            url: "log.html",
            cache: false,
            success: function (html) {
                $("#chatbox").html(html); //Insert chat log into the #chatbox div

                //Auto-scroll           
                var newscrollHeight = $("#chatbox")[0].scrollHeight - 20; //Scroll height after the request
                if(newscrollHeight > oldscrollHeight){
                    $("#chatbox").animate({ scrollTop: newscrollHeight }, 'normal'); //Autoscroll to bottom of div
                }   
            }
        });
    }

    setInterval (loadLog, 2500);

    $("#exit").click(function () {
        var exit = confirm("Are you sure you want to end the session?");
        if (exit == true) {
        window.location = "index.php?logout=true";
        }
    });
});