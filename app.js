const btn = document.getElementById("checkout");
//select value of pizza size
var s = document.getElementById("pizza-size");
var t = document.getElementById("pizza-crust");
var tp = document.getElementById("pizza-top");
const deliver = document.getElementById("defaultContactFormCopy");
//checkout modal
const pizzaSize = document.getElementById("pizza-size");
const pizzaPrice = document.getElementById("pizza-price");

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
  //get the modal data
  const finalcrust = document.getElementById("finalcrust");
  const finalsize = document.getElementById("finalsize");
  const finalprice = document.getElementById("finalprice");
  var size = s.options[s.selectedIndex].value;
  var crust = t.options[t.selectedIndex].value;
  if (size == "small") {
    if (crust == "crispy") {
      price.innerText = smallPizza + smallCrust.crispy;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finalprice.innerText = smallPizza + smallCrust.crispy;
    }
    if (crust == "stuffed") {
      price.innerText = smallPizza + smallCrust.stuffed;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finalprice.innerText = smallPizza + smallCrust.stuffed;
    }

    if (crust == "gluten") {
      price.innerText = smallPizza + smallCrust.gluten;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finalprice.innerText = smallPizza + smallCrust.gluten;
    }
  }
  if (size == "medium") {
    if (crust == "crispy") {
      price.innerText = mediumPizza + mediumCrust.crispy;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finalprice.innerText = mediumPizza + mediumCrust.crispy;
    }

    if (crust == "stuffed") {
      price.innerText = mediumPizza + mediumCrust.stuffed;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finalprice.innerText = mediumPizza + mediumCrust.stuffed;
    }

    if (crust == "gluten") {
      price.innerText = mediumPizza + mediumCrust.gluten;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finalprice.innerText = mediumPizza + mediumCrust.gluten;
    }
  }
  if (size == "large") {
    if (crust == "crispy") {
      price.innerText = largePizza + largeCrust.crispy;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finalprice.innerText = largePizza + largeCrust.crispy;
    }

    if (crust == "stuffed") {
      price.innerText = largePizza + largeCrust.stuffed;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finalprice.innerText = largePizza + largeCrust.stuffed;
    }

    if (crust == "gluten") {
      price.innerText = largePizza + largeCrust.gluten;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finalprice.innerText = largePizza + largeCrust.gluten;
    }
  }

  console.log("hello there");
  //   if (size == "medium") return (price.innerHTML = mediumPizza);
  //   if (size == "large") return (price.innerHTML = largePizza);
});
