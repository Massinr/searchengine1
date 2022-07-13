//variable
let UserInput = document.querySelector('.query');
let searchEx = document.querySelector('.Button');

//recherche
searchEx.onclick = function(){
    let TO = 'https://www.google.com/search?q='+UserInput.value;
    window.open(TO);
}
