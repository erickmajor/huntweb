import React, { Component } from 'react';
import api from "../../services/api";

export default class Main extends Component {
  state = {
      products: []
  };

  // This method belongs to React
  componentDidMount() {
    this.loadProducts();
  }

  // Our methods: use arrow funtions to maintain "this" reference
  loadProducts = async () => {
    const response = await api.get('/products');

    this.setState({ products: response.data.docs });
  };

  // This method belongs to React
  render() {
    return (
      <div className="product-list">
        {this.state.products.map(product => (
          <h2 key={product._id}>{product.title}</h2>
        ))}
      </div>
    );
  }
}
