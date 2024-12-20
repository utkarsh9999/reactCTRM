/* eslint-disable */
// eslint-disable-next-line no-undef
$(document).ready(function () {

    // eslint-disable-next-line
    $("#btnToggleSidebar").click(function () {
        var width = $('#sidebar').css("width");
        if(width==='90px')
            {
                $('#sidebar').attr('class', 'sidebar expanded');
                setTimeout(()=>{
                    $('.listTitle').css({display:"block"});
                },300);
            }
        else if(width==='300px')
            {
                
               $('#sidebar').attr('class', 'sidebar not-expanded');
                $('.listTitle').css({display:"none"});
            }
        
    }); 
    $("#link1").click(function(){
        if($("#sublist1").attr('class')=='sidebar-sublist expd'){
            $("#sublist1").attr('class','sidebar-sublist not-expd'); 
        }
        else{
            $("#sublist1").attr('class','sidebar-sublist expd'); 
        }
       
    });
    $("#link2").click(function(){
        if($("#sublist2").attr('class')=='sidebar-sublist expd2'){
            $("#sublist2").attr('class','sidebar-sublist not-expd'); 
        }
        else{
            $("#sublist2").attr('class','sidebar-sublist expd2'); 
        }
       
    });
    
});