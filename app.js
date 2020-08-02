const btn = document.getElementById("checkout");
//select value of pizza size
var s = document.getElementById("pizza-size");
var t = document.getElementById("pizza-crust");
const deliver = document.getElementById("defaultContactFormCopy");
//select value of
var price = document.getElementById("price");
var smallPizza = 1000;
var mediumPizza = 2000;
var largePizza = 3000;
//cost for the crust
const smallCrust = {
  crispy: 150,
  stuffed: 200,
  gluten: 440,
};
const mediumCrust = {
  crispy: 250,
  stuffed: 300,
  gluten: 540,
};
const largeCrust = {
  crispy: 350,
  stuffed: 400,
  gluten: 740,
};
btn.addEventListener("click", () => {
  //   console.log(crustType.crispy);
  var size = s.options[s.selectedIndex].value;
  var crust = t.options[t.selectedIndex].value;
  if (size == "small") {
    if (crust == "crispy")
      return (price.innerText = smallPizza + smallCrust.crispy);
    if (crust == "stuffed")
      return (price.innerText = smallPizza + smallCrust.stuffed);
    if (crust == "gluten")
      return (price.innerText = smallPizza + smallCrust.gluten);
  }
  if (size == "medium") {
    if (crust == "crispy")
      return (price.innerText = mediumPizza + mediumCrust.crispy);
    if (crust == "stuffed")
      return (price.innerText = mediumPizza + mediumCrust.stuffed);
    if (crust == "gluten")
      return (price.innerText = mediumPizza + mediumCrust.gluten);
  }
  if (size == "large") {
    if (crust == "crispy")
      return (price.innerText = largePizza + largeCrust.crispy);
    if (crust == "stuffed")
      return (price.innerText = largePizza + largeCrust.stuffed);
    if (crust == "gluten")
      return (price.innerText = largePizza + largeCrust.gluten);
  }
  console.log(deliver.value);

  //   if (size == "medium") return (price.innerHTML = mediumPizza);
  //   if (size == "large") return (price.innerHTML = largePizza);
});
