
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  name = katzDeliLine[0]
  katzDeliLine.shift()
  if (katzDeliLine.length <= 1){
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving "+katzDeliLine[0]+"."
  }
}
