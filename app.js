const btn = document.getElementById("checkout");
//select value of pizza size
var s = document.getElementById("pizza-size");
var t = document.getElementById("pizza-crust");
//select value of
var price = document.getElementById("price");
var smallPizza = 1000;
var mediumPizza = 2000;
var largePizza = 3000;
//cost for the crust
const crustType = {
  crispy: 250,
  stuffed: 300,
  gluten: 540,
};

btn.addEventListener("click", () => {
  console.log(crustType.crispy);
  var size = s.options[s.selectedIndex].value;
  var crust = t.options[t.selectedIndex].value;
  if (size == "small") {
    if (crust == "crispy")
      return (price.innerText = smallPizza + crustType.crispy);
    if (crust == "stuffed")
      return (price.innerText = smallPizza + crustType.stuffed);
    if (crust == "gluten")
      return (price.innerText = smallPizza + crustType.gluten);
  }
  if (size == "medium") {
    if (crust == "crispy")
      return (price.innerText = mediumPizza + crustType.crispy);
    if (crust == "stuffed")
      return (price.innerText = mediumPizza + crustType.stuffed);
    if (crust == "gluten")
      return (price.innerText = mediumPizza + crustType.gluten);
  }
  if (size == "large") {
    if (crust == "crispy")
      return (price.innerText = largePizza + crustType.crispy);
    if (crust == "stuffed")
      return (price.innerText = largePizza + crustType.stuffed);
    if (crust == "gluten")
      return (price.innerText = largePizza + crustType.gluten);
  }

  //   if (size == "medium") return (price.innerHTML = mediumPizza);
  //   if (size == "large") return (price.innerHTML = largePizza);
});
