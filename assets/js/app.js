const preloader = document.getElementById("preloader");

setTimeout(() => {
   preloader.classList.add("d-none")
   preloader.classList.add("overflow-hidden")
}, 1000)

let backtotop = document.getElementById('backto-top')

window.addEventListener("scroll", () => {
   if (window.scrollY > 700) {
      backtotop.style.display = "flex"
   }
   else {
      backtotop.style.display = "none"
   }
})