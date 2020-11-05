import React, { Component } from 'react';
import api from "../../services/api";

import "./styles.css";

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
    // Destructuring the state to get only our important data to us.
    const { products } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href="#">Acessar</a>
          </article>
        ))}
      </div>
    );
  }
}
