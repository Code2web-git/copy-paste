//aclipbosrdEvent Object
//copy ~ copy cora hole 
//cut ~ Cut kora hole
//paste ~ paste kora hole

// let text = document.getElementById('p')

let btns = document.querySelectorAll(".buttons button");
let alert = document.getElementById('alert');
let x = '';
btns.forEach(btn =>{
  btn.addEventListener('click' , (e)=>{
    let wc = e.currentTarget.innerText;
    let input = document.getElementById('in');
    let start = input.selectionStart;
    let end = input.selectionEnd;
    let how = input.value.substring(start , end);
    let out = document.getElementById('out');
    
    if(wc === "Cut"){
      x = how;
      out.value = '';
      input.value = input.value.substring(0, start) + input.value.substring(end);
      alertN(wc)
    }
    if(wc ==='Copy'){
      x = how;
      out.value = '';
      alertN(wc)
    }
    if(wc ==="Paste"){
      out.value += x;
      alertN(wc)
    }
  })
})

function alertN(m){
  alert.textContent = m;
  alert.style.opacity = '1';
  setTimeout(()=>{
    alert.style.opacity = '0'
  } , 500);
}