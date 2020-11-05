import React, { Component } from 'react';
import api from "../../services/api";

export default class Main extends Component {
  // This method belongs to React
  componentDidMount() {
    this.loadProducts();
  }

  // Our methods: use arrow funtions to maintain "this" reference
  loadProducts = async () => {
    const response = await api.get('/products');

    console.log(response.data.docs);
  };

  // This method belongs to React
  render() {
    return <h1>Hello Rocketseat</h1>;
  }
}
