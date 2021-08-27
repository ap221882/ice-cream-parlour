let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(milliseconds) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, milliseconds);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]}`);
    await time(0000);
    console.log("Production has started");
    await time(2000);
    console.log("the fruit was chopped");
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected`);
    await time(1000);
    console.log("Start machine");
    await time(2000);
    console.log(`Icecream placed on ${stocks.holder[0]}`);
    await time(3000);
    console.log(`${stocks.toppings[0]} was selected`);
    await time(1000);
    console.log("ice cream served");
  } catch (error) {
    console.log("Customer left", error);
  } finally {
    console.log("Day ended, shop is closed");
  }
}

kitchen();
