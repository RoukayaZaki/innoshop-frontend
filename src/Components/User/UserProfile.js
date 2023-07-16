import {useEffect, useState} from 'react';
import "./../../assets/css/userprofile.css";
import profilePicture from './../../assets/avatar.jpg';


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
      <div className="col-4 right-panel">
        <div className="panel user-info">
          <div className="profile-picture">
            <img src={profilePicture} alt="Profile" />
          </div>
          <h2 id='h22'>{user.name}</h2>
          <p>{user.email}</p>
          {/* <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p> */}
          <button className="edit-profile-button">Edit Profile</button>
        </div>
      </div>
      <div className="col-6 left-panel">
        <div className="panel order-history">
          <h2>Order History</h2>
          <div className= "scrollable-content1">
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
      </div>
      
    </div>
  );
}

export default UserProfilePage;
