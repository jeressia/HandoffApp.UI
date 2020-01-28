import React, { Component } from 'react';
import './ProductCard.scss';

export class ProductCard extends Component {
  render() {
    const { product } = this.props;

    return (
            <div className="ProductCard">
                <div className="myCard">
                    <img src={product.productImageUrl} alt={product.productName} className="productImage"/>
                    <p className="card-title">{product.productName}</p>
                    <p className="card-text">{product.productDescription}</p>
                </div>
            </div>
    );
  }
}

export default ProductCard;
