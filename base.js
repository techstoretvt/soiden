

document.addEventListener('mousemove',evt=>{
    var top = evt.clientY - 120
    var left = evt.clientX - 120
    document.querySelector('.wrap').style.transform = `translate(${left}px,${top}px)`
    document.querySelector('.image').style.transform = `translate(-${left}px,-${top}px)`
})
