import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState('student'); // 'student' or 'mentor'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (isSignUp) {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }

      try {
        await apiService.register(email, password, userType);
        setIsSignUp(false); // Switch to signin mode
      } catch (error) {
        setError(error.message);
      }
    } else {
      try {
        const data = await apiService.login(email, password, userType);
        if (data.user.onboarded || data.user.user_type === 'mentor') {
          const dashboardRoute = data.user.user_type === 'mentor' ? '/mentor-dashboard' : '/dashboard';
          setRedirecting(true);
          setTimeout(() => {
            navigate(dashboardRoute);
          }, 2000);
        } else {
          navigate('/onboarding');
        }
      } catch (error) {
        setError(error.message);
      }
    }

    setLoading(false);
  };

  const handleGoogleAuth = async () => {
    setError('');
    setLoading(true);

      try {
        await apiService.googleAuth(userType);
        navigate('/onboarding');
      } catch (error) {
        setError(error.message);
      }

    setLoading(false);
  };

  const handleGithubAuth = async () => {
    setError('');
    setLoading(true);

      try {
        await apiService.githubAuth(userType);
        navigate('/onboarding');
      } catch (error) {
        setError(error.message);
      }

    setLoading(false);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
          {isSignUp ? 'Create Account' : 'Sign In'}
        </h2>

        {error && (
          <div style={{
            color: 'red',
            marginBottom: '20px',
            textAlign: 'center',
            padding: '10px',
            backgroundColor: '#ffe6e6',
            borderRadius: '5px'
          }}>
            {error}
          </div>
        )}

        {redirecting && (
          <div style={{
            color: 'green',
            marginBottom: '20px',
            textAlign: 'center',
            padding: '10px',
            backgroundColor: '#e6ffe6',
            borderRadius: '5px'
          }}>
            Redirecting please wait...
          </div>
        )}

        {/* User Type Selection */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>I am a:</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="radio"
                name="userType"
                value="student"
                checked={userType === 'student'}
                onChange={(e) => setUserType(e.target.value)}
                style={{ marginRight: '5px' }}
              />
              Student
            </label>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="radio"
                name="userType"
                value="mentor"
                checked={userType === 'mentor'}
                onChange={(e) => setUserType(e.target.value)}
                style={{ marginRight: '5px' }}
              />
              Mentor
            </label>
          </div>
        </div>

        {/* Social Auth Buttons */}
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={handleGoogleAuth}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#db4437',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            <span style={{ fontSize: '18px' }}>🌐</span>
            {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
          </button>
          <button
            onClick={handleGithubAuth}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            <span style={{ fontSize: '18px' }}>🐙</span>
            {isSignUp ? 'Sign up with GitHub' : 'Sign in with GitHub'}
          </button>
        </div>

        <div style={{ textAlign: 'center', margin: '20px 0', color: '#666' }}>
          or
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px'
              }}
            />
          </div>
          {isSignUp && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '16px'
                }}
              />
            </div>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            style={{
              background: 'none',
              border: 'none',
              color: '#007bff',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
