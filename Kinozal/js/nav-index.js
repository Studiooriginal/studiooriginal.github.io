let buttons = document.querySelectorAll(".menuItem");
let menu = document.querySelector(".menuItems");
let transformOffset = window.getComputedStyle(menu).getPropertyValue('transform-origin');
transformOffset = transformOffset.substring(0,transformOffset.indexOf("px"));

buttons.forEach((button,index)=>{
  let angle = (300 / (buttons.length - 1) * index);
  button.onclick = ()=>{
    removeActive();
    button.classList.add("active");
    menu.style.transform = `translateX(-${transformOffset}px) rotate(${-angle}deg)`;//`translateX(-${transformOffset}) rotate(${-angle}deg);`
    menu.style.backgroundColor = "blue"
  }
});


let removeActive = ()=> buttons.forEach(button=>button.classList.remove("active"));