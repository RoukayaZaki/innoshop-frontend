import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react'


const Product = (props) => {

    const { product } = props;

    const imgStr = 'http://localhost:3001/503.jpg';
    return (
        <div class="col-sm">
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={imgStr} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        Price: {product.price}
                    </Card.Text>
                    <Button variant="primary">View it!</Button>
                </Card.Body>
            </Card>
        </div>
    );
}


const Products = () => {

    const [products, setProducts] = useState([])
    const [newProduct, setNewProduct] = useState('')
    const [showAll, setShowAll] = useState(true)


    useEffect(() => {
        console.log('Products loading....')
        axios
            .get('http://localhost:3001/api/v1/products?limit=6')
            .then(response => {
                const receivedProducts = response.data.data.products
                setProducts(receivedProducts);
            })
    }, []);

    console.log(products);

    return (
        <div class="container">
            <div class="row justify-content-start">
                {products.map(product => <Product product={product} />)}
            </div>
        </div>
    );
}

export default Products;