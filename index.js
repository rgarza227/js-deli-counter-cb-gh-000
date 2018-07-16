
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  katzDeliLine.slice(1)
  if (katzDeliLine.length <= 1){
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving "+katzDeliLine[0]+"."
  }
}
