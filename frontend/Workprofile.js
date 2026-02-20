import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function WorkerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const worker = {
    id: parseInt(id),
    name: 'John Electrician',
    category: 'Electrician',
    location: 'New York',
    rating: 4.5,
    experience: 5,
    phone: '123-456-7890',
    verified: true
  };

  return (
    <div className="container" style={{ maxWidth: '800px', marginTop: '2rem' }}>
      <div className="card">
        <h1>{worker.name} {worker.verified && '✓'}</h1>
        <div style={{ marginTop: '2rem' }}>
          <p><strong>Category:</strong> {worker.category}</p>
          <p><strong>Location:</strong> {worker.location}</p>
          <p><strong>Experience:</strong> {worker.experience} years</p>
          <p><strong>Rating:</strong> ⭐ {worker.rating}</p>
          <p><strong>Phone:</strong> {worker.phone}</p>
        </div>
        <button className="btn btn-primary" style={{ marginTop: '2rem' }} 
          onClick={() => navigate(`/book/${worker.id}`)}>
          Book This Worker
        </button>
      </div>
    </div>
  );
}

export default WorkerProfile;
