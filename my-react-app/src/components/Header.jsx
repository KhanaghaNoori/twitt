// src/components/Header.jsx
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Header = ({ onMenuClick }) => {
  const { searchQuery, setSearchQuery } = useContext(AppContext);

  return (
    <header style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #333', padding: '10px' }}>
      <button 
        onClick={onMenuClick}
        style={{ background: 'none', border: 'none', color: '#1d9bf0', fontSize: '1.5em', marginRight: '20px' }}
      >
        ☰
      </button>
      <h1 style={{ flexGrow: 1, fontSize: '1.5em', margin: 0 }}>Home</h1>
      <input
        type="text"
        placeholder="Search X"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          background: '#202327',
          border: 'none',
          borderRadius: '9999px',
          padding: '5px 15px',
          color: '#e7e9ea',
          width: '200px'
        }}
      />
    </header>
  );
};

export default Header;
