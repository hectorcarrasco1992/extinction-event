const firstList = document.querySelectorAll('ol li')
const secondList = document.querySelectorAll('ul li')
const images = document.querySelectorAll('img')
const explode = document.querySelector('#toggle').addEventListener('click', boom)

function lineThrough(event){
    event.target.style.textDecoration = 'line-through'
 }

 for(let i = 0; i < firstList.length; i++){
    firstList[i].addEventListener('click',lineThrough)
}

function dirkFadeAway(event){
    event.target.style.opacity = '0'
    
}

for(let i = 0; i < firstList.length; i++){
    secondList[i].addEventListener('click', dirkFadeAway)
}


function foldAway(event){
    event.target.style.width = '0px'
}

for(let i = 0; i < firstList.length; i++){
    images[i].addEventListener('click', foldAway)
}
// explode.addEventListener('click', boom)

function boom(){
    for(let i = 0; i < images.length; i++){
        images[i].style.width = '0px'

    }

    for (let i = 0; i < secondList.length; i++){
        secondList[i].style.opacity = '0'
    }

    for (let i = 0; i < firstList.length; i++){
        firstList[i].style.textDecoration = 'line-through'
    }

    
    
}
