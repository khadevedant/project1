let resultField = document.getElementById('result');

function clearResult() {
  resultField.value = '';
}

function appendValue(value) {
  resultField.value += value;
}

function calculate() {
  try {
    let result = eval(resultField.value);
    resultField.value = result;
  } catch (error) {
    resultField.value = 'Error';
  }
}
