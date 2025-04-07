
let red_light=document.getElementById('red');
let yellow_light=document.getElementById('yellow');
let green_light=document.getElementById('green');


let current_state='red';


function changestate(){
    if(current_state=== 'red'){
        red_light.style.backgroundColor='#333'
        yellow_light.style.backgroundColor='yellow'
        current_state='yellow'
        setTimeout(changestate,2000)
    } else if (current_state === 'yellow') {
        yellow_light.style.backgroundColor = '#333';
        green_light.style.backgroundColor = 'green';
        current_state = 'green';
        setTimeout(changestate, 6000);
      } else if (current_state === 'green') {
        green_light.style.backgroundColor = '#333';
        red_light.style.backgroundColor = 'red';
        current_state = 'red';
        setTimeout(changestate, 4000);
      }
    }
    
    changestate();

