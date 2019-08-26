points = [
  {
    x: 100
    y: 153
  }
  {
    x: 137
    y: 109
  }
  {
    x: 204
    y: 107
  }
  {
    x: 250
    y: 144
  }
  {
    x: 300
    y: 105
  }
  {
    x: 356
    y: 104
  }
  {
    x: 393
    y: 142
  }
  {
    x: 403
    y: 204
  }
  {
    x: 377
    y: 248
  }
  {
    x: 250
    y: 365
  }
  {
    x: 138
    y: 260
  }
  {
    x: 99
    y: 215
  }
  {
    x: 100
    y: 153
  }
  {
    x: 167
    y: 177
  }
  {
    x: 173
    y: 121
  }
  {
    x: 137
    y: 109
  }
  {
    x: 167
    y: 177
  }
  {
    x: 138
    y: 260
  }
  {
    x: 120
    y: 186
  }
  {
    x: 99
    y: 215
  }
  {
    x: 100
    y: 153
  }
  {
    x: 120
    y: 186
  }
  {
    x: 167
    y: 177
  }
  {
    x: 250
    y: 144
  }
  {
    x: 173
    y: 121
  }
  {
    x: 204
    y: 107
  }
  {
    x: 250
    y: 144
  }
  {
    x: 273
    y: 201
  }
  {
    x: 300
    y: 105
  }
  {
    x: 350
    y: 112
  }
  {
    x: 392
    y: 212
  }
  {
    x: 393
    y: 142
  }
  {
    x: 350
    y: 112
  }
  {
    x: 356
    y: 104
  }
  {
    x: 350
    y: 112
  }
  {
    x: 273
    y: 201
  }
  {
    x: 392
    y: 212
  }
  {
    x: 377
    y: 248
  }
  {
    x: 403
    y: 204
  }
  {
    x: 392
    y: 212
  }
  {
    x: 245
    y: 305
  }
  {
    x: 167
    y: 177
  }
  {
    x: 273
    y: 201
  }
  {
    x: 138
    y: 260
  }
  {
    x: 245
    y: 305
  }
  {
    x: 273
    y: 201
  }
  {
    x: 377
    y: 248
  }
  {
    x: 245
    y: 305
  }
  {
    x: 233
    y: 329
  }
  {
    x: 138
    y: 260
  }
  {
    x: 245
    y: 305
  }
  {
    x: 277
    y: 316
  }
  {
    x: 233
    y: 329
  }
  {
    x: 250
    y: 365
  }
  {
    x: 277
    y: 316
  }
  {
    x: 377
    y: 248
  }
]

paper = Snap '#preloader__logo'

i = 0
blue = "#1480ff"
red = "#ff2f6e"
grey = "#3d434e"

renderNodes = (i, min, max) ->
  node = paper.circle points[i].x, points[i].y, Math.random() * (max - min) + min
  node.attr
    fill: blue
  return

drawPath = (i)->
  path = paper.path "M#{points[i].x},#{points[i].y}"
  if (i < points.length - 1)
    path.attr
      fill: "transparent"
      stroke: grey
      strokeWidth: 1
    .animate {d:"M#{points[i].x},#{points[i].y} L#{points[i+1].x},#{points[i+1].y}"}, 50, mina.backin, ->
      renderNodes(i, 2, 5)
      drawPath(i+1)
      return
    .animate {stroke: red}, 100, mina.backin
    return

drawPath(i)
