const search = document.getElementById('search');
const bars = document.getElementById('bars');
let navbar = document.getElementById('topnav');
let about = document.querySelector('.hang');
let desc = document.querySelector('.desc');

search.addEventListener('keyup', function () {
    if (search.className !== "activeInput"){
        search.className += "activeInput";
    }
    else{
        search.className = "";
    }
})

about.addEventListener('click', function(){
    if(desc.className == "card desc"){
        desc.className += " tCard";
    }
    else{
        desc.className = "card desc";
    }
})

bars.addEventListener('click', function(){
    if (bars.className !== "bars barsAct"){
        bars.className += " barsAct";
        navbar.className += " toggled";
    }
    else{
        bars.className = "bars";
        navbar.className = "nav-list";
    }
})