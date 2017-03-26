presets = [
  {
    buttonText: 'Space Between',
    parentCode: 'display: flex;\njustify-content: space-between;',
    childCode: ''
  },
  {
    buttonText: 'Space Around',
    parentCode: 'display: flex;\njustify-content: space-around;',
    childCode: ''
  },
  {
    buttonText: 'Columns',
    parentCode: 'display: flex;',
    childCode: 'flex-grow: 1;'
  },
  {
    buttonText: 'Smart Wrapping',
    parentCode: 'display: flex;\nflex-wrap: wrap;',
    childCode: 'flex-grow: 1;\nmin-width: 300px;'
  }
]

var parentCSS = document.querySelector('.parent-css')
var childCSS = document.querySelector('.child-css')
var parentDiv = document.querySelector('.parent')
var children = document.querySelectorAll('.child')
var nav = document.querySelector('.examples')

function update () {
  children.forEach(function (child) {
    child.style = childCSS.textContent
  })
  parentDiv.style = parentCSS.textContent
}

presets.forEach(function (preset) {
  var button = document.createElement('button')
  button.textContent = preset.buttonText
  button.addEventListener('click', function () {
    parentCSS.textContent = preset.parentCode
    childCSS.textContent = preset.childCode
    update()
  })
  nav.appendChild(button)
})

parentCSS.addEventListener('input', update)
childCSS.addEventListener('input', update)
