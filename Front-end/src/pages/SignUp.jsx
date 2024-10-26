// src/pages/SignUp.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-up logic here (e.g., API call)
    console.log('Form Submitted:', formData);
    navigate('/dashboard'); // Navigate to dashboard after successful sign-up
  };

  return (
    <div className="flex flex-col items-center pt-12 min-h-screen bg-primary-gradient">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-light mb-6 text-center">Sign Up</h2>
        
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={formData.username} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
        />
        
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
        
        <button type="submit" className="w-full bg-btn-bg text-white py-2 rounded-lg hover:bg-btn-clicked">Sign Up</button>
        
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
