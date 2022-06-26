const menuItems = [
  {
    name: 'French Fries with Ketchup',
    price: 2.23,
    image: 'plate__french-fries.png',
    alt: 'French Fries',
    count: 0
  },

  {
    name: 'Salmon and Vegetables',

    price: 5.12,

    image: 'plate__salmon-vegetables.png',

    alt: 'Salmon and Vegetables',

    count: 0
  },

  {
    name: 'Spaghetti Meat Sauce',

    price: 7.82,

    image: 'plate__spaghetti-meat-sauce.png',

    alt: 'Spaghetti with Meat Sauce',

    count: 0
  },

  {
    name: 'Bacon, Eggs, and Toast',

    price: 5.99,

    image: 'plate__bacon-eggs.png',

    alt: 'Bacon, Eggs, and Toast',

    count: 0
  },

  {
    name: 'Chicken Salad with Parmesan',

    price: 6.98,

    image: 'plate__chicken-salad.png',

    alt: 'Chicken Salad with Parmesan',

    count: 0
  },

  {
    name: 'Fish Sticks and Fries',

    price: 6.34,

    image: 'plate__fish-sticks-fries.png',

    alt: 'Fish Sticks and Fries',

    count: 0
  }
];

const subTotal = document.getElementsByClassName('subtotal')[0];

const total = document.getElementsByClassName('total')[1];

const tax = document.getElementsByClassName('tax')[0];

let taxValue = 0;

let subTotalValue = 0;

let totalValue = 0;

const emptyP = document.getElementsByClassName('empty')[0];

const addToCart = document.getElementsByClassName('add');

const updatePrice = () => {
  subTotalValue = 0;

  for (let i = 0; i < menuItems.length; i += 1) {
    subTotalValue += menuItems[i].price * menuItems[i].count;
  }

  taxValue = subTotalValue * 0.0975;

  taxValue = Math.round(taxValue * 100) / 100;

  subTotalValue = Math.round(subTotalValue * 100) / 100;

  tax.innerText = `$${taxValue}`;

  totalValue = subTotalValue + taxValue;

  totalValue = Math.round(totalValue * 100) / 100;

  subTotal.innerText = `$${subTotalValue}`;

  total.innerText = `$${totalValue}`;

  if (subTotalValue === 0) {
    emptyP.style.display = 'block';
  } else {
    emptyP.style.display = 'none';
  }
};

const createItemOnRight = (item, addButton, checkImage) => {
  const ul = document.getElementsByClassName('cart-summary')[0];

  const li = document.createElement('li');

  const divPlate = document.createElement('div');

  const divContent = document.createElement('div');

  const divQuantityWrapper = document.createElement('div');

  const divQuantity = document.createElement('div');

  const divSubtotal = document.createElement('div');

  const imgTitle = document.createElement('img');

  const imgChevron1 = document.createElement('img');

  const imgChevron2 = document.createElement('img');

  const p1 = document.createElement('p');

  const p2 = document.createElement('p');

  const buttonDecrease = document.createElement('button');

  const buttonIncrease = document.createElement('button');

  divPlate.classList.add('plate');

  imgTitle.setAttribute('src', `images/${item.image}`);

  imgTitle.setAttribute('alt', item.name);

  imgTitle.classList.add('plate');

  divContent.classList.add('content');

  p1.classList.add('menu-item');

  p1.innerText = item.name;

  p2.classList.add('price');

  p2.innerText = `$${item.price}`;

  divQuantityWrapper.classList.add('quantity-wrapper');

  buttonDecrease.classList.add('decrease');

  imgChevron1.setAttribute('src', 'images/chevron.svg');

  divQuantity.classList.add('quantity');

  divQuantity.innerText = item.count;

  buttonIncrease.classList.add('increase');

  imgChevron2.setAttribute('src', 'images/chevron.svg');

  divSubtotal.classList.add('subtotal');

  divSubtotal.innerText = `$${item.count * item.price}`;

  li.appendChild(divPlate);

  divPlate.appendChild(imgTitle);

  divPlate.appendChild(divQuantity);

  li.appendChild(divContent);

  divContent.appendChild(p1);

  divContent.appendChild(p2);

  li.appendChild(divQuantityWrapper);

  divQuantityWrapper.appendChild(buttonDecrease);

  buttonDecrease.appendChild(imgChevron1);

  divQuantityWrapper.appendChild(divQuantity);

  divQuantityWrapper.appendChild(buttonIncrease);

  buttonIncrease.appendChild(imgChevron2);

  li.appendChild(divSubtotal);

  ul.appendChild(li);

  buttonDecrease.onclick = () => {
    if (parseInt(item.count, 10) === 1) {
      ul.removeChild(li);

      addButton.classList.remove('in-cart');

      addButton.classList.add('add');

      addButton.removeChild(checkImage);

      const button = addButton;

      button.innerText = 'Add to cart';
    }

    const temp = item;
    temp.count -= 1;

    updatePrice();
    divQuantity.innerText = item.count;

    divSubtotal.innerText = `$${
      Math.round(item.count * item.price * 100) / 100
    }`;
  };

  buttonIncrease.onclick = () => {
    const temp = item;
    temp.count += 1;

    updatePrice();
    divQuantity.innerText = item.count;

    divSubtotal.innerText = `$${
      Math.round(item.count * item.price * 100) / 100
    }`;
  };

  updatePrice();
};

for (let i = 0; i < addToCart.length; i += 1) {
  const button = addToCart[i];

  button.onclick = () => {
    const item = menuItems[i];

    if (item.count === 0) {
      item.count = 1;

      button.classList.remove('add');

      button.classList.add('in-cart');

      const checkImage = document.createElement('img');

      checkImage.setAttribute('src', 'images/check.svg');

      checkImage.setAttribute('alt', 'check');

      button.innerText = 'In Cart';

      button.appendChild(checkImage);

      createItemOnRight(item, button, checkImage);
    }
  };
}
