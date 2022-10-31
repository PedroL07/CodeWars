// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.



const areaOrPerimeter = function(l , w) {
    let longSide = (l*2)
    let wideSide = (w*2)
    let square = (l*l)
    
    if (l == w){
      return (square)
    }else{
     return (longSide + wideSide)}
  };