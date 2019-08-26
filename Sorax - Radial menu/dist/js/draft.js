(function() {
  var circle, group, paper, rect, style;

  paper = Snap(800, 400);

  style = {
    fill: '#d03682',
    stroke: '#444',
    strokeWidth: 5,
    cursor: 'pointer'
  };

  
  // path = paper
  //   .path ""
  //   .attr
  //     stroke: "#387"
  //     fill: "transparent"
  //     strokeWidth: 3

  // pathArray = []

  // updatePath = ->
  //   #Redraw Line
  //   first = pathArray[0]
  //   pathString = "M #{first.x},#{first.y}"
  //   for node in pathArray.slice 1
  //     pathString += "T #{node.x},#{node.y}"
  //   path.attr d: pathString

  // paper.click (e) ->
  //   if e.target.tagName is 'svg'
  //     paper
  //       .circle e.offsetX, e.offsetY, 15
  //       .attr style
  //       .data 'i', pathArray.length
  //       .mouseover ->
  //         @stop().animate {r: 25}, 1000, mina.elastic
  //       .mouseout ->
  //         @stop().animate {r: 15}, 300, mina.easeinout
  //       .drag ((dx, dy, x, y) ->
  //         @attr
  //           cx: x
  //           cy: y
  //         currentNode = pathArray[@data 'i']
  //         currentNode.x = x
  //         currentNode.y = y
  //         do updatePath),
  //       -> path.stop().animate {opacity: .2}, 200, mina.easeinout
  //       -> path.stop().animate {opacity: 1}, 1000, mina.easeinout

  //     pathArray.push
  //       x: e.offsetX
  //       y: e.offsetY

  //     do updatePath

  //     pathString = path.attr 'd'
  //     coords = "#{e.offsetX},#{e.offsetY}"
  //     path.attr
  //       d: if pathString then pathString + "L #{coords} " else "M #{coords} "
  circle = paper.circle(200, 200, 60).attr(style);

  rect = paper.rect(300, 150, 100, 100).attr(style);

  group = paper.g(circle, rect).drag(function(dx) {
    return this.transform(`r${dx},350,500`);
  });

}).call(this);
