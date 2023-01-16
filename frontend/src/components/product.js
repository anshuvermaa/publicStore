import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} className='img' variant='top' />
      </Link>

      <Card.Body>
        <Link style={{textDecoration: 'none'}} to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong className='text'>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'><strong><span>&#8377;</span>{Math.floor(product.price)}</strong></Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
