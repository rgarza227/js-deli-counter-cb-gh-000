
function takeANumber(katzDeliLine, name){
  katzDeliLine=[...katzDeliLine,name]
  return "Welcome, " + name + ". you are number " + (katzDeliLine.length + 1)+" in line."
}
