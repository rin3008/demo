$(document).ready(function(){
    $("input.submit").click(function(){
       var name = $("input.name").val();
       var email = $("input.email").val();
       var phone = $("input.phone").val();
       var mess = $("textarea.mess").val();
       var flag = true;
       if(name.trim() == ""){
        alert("vui lòng nhập name");
        flag == false;
       }
       if(email.trim() == ""){
        alert("vui lòng nhập email")
        flag == false;
       }
       if(phone.trim() == ""){
        alert("vui lòng nhập phone")
        flag == false;
       }
       if(mess.trim() == ""){
        alert("vui lòng nhập nội dung")
        flag == false;
       }
       //ktra đã điền đủ thì ms đưa vào local 
       if(name != "",email !="", phone != "", mess !=""){
           var obj = {}
           var xx = localStorage.getItem("LienLac");
        //ktra đã có trong local hay chưa
           if(xx){
               obj = JSON.parse(xx);
            }
             obj[email] = {
                name : name,
                email : email,
                phone : phone,
                noidung : mess
            }
            localStorage.setItem("LienLac",JSON.stringify(obj));
       }
       return false;
      })
      $("#Login").click(function(){
         var user = $("#user").val();
         var pass = $("#pass").val();
        
         if(user == ""){
            alert("vui lòng nhập user:")
         }
         if(pass == ""){
            alert("vui lòng nhập password:")
         }
         if(user != "" && pass != ""){
            if(user == "admin@gmail.com" && pass == "admin") {
               alert("Thành công")
               return true;
            }else(
               alert("Không đúng:")
            )
         }
         return false;
      })
})