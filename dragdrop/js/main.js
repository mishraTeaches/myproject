// var clonenode;
// const fill = document.querySelector(".fill");
// const node = fill.cloneNode(true);
// const empties = document.querySelectorAll(".empty");


// for (const empty of empties) {
//   empty.addEventListener("dragover", dragOver);
//   empty.addEventListener("dragenter", dragEnter);
//   empty.addEventListener("dragleave", dragLeave);
//   empty.addEventListener("drop", dragDrop);
// }



// function dragStart(e) {
//   this.className += " hold";
//   console.log(node);
// }

// function dragOver(e) {
//   e.preventDefault();
// }
// function dragEnter(e) {
//   e.preventDefault();
//   this.className += " hovered";
// }
// function dragLeave(e) {
//   this.className = "empty";
//   console.log("leave");
// }
// function dragDrop(e) {
//   console.log(e);
  
//   this.append(node);
// }



var text1=document.querySelector('.text1');
var text2=document.querySelector('.text2');
setInterval(() => {
$('.text2').fadeOut(1500);
$('.text2').fadeIn(500);
$('.text1').fadeOut(800);
$('.text1').fadeIn(1000);
}, 1000);