// src/pages/Login.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., API call)
    console.log('Logged in:', formData);
    navigate('/dashboard'); // Navigate to dashboard after successful login
  };

  return (
    <div className="flex flex-col items-center pt-16 min-h-screen bg-primary-gradient">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-light mb-6 text-center">Log In</h2>
        
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
        />
        
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-full p-2 mb-6 border rounded" 
        />
        
        <button type="submit" className="w-full bg-btn-bg text-white py-2 rounded-lg hover:bg-btn-clicked">Log In</button>
        
        <p className="mt-4 text-center">
          Dont have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
