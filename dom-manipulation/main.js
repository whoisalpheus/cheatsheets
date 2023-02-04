// DOM manipulation
// from webdevsimplified

// Adding Elements

// Select element to add to
const body = document.body

// Create element to add
//const div = document.createElement('div')

// Add to body
// body.append(div)
// body.appendChild(div) // not as versatile as append

// Add text to div
// div.innerText = 'Hello World' // as displayed in html and reads css

// div.textContent = 'Hello World 2' // does not read as html or css

// div.innerHTML = '<strong>Hello World 3</strong>' // read as html, but security issue
// Or this: to make a bold string
// const strong = document.createElement('strong')
// strong.innerText = 'Hello World 4'
// div.append(strong)

const div = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')

// Remove elements from dom
// spanBye.remove()
// Add it back
// div.append(spanBye)
// Or:
div.removeChild(spanHi)

// Modify atributes of element

spanHi.getAttribute('id')
spanHi.id // same thing as a getAttribute

// Set or change attribute
spanHi.setAttribute('id', 'hello')
spanHi.id = 'hello' // same as setAttribute

spanHi.removeAttribute('id') // Removes attribute

// Data attributes
spanHi.dataset.test
spanHi.dataset.longerName
spanHi.dataset.newName = 'hi'

// Classes

spanHi.classList.add('new-class')
spanHi.classList.remove('new-class')
spanHi.classList.toggle('new-class') // Removes or adds depending on if it exists or not

// Modify style property of element

spanHi.style.color = 'red'
spanHi.style.backgroundColor = 'black'