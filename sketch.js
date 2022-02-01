var centerX
var centerY
var radius
var totalDegrees = 350
var r = 255
var g = 255
var b = 255

function setup() {
    createCanvas(windowWidth,windowHeight)
  
    background(0)
    centerX = width / 2
    centerY = height / 2
    radius = height / 2
    angleMode(DEGREES)
    translateX = 0
    translateY = 0
    opacity = 255
}

function draw() {
    noFill()
    stroke(r, g, b, opacity)
    beginShape()
        for (let i=0; i <=totalDegrees; i++) {
            var noiseFactor = noise(i / 50, frameCount / 1200)
            var x = centerX + radius * cos(i) * noiseFactor
            var y = centerY + radius * sin(i) * noiseFactor 
            curveVertex(x, y)
        }
    endShape(CLOSE)
    radius -= 0.5
    if (frameCount / 10) {
        translateX = 0
        translateY = 0
    }
    if (r > 255) {
        r = 0
    }
    if (g > 255) {
        g = 0
    }
    if (b < 255) {
        b = 0
    }
    if (opacity == 0) {
        opacity = 255
    }
    translateX *= frameCount
    translateY *= frameCount
    opacity -= 1
    r += 1
    g += 1
    b += 1
}