import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react'
import  "./../../assets/css/products.css"

/**
 * @typedef {Object} Variety
 * @property {number} id
 * @property {number} amount The available amount of this variety
 * @property {number[]} images
 * @property {number} purchases
 * 
 */
/**
 * @typedef {Object} Product
 * @property {number} id The unique identifier of the product
 * @property {string} name
 * @property {number} price
 * @property {Variety[]} varieties
 */


/**
 * 
 * @param {Object} props
 * @param {Product} props.product  
 * @returns 
 */
const Product = (props) => {
    const { product } = props;
    const [isZoomed, setIsZoomed] = useState(false);
    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };
    const imgStr = 'https://ipts.innopolis.university/api/v1/file/' + product.varieties[0].images[0];
    // const handleLinkClick = () => {
    //     handleClick('View Item');
    //   };
    return (
        <div class="col-sm">
            <Card style={{ width: '18rem', margin: '10px', cursor: 'pointer', }}
             onMouseEnter={toggleZoom}
             onMouseLeave={toggleZoom}>
                <Card.Img variant="top" src={imgStr} style={{
                        transform: isZoomed 
                            ? 'scale(1.2)' 
                            : 'scale(1)',
                        transition: 'transform 0.3s ease',}} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        Price: {product.price}
                    </Card.Text>
                    <Link to={'/product/' + product._id.toString()} >
                        <Button variant="primary" >View it!</Button>
                    </Link>
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
            .get('http://localhost:3001/api/v1/products?limit=12')
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
