function appendValue(value) {
    document.getElementById("result").value += value;
  }
function deleteLast() {
  display.textContent = display.textContent.slice(0, -1);
}
  
  function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function calculate() {
    try {
      const result = eval(document.getElementById("result").value);
      document.getElementById("result").value = result;
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }
