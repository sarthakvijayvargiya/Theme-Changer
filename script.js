const bodyChange = document.querySelector('body');

const buttons = document.querySelectorAll('.button');
buttons.forEach((button)=>{
     button.addEventListener('click',function(e){
      bodyChange.style.backgroundColor = `${e.target.id}`
     })
})