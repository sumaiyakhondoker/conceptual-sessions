// document.getElementById('btn').addEventListener('click', function(){
//     console.log('boss');
// })

// function handleClick(){
//     console.log('boss');
// }

// function handleClick(name){
//     console.log(name);
// }

function handleClick(event){
    console.log(event.target.parentNode.parentNode.childNodes[1].innerText);
}