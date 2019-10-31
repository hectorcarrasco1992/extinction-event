 const firstList = document.querySelectorAll('ol li')

 function lineThrough(event){
    event.target.style.textDecoration = 'line-through'
 }
for(let i = 0; i < firstList.length; i++){
    firstList[i].addEventListener('click',lineThrough)
}