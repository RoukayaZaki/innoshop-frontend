import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./../../assets/css/filters.css";

const Filters = ({ onSort }) => {
  const [sortOption, setSortOption] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    setIsAdmin(role === 'admin');
  }, []);

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    onSort(event.target.value, minPrice, maxPrice);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
    onSort(sortOption, event.target.value, maxPrice);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
    onSort(sortOption, minPrice, event.target.value);
  };

  const handleAdminButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const MyVerticallyCenteredModal = (props) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState('');

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setImage(file);
    };

    const handlePriceChange = (event) => {
      setPrice(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here (e.g., send data to the server)
      // You can access the name, image, and price values in the respective state variables (name, image, price)
      // Reset the form or close the modal after submission
      setName('');
      setImage(null);
      setPrice('');
      props.onHide();
    };

    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={handleNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Image:</Form.Label>
              <Form.Control
                type="file"
                onChange={handleImageChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={handlePriceChange}
              />
            </Form.Group>
            <Button variant="primary" type="submititem">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };


  return (
    <div className="sidebar">
      <h2>Filters</h2>

      <h3>Date</h3>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="datefilter"
              value="Newest First"
              checked={sortOption === 'Newest First'}
              onChange={handleSortOptionChange}
            />{' '}
            Newest First
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="datefilter"
              value="Newest Last"
              checked={sortOption === 'Newest Last'}
              onChange={handleSortOptionChange}
            />{' '}
            Newest Last
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="datefilter"
              value="Cheapest First"
              checked={sortOption === 'Cheapest First'}
              onChange={handleSortOptionChange}
            />{' '}
            Cheapest First
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="datefilter"
              value="Cheapest Last"
              checked={sortOption === 'Cheapest Last'}
              onChange={handleSortOptionChange}
            />{' '}
            Cheapest Last
          </label>
        </li>
      </ul>

      <h3>Price Range</h3>
      <div className="price-range">
        <select name="min-price" value={minPrice} onChange={handleMinPriceChange}>
          <option value="0">Min</option>
          <option value="500">500 R</option>
          <option value="1000">1000 R</option>
          <option value="2000">2000 R</option>
        </select>
        <select name="max-price" value={maxPrice} onChange={handleMaxPriceChange}>
          <option value="100000000">Max</option>
          <option value="500">500 R</option>
          <option value="1000">1000 R</option>
          <option value="2000">2000 R</option>
        </select>
      </div>
      <br />
      <h2>Admin</h2>
      {isAdmin && (
        <button onClick={handleAdminButtonClick} className='sign-in-button'>Add item</button>
      )}
      {showModal && (
        <MyVerticallyCenteredModal
          show={showModal}
          onHide={handleModalClose}
        />
      )}
    </div>
  );
};

export default Filters;
