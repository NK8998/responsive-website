
const navToggle = document.getElementById('burger')
const myDropdown = document.getElementById('myDropdown')



navToggle.addEventListener('click', () =>{
    navToggle.classList.toggle("change")
    myDropdown.toggleAttribute('data-visible')
    
})
  























