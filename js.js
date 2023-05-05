var range = document.querySelector('.range')
var process = document.querySelector('.process')
var value = document.querySelector('.process span')
var body = document.querySelector('body')

function updateProcess(percent) {
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
    body.style.background = `linear-gradient(to right, rgba(0,0,0,${percent/100}),rgba(0,0,0,${percent/100})), url(7.jpg) no-repeat center/cover`
}

range.addEventListener('mousemove', function(e) {
    var processWidth = e.pageX - this.offsetLeft
    var percent = processWidth / this.offsetWidth * 100
    percent = Math.round(percent)
    updateProcess(percent)
})

updateProcess(75)
