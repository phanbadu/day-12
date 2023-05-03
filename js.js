var range = document.querySelector('.range')
var process = document.querySelector('.process')
var value = document.querySelector('.process span')

function updateProcess(percent) {
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
}

range.addEventListener('mousemove', function(e) {
    var processWidth = e.pageX - this.offsetLeft
    var percent = processWidth / this.offsetWidth * 100
    percent = Math.round(percent)
    updateProcess(percent)
})

updateProcess(75)
