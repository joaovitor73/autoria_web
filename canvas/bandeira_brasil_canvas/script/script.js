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

ctx.beginPath()
ctx.strokeStyle = "white"
ctx.lineWidth = 3
ctx.moveTo(90,92)
ctx.quadraticCurveTo(160,54, 210, 110)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "white"
ctx.lineWidth = 3
ctx.moveTo(89,94)
ctx.quadraticCurveTo(160,56, 210, 112)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "white"
ctx.lineWidth = 3
ctx.moveTo(89,96)
ctx.quadraticCurveTo(160,58, 210, 114)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "white"
ctx.lineWidth = 3
ctx.moveTo(89,98)
ctx.quadraticCurveTo(160,60, 210, 116)
ctx.stroke()

