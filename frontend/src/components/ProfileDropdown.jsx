import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const ProfileDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    apiService.logout();
    navigate('/');
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.2em',
          padding: '5px'
        }}
      >
        👤
      </button>
      {showDropdown && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          backgroundColor: 'white',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          borderRadius: '5px',
          padding: '10px',
          minWidth: '150px',
          zIndex: 1001
        }}>
          <div style={{ padding: '8px 0', cursor: 'pointer', borderBottom: '1px solid #eee' }}>Edit Profile</div>
          <div style={{ padding: '8px 0', cursor: 'pointer', borderBottom: '1px solid #eee' }}>Change Theme</div>
          <div style={{ padding: '8px 0', cursor: 'pointer' }} onClick={handleSignOut}>Sign Out</div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
