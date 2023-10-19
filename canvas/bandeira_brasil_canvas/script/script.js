let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

ctx.fillStyle = "green"
ctx.fillRect(0,0, 300, 200)

ctx.beginPath()
ctx.strokeStyle = "yellow"
ctx.moveTo(10,100)
ctx.lineTo(150,10)
ctx.lineTo(290,100)
ctx.lineTo(150,190)
ctx.fillStyle = "yellow"
ctx.fill()
ctx.closePath()
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "blue"
ctx.fillStyle = "blue"
ctx.arc(150,100,60,0,2*Math.PI)
ctx.fill()
ctx.closePath()
ctx.stroke()
