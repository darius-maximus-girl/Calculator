//BUTTONS
const buttons = document.querySelectorAll('.button');
const clear = document.getElementById('clear');
const summingUp = document.getElementById('equals');

//ADDING BUTTONS' VALUE TO THE DISPLAY WINDOW
const display = ( e ) => {
  const value = e.target.value;
  document.getElementById('display').value += value;
};

buttons.forEach( btn => {
  btn.addEventListener('click', display)
});

//ADDING THE 'SUMMING UP' FUNCTION

const total = () => {
  if (document.getElementById('display').value === " "){
  return
  } else {
  document.getElementById('display').value = eval(document.getElementById('display').value)
}
};

summingUp.onclick = total;

//ADDING THE 'CLEAR' FUNCTION
const clearTextview = () => {
  let empty = '';
  document.getElementById('display').value = empty;
};

clear.onclick = clearTextview;
