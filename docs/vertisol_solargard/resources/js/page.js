
const listItems = document.getElementsByClassName('list-items')
const listItem = Array.from(listItems)

let imageArray = []

imageArray = listItem.map(img=>{
		img.addEventListener('mouseenter',()=>{
	  showcase.src = img.src
	})
})


const modalContent = document.querySelector('.modal-img')

	imageArray = listItem.map(img=>{
			img.addEventListener('click',()=>{
		  		modalContent.src = img.src
		  		let modal = document.querySelector('.modal')
		  		modal.classList.add('is-active')
		})
		  
	})

const closeModal = document.querySelector('.modal-close')

closeModal.addEventListener('click',()=>{
	let modal = document.querySelector('.modal')
	modal.classList.remove('is-active')
})