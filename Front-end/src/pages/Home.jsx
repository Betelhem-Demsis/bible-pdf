import Heading from "../components/Heading";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-poppins">
      <Heading />
      <div className="bg-secondary-gradient text-center pt-5">
        <p className="text-2xl">Start Your Journey today! Read the full text of the new testament Bible in Amharic.</p>
        <h2 className="font-bold text-4xl py-5">Get a free bible for your phone and tablet</h2>
        <p className="text-xl pb-5">
        <Link to="/download">Scan to install the app</Link></p>
        
        <p className="text-xl pb-5">
          <Link to="/dashboard" className="text-btn-clicked hover:text-btn-bg underline">Or Read the Bible online</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
