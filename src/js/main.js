import objectFitImages from 'object-fit-images'
import 'svgxuse'
import 'picturefill'

document.addEventListener('DOMContentLoaded', function(event) {
  objectFitImages()
  console.log('DOM Loaded')

  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
  })
})
