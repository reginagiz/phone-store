import { observable, action, makeObservable } from "mobx";
import { Phones } from "../components/type";

class GetAllProducts {
  data: Phones = [] as Phones;
  selectedColors: string[] = [];
  sortBy = "popularity";
  sortDirection = "asc";

  constructor() {
    makeObservable(this, {
      data: observable,
      selectedColors: observable,
      fetchData: action,
      filterByColor: action,
      sortByPopularity: action,
      sortByPrice: action,
      setSortDirection: action,
      sortData: action,
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

  filterByColor = (color: string) => {
    if (this.selectedColors.includes(color)) {
      this.selectedColors = this.selectedColors.filter((c) => c !== color);
    } else {
      this.selectedColors = [...this.selectedColors, color];
    }
  };

  sortByPopularity = () => {
    this.sortBy = "popularity";
    this.sortDirection = "desc";
    this.sortData();
  };

  toggleSortDirection = () => {
    this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    this.sortData();
  };

  sortByPrice = () => {
    if (this.sortBy === "price") {
      this.toggleSortDirection();
    } else {
      this.sortBy = "price";
      this.sortData();
    }
  };

  setSortDirection = (direction: string) => {
    this.sortDirection = direction;
    this.sortData();
  };

  sortData() {
    if (this.sortBy === "popularity") {
      this.data = this.sortDataByPopularity(this.data);
    } else if (this.sortBy === "price") {
      this.data = this.sortDataByPrice(this.data);
    }
  }

  sortDataByPopularity(data: Phones) {
    return data.slice().sort((a, b) => b.popularity - a.popularity);
  }

  sortDataByPrice(data: Phones) {
    return data.slice().sort((a, b) => {
      if (this.sortDirection === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }
}

const store = new GetAllProducts();

export default store;
