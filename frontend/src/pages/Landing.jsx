const Landing = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px 20px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <button
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          fontSize: '1em',
          backgroundColor: '#646cff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={() => window.location.href = '/auth'}
      >
        Sign In
      </button>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>Welcome to INVICTUS</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '40px' }}>Your ultimate productivity and learning platform</p>
      <button style={{
        padding: '8px 16px',
        fontSize: '0.9em',
        backgroundColor: '#646cff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '20px'
      }} onClick={() => window.location.href = '/auth'}>
        Get Started
      </button>
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ marginBottom: '20px' }}>View as Guest</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <button style={{
            padding: '12px 24px',
            fontSize: '1em',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }} onClick={() => window.location.href = '/dashboard'}>
            Student Dashboard
          </button>
          <button style={{
            padding: '12px 24px',
            fontSize: '1em',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }} onClick={() => window.location.href = '/mentor-dashboard'}>
            Mentor Dashboard
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', maxWidth: '300px' }}>
          <h3>Dashboard</h3>
          <p>Track your progress and manage your tasks</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', maxWidth: '300px' }}>
          <h3>Courses</h3>
          <p>Learn new skills with our comprehensive courses</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', maxWidth: '300px' }}>
          <h3>Focus</h3>
          <p>Stay focused and productive with our tools</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
