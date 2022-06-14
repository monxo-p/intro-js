function saludar() {
  let name = document.getElementById("in-name").value;
  let greet = "Hello" + name;
  document.getElementById("output").innerHTML = greet;
}
