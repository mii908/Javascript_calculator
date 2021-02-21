'use strict'

{
    const appendBtn = document.querySelectorAll('button.append');
    const input = document.getElementById('input');
    const calcBtn = document.getElementById('calculate');
    const resetBtn = document.getElementById('reset');

    appendBtn.forEach((button) => {
       button.addEventListener('click',() => {
           input.value += button.textContent;
        }); 
    });
    
    calcBtn.addEventListener('click',() => {        
        let v = input.value
        const calc = new Function('return ' + v);
        input.value = calc();
    });

    resetBtn.addEventListener('click',() => {
        input.value = '';
    });


    


}