var chr_1=document.querySelector(`.character-1`);
var chr_2=document.querySelector(`.character-2`);
var chr_3=document.querySelector(`.character-3`);
var chr_4=document.querySelector(`.character-4`);
var enemy_1=document.querySelector(`.enemy-1`);
var enemy_2=document.querySelector(`.enemy-2`);
var enemy_3=document.querySelector(`.enemy-3`);
var enemy_4=document.querySelector(`.enemy-4`);
var btn_1=document.querySelector(`.btn_1`);
var btn_2=document.querySelector(`.btn_2`);
var btn_3=document.querySelector(`.btn_3`);
var btn_4=document.querySelector(`.btn_4`);
var btn_5=document.querySelector(`.btn_5`);
var btn_6=document.querySelector(`.btn_6`);
var btn_7=document.querySelector(`.btn_7`);
var btn_8=document.querySelector(`.btn_8`);
var can_1=document.querySelector(`.can_1`);
var can_2=document.querySelector(`.can_2`);
var can_3=document.querySelector(`.can_3`);
var can_4=document.querySelector(`.can_4`);
var can_5=document.querySelector(`.can_5`);
var can_6=document.querySelector(`.can_6`);
var can_7=document.querySelector(`.can_7`);
var can_8=document.querySelector(`.can_8`);
var faiz=100;
var guc=90;
var guc_1=document.querySelector(`.guc_1`);
var guc_2=document.querySelector(`.guc_2`);
var guc_3=document.querySelector(`.guc_3`);
var guc_4=document.querySelector(`.guc_4`);
var guc_5=document.querySelector(`.guc_5`);
var guc_6=document.querySelector(`.guc_6`);
var guc_7=document.querySelector(`.guc_7`);
var guc_8=document.querySelector(`.guc_8`);
function resetScore(){

}
btn_1.onclick=function()
{    
    var udar=Math.floor(Math.random()*(30-10)+10) ;
    faiz=faiz-10;
    guc_1.style.width=`${faiz}%`;
    can_2.style.width=`${faiz}%`;

}
btn_2.onclick=function(){
    guc=guc-5;
    faiz=faiz-10;
    guc_2.style.width=`${faiz}%`;
    can_1.style.width=`${faiz}%`;
}
btn_3.onclick=function(){
    guc=guc-10;
    faiz=faiz-10;
    guc_3.style.width=`${faiz}%`;
    can_4.style.width=`${faiz}%`;
}
btn_4.onclick=function(){
    guc=guc-10;
    faiz=faiz-10;
    guc_4.style.width=`${faiz}%`;
    can_3.style.width=`${faiz}%`;
}
btn_5.onclick=function(){
    guc=guc-10;
    faiz=faiz-10;
    guc_5.style.width=`${faiz}%`;
    can_6.style.width=`${faiz}%`;
}
btn_6.onclick=function(){
    guc=guc-10;
    faiz=faiz-10;
    guc_6.style.width=`${faiz}%`;
    can_5.style.width=`${faiz}%`;
}
btn_7.onclick=function(){
    guc=guc-10;
    faiz=faiz-10;
    guc_7.style.width=`${faiz}%`;
    can_8.style.width=`${faiz}%`;
}
btn_8.onclick=function(){
    guc=guc-10;
    faiz=faiz-10;
    guc_8.style.width=`${faiz}%`;
    can_7.style.width=`${faiz}%`;
}

