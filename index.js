var popup=document.querySelector('.popup');
var overlay=document.querySelector('.overlay');
var addbutton=document.getElementById('addbutton');
addbutton.addEventListener('click',function(){
    popup.style.display='block';
    overlay.style.display='block';
})
var cancelbook=document.getElementById('cancelbook');
cancelbook.addEventListener('click',function(event){
    event.preventDefault();
    popup.style.display='none';
    overlay.style.display='none';

})
var bookname=document.getElementById('bookname');
var bookauthor=document.getElementById('bookauthor');
var description=document.getElementById('description');
var addbook=document.getElementById('addbook');
var container=document.querySelector('.container');
addbook.addEventListener('click',function(event){
    event.preventDefault();
    var div=document.createElement('div');
    div.setAttribute('class','bookcontainer');
    div.innerHTML=`<h2>${bookname.value}</h2>
    <h2>${bookauthor.value}</h2>
    <p>${description.value}</p>
    <button id='deletebook' onclick='dltbook(event)'>Delete</button>`;
    container.append(div);
    popup.style.display='none';
    overlay.style.display='none';
    
    
})
function dltbook(event){
    event.target.parentElement.remove();

}
