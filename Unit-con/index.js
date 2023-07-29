function calculate(){
  var inputValue = Number(document.getElementById("in_val").value);

  if(validate(inputValue)){

    var inUnit = document.getElementById("in_unit").value;
    var outUnit = document.getElementById("out_unit").value;
    var outputValue = document.getElementById("out_val");
     
    var ans = Convert(inputValue,inUnit,outUnit);
    // alert(ans)
    outputValue.value = Number(ans).toFixed(2);
    document.getElementById("showResult").innerHTML = `${inputValue} ${inUnit} = ${ans.toFixed(2)} ${outUnit}`
  }                                                 
}

function Convert(inputValue,inUnit,outUnit){
   
  inputValue = Number(inputValue);
  var result = 0;
  var makeThisMillimeter = 0;
  var inMillimeter = 0;

  switch (inUnit)
  {
    case "Millimeter":
      makeThisMillimeter = 1;
      break;
    case "Centimeter":
      makeThisMillimeter = 10;
      break;
    case "Meter":
      makeThisMillimeter = 1000;
      break;
    case "Kilometer":
      makeThisMillimeter = 1000000;
      break;
  }
  inMillimeter = inputValue * makeThisMillimeter;

  switch (outUnit)
  {
    case "Millimeter":
      result = inMillimeter;
      break;
    case "Centimeter":
      result = inMillimeter / 10;
      break;
    case "Meter":
      result = inMillimeter / 1000;
      break;
    case "Kilometer":
      result = inMillimeter / 1000000;
      break;
  }
    return result;
}

function validate(inputValue){
  if(inputValue<=0){
    alert("Provide proper length");
    return false;
  }
  return true;
};