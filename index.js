// add solution here
function theBeatlesPlay (musicians, instruments){
  var arr = []
  var str = ""
  for (var i = 0; i < musicians.length -1; i++){
      str += musicians[i] + " plays " + instruments[i]
      arr.push(str)
      str = ""
  }
  return arr
}

function johnLennonFacts (arr){
  
}