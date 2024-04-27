let buplus=document.querySelector('.bu2');
let buman=document.querySelector('.bu1');

buplus.addEventListener('click',increasequentity);
buman.addEventListener('click',decreasequentity);


function increasequentity(){
  document.querySelector('.p1').value=parseInt(document.querySelector('.p1').value)+1;
}

function decreasequentity(){
    if( document.querySelector('.p1').value>0){
    document.querySelector('.p1').value=parseInt(document.querySelector('.p1').value)-1;
    }
    return;
}
 
let afispanie=document.querySelector('.afisp');
afispanie.addEventListener('click', )