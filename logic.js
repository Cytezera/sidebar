const openButton = document.querySelector('.button');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close-button');

openButton.addEventListener("click",function(){
    sidebar.classList.toggle("show-sidebar")
});

closeButton.addEventListener("click",function(){
    sidebar.classList.remove("show-sidebar")
});