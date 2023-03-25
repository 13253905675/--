
    var random=document.getElementsByClassName('random')[0];
     var names = document.getElementById('userName');
    var key = document.getElementById("userPassword");
    var send = document.getElementsByClassName("send")[0];
    var firstLogon = document.getElementsByClassName("firstLogon")[0];
    
    send.onclick = function () {
        $.ajax({
            type: "POST",
            url: "http://118.195.129.130:3000/user/login",
            data: {
                us: names.value,
                ps: key.value
            },
            success: function (result) {
                console.log(result);
                if (result.err == 0) {
                    alert('登录成功');
                    window.s = localStorage.setItem('_id', result.data[0]._id)
                    window.location.href = '../html/behind.html';
                    $(document).ready(function(){
                        $("send").click(function(){
                            $("p").html("names.value");
                        });
                    });
                } else {
                    alert('登录失败,请重新输入');

                }

            }

        })


    }
    firstLogon.onclick=function(){
        window.location.href='../html/logon.html';
 }
   
    
   