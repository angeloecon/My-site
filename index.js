const textContainer = document.querySelector(".line_1");
const hideContainer = document.querySelector("#line2");
const sidebar = document.querySelector('.sidebar')


setTimeout(() => {
  textContainer.classList.add("hide-cursor");
  // textContainer.
}, 7000);

setTimeout(() => {
  hideContainer.style.borderRightColor = "black"
}, 7500);

function showSidebar(){
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  sidebar.style.display = 'none'
}




