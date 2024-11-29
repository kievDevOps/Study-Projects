var weight;
var height;
var bmi;
var result;

function calculate(event){
  event.preventDefault(); /* This prevents the function returning to it's original state after it's completed */
  weight = document.getElementById('weight').value; /* This gets the value from the id "weight", in the HTML document */
  height = document.getElementById('height').value; /* This gets the value from the id "height", in the HTML document */
  bmi = weight / (height * height); /* This is how BMI is calculated */
  result = document.getElementById('result');

  if(bmi < 16){
    result.innerHTML /* This inserts the "result" in the HTML */ = '<br> Your BMI value is: ' + bmi.toFixed(2) /* This returns a decimal number */ + '<br> You are severely underweight.'
  }else if(bmi >= 16 && bmi < 17){
    result.innerHTML = '<br> Your BMI value is: ' + bmi.toFixed(2) + '<br> You are moderately underweight.';
  }else if(bmi >= 17 && bmi <= 18.5){
    result.innerHTML = '<br> Your BMI value is: ' + bmi.toFixed(2) + '<br> You are mildly underweight.';
  }else if(bmi > 18.5 && bmi < 25){
    result.innerHTML = '<br> Your BMI value is: ' + bmi.toFixed(2) + '<br> You are on normal weight.';
  }else if(bmi >= 25 && bmi < 30){
    result.innerHTML = '<br> Your BMI value is: ' + bmi.toFixed(2) + '<br> You are overweight.';
  }else if(bmi >= 30 && bmi < 35){
    result.innerHTML = '<br> Your BMI value is: ' + bmi.toFixed(2) + '<br> You are obese class 1.';
  }else if(bmi >= 35 && bmi < 40){
    result.innerHTML = '<br> Your BMI value is: ' + bmi.toFixed(2) + '<br> You are obese class 2.';
  }else if(bmi >= 40){
    result.innerHTML = '<br> Your BMI value is: ' + bmi.toFixed(2) + '<br> You are obese class 3';
  }

  document.getElementById('weight').value = ''; /* This will set the weight back to 0 or null after the entire operation is completed */
  document.getElementById('height').value = ''; /* This will set the height back to 0 or null after the entire operation is completed */
}
