let redRange = document.querySelector('#redRange')
let greenRange = document.querySelector('#greenRange')
let blueRange = document.querySelector('#blueRange')
let hexColor = document.querySelector('#hexColor')

function toHex() {

  let redhex = Number(redRange.value).toString(16)
  let greenhex = Number(greenRange.value).toString(16)   //type為string
  let bluehex = Number(blueRange.value).toString(16)
  return hexColor.innerHTML = `#${redhex.padStart(2, '0') + greenhex.padStart(2, '0') + bluehex.padStart(2, '0')}`

}


function bgColor() {
  return document.body.style.backgroundColor = hexColor.innerText
}
//event.target.parentElement.nextElementSibling.innerHTML = `${color}` 

function red(event) {
  let red = document.querySelector('.red_number')
  let color = event.target.value //string
  red.innerHTML = `${color}`
  toHex()
  bgColor()
}

function green(event) {
  let green = document.querySelector('.green_number')
  let color = event.target.value //string
  green.innerHTML = `${color}`
  toHex()
  bgColor()
}

function blue(event) {
  let blue = document.querySelector('.blue_number')
  let color = event.target.value //string
  blue.innerHTML = `${color}`
  toHex()
  bgColor()
}


redRange.addEventListener('mousemove', red)
greenRange.addEventListener('mousemove', green)
blueRange.addEventListener('mousemove', blue)