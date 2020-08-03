const btn = document.getElementById("checkout");
//select value of pizza size
var s = document.getElementById("pizza-size");
var t = document.getElementById("pizza-crust");
var tp = document.getElementById("pizza-top");
const deliver = document.getElementById("defaultContactFormCopy");
//checkout modal
const pizzaSize = document.getElementById("pizza-size");
const pizzaPrice = document.getElementById("pizza-price");

//select value of pizza size
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
//toppings
const smallTops = {
  mushroom: 100,
  sausage: 240,
  cheese: 340,
};
const mediumTops = {
  mushroom: 150,
  sausage: 270,
  cheese: 460,
};
const largeTops = {
  mushroom: 250,
  sausage: 300,
  cheese: 540,
};

btn.addEventListener("click", () => {
  //get the modal data
  const finalcrust = document.getElementById("finalcrust");
  const finalsize = document.getElementById("finalsize");
  const finalprice = document.getElementById("finalprice");
  const finaltoping = document.getElementById("finaltoping");

  var size = s.options[s.selectedIndex].value;
  var crust = t.options[t.selectedIndex].value;
  var toppings = tp.options[tp.selectedIndex].value;
  console.log(toppings);

  if (size == "small") {
    if (crust == "crispy" && toppings == "mushroom") {
      price.innerText = smallPizza + smallCrust.crispy + smallTops.mushroom;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finaltoping.innerText = toppings;
      finalprice.innerText =
        smallPizza + smallCrust.crispy + smallTops.mushroom;
    }
    if (crust == "stuffed" && toppings == "sausage") {
      price.innerText = smallPizza + smallCrust.stuffed + smallTops.sausage;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finaltoping.innerText = toppings;
      finalprice.innerText =
        smallPizza + smallCrust.stuffed + smallTops.sausage;
    }

    if (crust == "gluten" && toppings == "cheese") {
      price.innerText = smallPizza + smallCrust.gluten + smallTops.cheese;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finaltoping.innerText = toppings;
      finalprice.innerText = smallPizza + smallCrust.gluten + smallTops.cheese;
    }
  }
  if (size == "medium") {
    if (crust == "crispy" && toppings == "mushroom") {
      price.innerText = mediumPizza + mediumCrust.crispy + mediumTops.mushroom;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finaltoping.innerText = toppings;

      finalprice.innerText =
        mediumPizza + mediumCrust.crispy + mediumTops.mushroom;
    }

    if (crust == "stuffed" || toppings == "sausage") {
      price.innerText = mediumPizza + mediumCrust.stuffed + mediumTops.sausage;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finaltoping.innerText = toppings;

      finalprice.innerText =
        mediumPizza + mediumCrust.stuffed + mediumTops.sausage;
    }

    if (crust == "gluten" && toppings == "cheese") {
      price.innerText = mediumPizza + mediumCrust.gluten + mediumTops.cheese;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finaltoping.innerText = toppings;

      finalprice.innerText =
        mediumPizza + mediumCrust.gluten + mediumTops.cheese;
    }
  }
  if (size == "large") {
    if (crust == "crispy" && toppings == "mushroom") {
      price.innerText = largePizza + largeCrust.crispy + largeTops.mushroom;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finaltoping.innerText = toppings;

      finalprice.innerText =
        largePizza + largeCrust.crispy + largeTops.mushroom;
    }

    if (crust == "stuffed" && toppings == "sausage") {
      price.innerText = largePizza + largeCrust.stuffed + largeTops.sausage;
      finalcrust.innerText = crust;
      finalsize.innerText = size;
      finaltoping.innerText = toppings;

      finalprice.innerText =
        largePizza + largeCrust.stuffed + largeTops.sausage;
    }

    if (crust == "gluten" && toppings == "cheese") {
      price.innerText = largePizza + largeCrust.gluten + largeTops.cheese;
      finalcrust.innerText = crust;
      finaltoping.innerText = toppings;

      finalsize.innerText = size;
      finalprice.innerText = largePizza + largeCrust.gluten + largeTops.cheese;
    }
  }

  // console.log("hello there");
  //   if (size == "medium") return (price.innerHTML = mediumPizza);
  //   if (size == "large") return (price.innerHTML = largePizza);
});
