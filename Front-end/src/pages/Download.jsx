import { FiDownload } from "react-icons/fi";

const Download = () => {
  return (
    <div className="relative w-full h-full">
      {/* Image Above - Left Side */}
      <div className="absolute text-center top-12 left-48">
      <h5 className="mb-5 text-5xl font-bold text-gray-900">Read the Bible Anytime, Anywhere</h5>
    <p className="mb-3 text-gray-500 text-xl ">Access the Holy Scriptures on the go with our app. Stay connected to Gods word wherever you are. 
      </p><p className="mb-5 text-2xl text-gray-500 ">Download now and start reading!</p>
      </div>
      <h5 className="absolute top-56 left-24 text-4xl font-bold text-gray-900 flex items-center">
  Get it on iOS & Android <FiDownload className="ml-2" />
</h5>

      <img
        src="public/playstore.png" // Replace with the actual image path
        alt="Above Image"
        className="absolute top-48 left-24 w-64 h-64 object-contain"
      />
      <img
        src="public/apple.png" // Replace with the actual image path
        alt="Below Image"
        className="absolute bottom-12 left-24 w-64 h-64 object-contain"
      />
      {/* Main Bible Image - Centered */}
      <div className="flex justify-end">
        <div className="w-full max-w-3xl h-auto">
          <img
            src="public/bible.png"
            alt="Bible"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      
    </div>
  );
};

export default Download;
