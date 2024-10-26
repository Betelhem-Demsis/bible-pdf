import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Store username in local storage
    localStorage.setItem('username', formData.username);
    
    // Navigate to login page
    navigate('/login');
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
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-2 mb-4 border rounded" 
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-full p-2 mb-6 border rounded" 
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        
        <button type="submit" className="w-full bg-btn-bg text-white py-2 rounded-lg hover:bg-btn-clicked">Sign Up</button>
        
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
