import Typical from 'react-typical';

const Heading = () => {
  return (
    <div className="bg-primary-gradient">
      <div className="container mx-auto flex justify-center items-center">
        {/* Logo and Text Container */}
        <div className="flex items-center sm:space-x-4 space-x-2 p-2 sm:p-0">
          {/* Logo */}
          <img src="public/logo2.png" alt="Hiyaw Kal Logo" className="w-20 sm:w-auto" /> {/* Adjust logo size for smaller screens */}

          {/* Text Section */}
          <div className="sm:text-center pt-6 pb-4 sm:px-8 sm:py-6">
            {/* Heading Text */}
            <h1 className="text-2xl sm:text-6xl font-semibold text-white pb-2 sm:pb-3 font-serif">
              {/* Increased step duration for slower typing effect */}
              <Typical steps={['WELCOME TO HIYAW KAL', 8000]} loop={1} />
            </h1>

            {/* Subheading Text */}
            <p className="text-xl sm:text-3xl text-white mt-1 sm:mt-2 font-serif">
              YOUR BIBLE COMPANION IN AMHARIC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
