let increment = 0;

let show = document.querySelector('.show')

let cuerpo = document.querySelector('.container')

document.addEventListener('click',(e)=>{
    console.log(e)

    if(e.target.matches('#decrease')){
        increment--
        show.innerHTML = increment
        cuerpo.style.backgroundcolor = 'rgb(98, 234, 82 )'
        
         
         }    
    else if (e.target.matches('#increase')){
            increment++
            show.innerHTML = increment
            cuerpo.style.backgroundcolor = 'rgb(22, 218, 16 )'
        }
    else if (e.target.matches('#reset')){
        increment = 0
        show.innerHTML = increment
        cuerpo.style.backgroundcolor = 'rgb(140, 10, 130)'
        }   
})
    

