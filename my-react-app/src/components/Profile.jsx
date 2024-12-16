// src/components/Profile.jsx
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Profile = () => {
  const { user } = useContext(AppContext);
  return (
    <aside style={{ width: '200px', borderLeft: '1px solid #ddd', padding: '10px' }}>
      <img src={user.avatar} alt="User avatar" style={{ borderRadius: '50%' }} />
      <h3>{user.name}</h3>
      <p>{user.handle}</p>
    </aside>
  );
};

export default Profile;
