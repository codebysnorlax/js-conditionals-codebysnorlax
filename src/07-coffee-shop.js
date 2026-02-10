/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  let price;
  const coffeePrice = {
    small: 3.0,
    medium: 4.0,
    large: 5.0,
  };
  const coffeeTypes = {
    regular: 0.0,
    latte: 1.0,
    cappuccino: 1.5,
    mocha: 2.0,
  };
  const Optional = {
    whippedCream: 0.5,
    extraShot: 0.75,
  };
  // console.log(coffeeTypes);

  if (
    (size != "small" && size != "medium" && size != "large") ||
    (type != "regular" &&
      type != "latte" &&
      type != "cappuccino" &&
      type != "mocha")
  ) {
    return -1;
  } else {
    if (size === "small") {
      if (type === "regular") {
        price = coffeePrice.small + coffeeTypes.regular;
      } else if (type === "latte") {
        price = coffeePrice.small + coffeeTypes.latte;
      } else if (type === "cappuccino") {
        price = coffeePrice.small + coffeeTypes.cappuccino;
      } else if (type === "mocha") {
        price = coffeePrice.small + coffeeTypes.mocha;
      } else {
        return -1;
      }
    }
    if (size === "medium") {
      if (type === "regular") {
        price = coffeePrice.medium + coffeeTypes.regular;
      } else if (type === "latte") {
        price = coffeePrice.medium + coffeeTypes.latte;
      } else if (type === "cappuccino") {
        price = coffeePrice.medium + coffeeTypes.cappuccino;
      } else if (type === "mocha") {
        price = coffeePrice.medium + coffeeTypes.mocha;
      } else {
        return -1;
      }
    }
    if (size === "large") {
      if (type === "regular") {
        price = coffeePrice.large + coffeeTypes.regular;
      } else if (type === "latte") {
        price = coffeePrice.large + coffeeTypes.latte;
      } else if (type === "cappuccino") {
        price = coffeePrice.large + coffeeTypes.cappuccino;
      } else if (type === "mocha") {
        price = coffeePrice.large + coffeeTypes.mocha;
      } else {
        return -1;
      }
    }
    if (extras.whippedCream == true) {
      price += Optional.whippedCream;
    }
    if (extras.extraShot == true) {
      price += Optional.extraShot;
    }

    console.log(`Your Total Amount: $${price.toFixed(2)}`);
    return Number(price.toFixed(2));
  }
}
calculateCoffeePrice("small", "regular", {
  whippedCream: false,
  extraShot: false,
});
