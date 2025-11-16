const MentorDashboard = () => {
  return (
    <div style={{
      padding: '20px',
      minHeight: '80vh'
    }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Mentor Dashboard</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2>My Students</h2>
          <p>View and manage your students' progress.</p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2>Sessions</h2>
          <p>Schedule and manage mentoring sessions.</p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2>Resources</h2>
          <p>Share learning materials and resources.</p>
        </div>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2>Analytics</h2>
          <p>Track student performance and engagement.</p>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
