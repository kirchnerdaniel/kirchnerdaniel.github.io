const boxes = document.querySelectorAll(".box");

document.addEventListener("DOMContentLoaded", function(){
  boxes[0].classList.add("active");
  for(let i=1; i<boxes.length; i++){
    setTimeout(()=>{
      boxes[i].classList.add("active");
    }, 500*(i+1));
  }
})

function dropdownDiv(id) {
    const div = document.getElementById(id);
    if (div.classList.contains("d-none")) {
        div.classList.remove("d-none");
    } else {
        div.classList.add("d-none");
    }
}