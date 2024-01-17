setTimeout(() => {
const side = 7

const svgSize = 1000

const middle = svgSize/2

const drawSize = svgSize/2

let d = `M${middle} 0 `

let points = []

for (let i = 1; i <= side; i++) {
    const angle = 2 * Math.PI / side * i
    
    const px = Math.round( middle + drawSize * Math.sin(angle) )
    const py = Math.round( middle + drawSize * -Math.cos(angle) ) // THIS SON OF A BITCH!!! IT HAS TO BE NEGATIVE!!!
    
    console.log(px)
    console.log(py)

    points.push( { x: px, y: py } )
}

points.forEach(element => {
    d += `L${element.x} ${element.y} `
})

document.querySelector("path").setAttribute("d", d)
console.log(d)
}, 100)