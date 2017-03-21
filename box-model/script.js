var outerBox = document.querySelector('.outer-box')
var innerBox = document.querySelector('.inner-box')
var box = document.querySelector('.box')

var fields = {
  padding: document.querySelector('.field.padding'),
  margin: document.querySelector('.field.margin'),
  border: document.querySelector('.field.border')
}

var previewElems = document.querySelectorAll('.preview p')

function update () {
  box.style = 'padding: ' + fields.padding.value + 'px;' +
		'margin: ' + fields.margin.value + 'px;' +
		'border: ' + fields.border.value + 'px solid #735;'
  // previewElems.forEach(function (el) {
  //   el.style = 'padding: ' + fields.padding.value + 'px;' +
		// 'margin: ' + fields.margin.value + 'px;' +
		// 'border: ' + fields.border.value + 'px solid #aaa;'
  // })
}

fields.padding.addEventListener('input', update)
fields.margin.addEventListener('input', update)
fields.border.addEventListener('input', update)

update()
