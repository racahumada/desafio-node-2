import * as Cart from "./services/cart.js";
import * as Item from "./services/item.js";

const cart = [];

console.log("Welcome to the your Shoopee Cart!");

const item1 = await Item.createItem("Blister Un. Fogo Fantamagórico", 13.99, 3);
const item2 = await Item.createItem("Blister Escuridão Absoluta", 10.99, 3);
const item3 = await Item.createItem("Blister 30 anos", 32.99, 1);

await Cart.adicionarItem(cart, item1);
await Cart.adicionarItem(cart, item2);
await Cart.adicionarItem(cart, item3);

console.dir(
  cart.map((value) => ({ ...value, subtotal: value.subtotal })),
  { depth: null, colors: true },
);
console.log("Carrinho -> Total ", await Cart.totalCart(cart));

await Cart.deletarItem(cart, item2.name);

console.dir(
  cart.map((value) => ({ ...value, subtotal: value.subtotal })),
  { depth: null, colors: true },
);
console.log("Carrinho -> Total ", await Cart.totalCart(cart));

await Cart.removerItem(cart, item1);
console.dir(
  cart.map((value) => ({ ...value, subtotal: value.subtotal })),
  { depth: null, colors: true },
);
console.log("Carrinho -> Total ", await Cart.totalCart(cart));
