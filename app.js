const btn = document.getElementById("checkout");
var s = document.getElementById("pizza-size");
var t = document.getElementById("pizza-toppings");
var price = document.getElementById("price");
var smallPizza = 1000;
var mediumPizza = 2000;
var largePizza = 3000;
btn.addEventListener("click", () => {
  var size = s.options[s.selectedIndex].value;
  var toppings = t.options[t.selectedIndex].value;
  if (size == "small") return (price.innerHTML = smallPizza);
  if (size == "medium") return (price.innerHTML = mediumPizza);
  if (size == "large") return (price.innerHTML = largePizza);
});
