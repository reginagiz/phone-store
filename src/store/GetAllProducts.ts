import { observable, action, makeObservable } from "mobx";

class GetAllProducts {
  data = [];

  constructor() {
    makeObservable(this, {
      data: observable,
      fetchData: action,
    });
  }

  fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      this.data = data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
}

const store = new GetAllProducts();

export default store;
