import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Search() {
  const [workers, setWorkers] = useState([]);
  const [filters, setFilters] = useState({ category: '', location: '' });

  useEffect(() => {
    const mockWorkers = [
      { id: 1, name: 'John Electrician', category: 'Electrician', location: 'New York', rating: 4.5, verified: true },
      { id: 2, name: 'Sarah Plumber', category: 'Plumber', location: 'Los Angeles', rating: 4.8, verified: true },
      { id: 3, name: 'Mike Mechanic', category: 'Mechanic', location: 'Chicago', rating: 4.3, verified: false },
      { id: 4, name: 'Lisa Tutor', category: 'Tutor', location: 'New York', rating: 4.9, verified: true }
    ];
    
    let filtered = mockWorkers;
    if (filters.category) filtered = filtered.filter(w => w.category === filters.category);
    if (filters.location) filtered = filtered.filter(w => w.location.toLowerCase().includes(filters.location.toLowerCase()));
    setWorkers(filtered);
  }, [filters]);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Find Skilled Workers</h1>
      
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label className="form-label">Category</label>
            <select className="form-input" value={filters.category} 
              onChange={(e) => setFilters({...filters, category: e.target.value})}>
              <option value="">All Categories</option>
              <option value="Electrician">Electrician</option>
              <option value="Plumber">Plumber</option>
              <option value="Mechanic">Mechanic</option>
              <option value="Tutor">Tutor</option>
            </select>
          </div>
          <div>
            <label className="form-label">Location</label>
            <input type="text" className="form-input" placeholder="Enter location" 
              value={filters.location} onChange={(e) => setFilters({...filters, location: e.target.value})} />
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {workers.map(worker => (
          <div key={worker.id} className="card">
            <h3>{worker.name} {worker.verified && '✓'}</h3>
            <p><strong>Category:</strong> {worker.category}</p>
            <p><strong>Location:</strong> {worker.location}</p>
            <p><strong>Rating:</strong> ⭐ {worker.rating}</p>
            <Link to={`/workers/${worker.id}`}>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>View Profile</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
