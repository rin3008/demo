$(document).ready(function () {
    var getObj = localStorage.getItem("LienLac");
    if(getObj){
       getObj = JSON.parse(getObj)
       console.log(getObj);
    }
    var html = '';

    Object.keys(getObj).map((key, index)=>{

           html +=  '<tr>'+
                    '<td>'+key+'</td>'+
                    '<td>'+getObj[key]["name"]+'</td>'+
                    '<td>'+getObj[key]["email"]+'</td>'+
                    '<td>'+getObj[key]["phone"]+'</td>'+
                    '<td>'+getObj[key]["noidung"]+'</td>'+
                 '</tr>'
    })
    $("table tbody").append(html)
})