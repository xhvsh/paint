const container = document.querySelector('.container')

for (let i = 0; i < 2255; i++) {
  const div = document.createElement('div')
  container.appendChild(div)
}

let divs = document.querySelectorAll('div')

divs.forEach((e) => {
  e.addEventListener('mouseover', () => {
    e.classList.add('invisible')
  })
})
var divsWithClassX = 0
setInterval(() => {
  divsWithClassX = 0

  for (var i = 0; i < 2255; i++) {
    if (divs[i].classList.contains('invisible')) {
      divsWithClassX++
    }
  }

  var percentage = (divsWithClassX / divs.length) * 100

  document.querySelector('h1').innerHTML = `${percentage.toFixed(2)}%`

  if (percentage == 100) {
    document.querySelector('h1').classList.add('done')
  }
}, 1)
