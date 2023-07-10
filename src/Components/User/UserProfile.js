import {useEffect, useState} from 'react';
import "./../../assets/css/userprofile.css";
import profilePicture from './../../assets/innou-logo 3.png';


const UserProfilePage = () => {

  const [user, setUserData] = useState({});
  const tokenString = localStorage.getItem('token');
  const user_id = localStorage.getItem('current_user_id');
  const headers = { 'Authorization': 'Bearer ' + tokenString };

  useEffect(() => {
    const url = `http://localhost:3001/api/v1/users/${user_id}`;

    fetch(url, { headers })
      .then(response => response.json())
      .then(data => {
        setUserData(data.data.user);
        localStorage.setItem('role', data.data.user.role);
        console.log(data.data.user);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  return (
    <div className="user-profile">
      <div className="left-panel">
        <div className="panel order-history">
          <div className= "scrollable-content1">
          <h2>Order History</h2>
          <ul>
            <li>Order #123</li>
            <li>Order #567</li>
            <li>Order #910</li>
            <li>Order #1111</li>
            <li>Order #2222</li>
            <li>Order #3333</li>
          </ul>
        </div>
        </div>
        {/* <div className="panel whats-new">
          <h2>What's New</h2>
          <div className="scrollable-content">
            <Products />
          </div>
        </div> */}
      </div>
      <div className="right-panel">
        <div className="panel user-info">
          <div className="profile-picture">
            <img src={profilePicture} alt="Profile" />
          </div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          {/* <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p> */}
          <button className="edit-profile-button">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
