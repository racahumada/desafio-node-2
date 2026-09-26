async function adicionarItem(userCart, item) {
  userCart.push(item);
}

async function deletarItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) userCart.splice(index, 1);
}

async function removerItem(userCart, item) {
  const deleteIndex = userCart.findIndex((p) => p.name === item.name);
  const itemCart = userCart[deleteIndex];

  if (deleteIndex === -1) {
    console.log("Item não encontrado!");
    return;
  }

  if (itemCart.quantity > 1) {
    itemCart.quantity -= 1;
    itemCart.subtotal = itemCart.quantity * itemCart.price;
    return;
  }

  if (itemCart.quantity === 1) {
    deletarItem(userCart, itemCart.name);
    return;
  }
}

async function totalCart(userCart) {
  return userCart.reduce((acc, currentValue) => acc + currentValue.subtotal, 0);
}

async function displayCart(userCart) {
  console.dir(userCart, { depth: null, colors: true });
}

export { adicionarItem, deletarItem, removerItem, totalCart, displayCart };
