import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./../../assets/css/filters.css";


async function addItem(credentials) {
  return fetch('http://localhost:3001/api/v1/products/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
};


async function addImage(formdata) {
  return fetch('http://localhost:3001/api/v1/products/upload', {
    method: 'POST',
    processData: false,
    contentType: false,
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
    body: formdata
  })
    .then(data => data.json())
};



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
    const [type, setType] = useState('');
    const [hasSizes, setHasSizes] = useState(false);
    const [sizes, setSizes] = useState([]);

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleImageChange = (e) => {
      const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      }
      setImage(img);

    };

    const handlePriceChange = (event) => {
      setPrice(event.target.value);
    };

    const handleTypeChange = (event) => {
      setType(event.target.value);
    };

    const handleSizeChange = (event) => {
      const { value, checked } = event.target;
      if (checked) {
        setSizes([...sizes, value]);
      } else {
        setSizes(sizes.filter((size) => size !== value));
      }
    };
    const handleSubmit = async (event) => {
      event.preventDefault();

      if (!name || !price || !image || !type) {
        alert('Please add all the fields');
        return;
      }

      let varieties = [];

      if (hasSizes) {
        sizes.forEach((ele) => {
          let data = {};
          data.amount = 0;
          data.color = null;
        });
      }

      const response = await addItem({
        name,
        price,
        type,
        varieties
      });

      console.log(response);

      if (response.status === 'success') {
        window.alert('Item added successfully!');
        window.location.reload();
      }
      else {
        window.alert('Something went wrong: ' + response.message);
      }

      let formData = new FormData()
      formData.append('image', image.data);

      console.log(formData);

      const imgResponse = await addImage(formData);

      console.log(imgResponse);

      if (imgResponse.status === 'success') {
        window.alert('Image added successfully!');
      }
      else {
        window.alert('Something went wrong: ' + imgResponse.message);
      }

      setName('');
      setImage(null);
      setPrice('');
      setType('');
      setSizes([]);
      props.onHide();

    };
    const handleHasSizesChange = (event) => {
      setHasSizes(event.target.checked);
      if (!event.target.checked) {
        setSizes([]);
      }
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
              <Form.Control type="text" placeholder="Enter name" value={name} onChange={handleNameChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Image:</Form.Label>
              <Form.Control type="file" name="image" onChange={handleImageChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Price:</Form.Label>
              <Form.Control type="text" placeholder="Enter price" value={price} onChange={handlePriceChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Type:</Form.Label>
              <Form.Select aria-label="Default select example" value={type} onChange={handleTypeChange}>
                <option>Select type</option>
                <option value="sweatshirt">sweatshirt</option>
                <option value="T-shirt">T-shirt</option>
                <option value="bag">bag</option>
                <option value="notepad">notepad</option>
                <option value="meal">meal</option>
                <option value="hat">hat</option>
                <option value="gloves">gloves</option>
                <option value="accommodation">accommodation</option>
                <option value="bottle">bottle</option>
                <option value="mug">mug</option>
                <option value="accessories">accessories</option>
                <option value="cap">cap</option>
                <option value="T-Shirt">T-Shirt</option>
                <option value="game">game</option>
                <option value="service">service</option>
                <option value={null}>null</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Check
                type="checkbox"
                label="Has Sizes"
                checked={hasSizes}
                onChange={handleHasSizesChange}
              />
              {hasSizes && (
                <div>
                  <Form.Label>Sizes:</Form.Label>
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="XS"
                      value="XS"
                      checked={sizes.includes('XS')}
                      onChange={handleSizeChange}
                    />
                    <Form.Check
                      type="checkbox"
                      label="S"
                      value="S"
                      checked={sizes.includes('S')}
                      onChange={handleSizeChange}
                    />
                    <Form.Check
                      type="checkbox"
                      label="M"
                      value="M"
                      checked={sizes.includes('M')}
                      onChange={handleSizeChange}
                    />
                    <Form.Check
                      type="checkbox"
                      label="L"
                      value="L"
                      checked={sizes.includes('L')}
                      onChange={handleSizeChange}
                    />
                    <Form.Check
                      type="checkbox"
                      label="XL"
                      value="XL"
                      checked={sizes.includes('XL')}
                      onChange={handleSizeChange}
                    />
                  </div>
                </div>
              )}
            </Form.Group>
            <Button variant="primary" className="submit-item" type="submit">
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

      <h3>Sort</h3>
      <ul className='radio-buttons'>
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
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
        </select>
        <select name="max-price" value={maxPrice} onChange={handleMaxPriceChange}>
          <option value="100000000">Max</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
        </select>
      </div>
      <br />

      {isAdmin && (
        <div>
          <h2>Admin</h2>
          <button onClick={handleAdminButtonClick} className='add-item-btn'>Add item</button>
        </div>
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
