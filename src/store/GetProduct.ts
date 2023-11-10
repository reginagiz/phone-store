import { observable, action, makeObservable } from "mobx";
import { Phone } from "../components/type";

class GetProduct {
  data: Phone = {} as Phone;

  constructor() {
    makeObservable(this, {
      data: observable,
      fetchData: action,
    });
  }

  fetchData = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`);
      const data = await response.json();
      this.data = data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
}

const product = new GetProduct();

export default product;
