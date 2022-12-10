let icon = document.querySelector(".icon")
let icon_all = document.querySelectorAll(".icon span")
let links = document.querySelector(".links")
let links_all = document.querySelectorAll(".links li")
let close = document.querySelector(".close")

icon.onclick = function () {
	links.style.opacity = "1"
}
close.onclick = function () {
	links.style.opacity = "0"
	
}