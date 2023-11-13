import { observable, action, makeObservable } from "mobx";
import { Phone, CartItem } from "../components/type";

class CartStore {
  items: CartItem[] = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      addToCart: action,
      removeFromCart: action,
    });
  }

  addToCart(product: Phone) {
    const existingCartItem = this.items.find(
      (item) => item.product.id === product.id
    );

    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
  }

  removeFromCart(product: Phone) {
    const existingCartItem = this.items.find(
      (item) => item.product.id === product.id
    );

    if (existingCartItem) {
      if (existingCartItem.quantity > 1) {
        existingCartItem.quantity--;
      } else {
        this.items = this.items.filter(
          (item) => item.product.id !== product.id
        );
      }
    }
  }

  get totalQuantity() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }
}

const cartStore = new CartStore();

export default cartStore;
