const firstList = document.querySelectorAll('ol li')
const secondList = document.querySelectorAll('ul li')
const images = document.querySelectorAll('#row *')

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
    event.target.style.height = '1px'
}

for(let i = 0; i < firstList.length; i++){
    images[i].addEventListener('click', foldAway)
}

