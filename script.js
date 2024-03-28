// +++++++* side bar js code *+++++++++++++
document.querySelector(".sidebar").style.display = "none"
document.querySelector(".hamburger").addEventListener("click", () => {
	document.querySelector(".sidebar").style.display = "inline"

	document.querySelector(".hamburger").style.display = "none"
})

document.querySelector(".cross").addEventListener("click", () => {
	document.querySelector(".hamburger").style.display = "inline"

	document.querySelector(".sidebar").style.display = "none"
})
// +++++++* end side bar js code *+++++++++++++

// const checkLink = document.querySelector(".nav_content")
// console.log(checkLink)
// document.querySelector(".nav_link").addEventListener("click", () => {
// 	document.querySelector('.nav_link').style.color = 'red'
// })