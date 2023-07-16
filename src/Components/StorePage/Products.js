import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Trash } from 'react-bootstrap-icons';
import "./../../assets/css/product-card.css"

async function deleteItem(id) {
    return fetch(`http://localhost:3001/api/v1/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }
    })
  };

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
    const imgStr = 'https://ipts.innopolis.university/api/v1/file/' + product.varieties[0].images[0];

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const role = localStorage.getItem('role');
        setIsAdmin(role === 'admin');
    }, []);

    const handleDelete = async () => {
        try {
            // Make the delete request using axios or your preferred HTTP library
            // await axios.delete(`/api/products/${product.id}`);
            await deleteItem(product._id.toString());
        } catch (error) {
            // Handle error cases
            console.log(error);
        }

    };

    return (
        <div className="col-xl">
            <Card style={{ width: '22rem', height:'33rem', margin: '0.5rem 0' }}>
                <Card.Img variant="top" src={imgStr} />
                <Card.Body className='bottom-of-card'>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        Price: {product.price}
                    </Card.Text>
                    <div className='veiw-item' >
                        <Link to={'/product/' + product._id.toString()}>
                            <Button id="button-btn" variant="primary">View it!</Button>
                        </Link>
                        {isAdmin && (
                            <Trash onClick={handleDelete} color='darkred' size={30} />
                            // <Button variant="danger" onClick={handleDelete}>
                            //     Delete
                            // </Button>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

const Products = ({ products }) => {
    return (
        <div className="container">
            <div className="row justify-content-start">
                {products.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
