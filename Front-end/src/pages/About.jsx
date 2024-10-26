import Heading from "../components/Heading";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";




const About = () => {
  return (
    <>
    <div className="bg-primary-gradient">
        <Heading/>
        <div className="font-poppins text-xl text-center text-white font-light pt-6 pb-4 px-8">
        <p className="pb-2">Hiyaw Kal was created with the goal of making the Word of God accessible to all, in the language of their choice.</p>
        <p>Our team is dedicated to providing a seamless and user-friendly experience for all users. Our app </p>
           <p className="pb-2">features the full text of the New Testament Bible in Amharic, along with tools for easy navigation.</p>
           
           <p>At Hiyaw Kal, we believe that the Bible has the power to transform live s, and we are committed to spreading its 
           <p> message to as many people as possible. If you have any questions or feedback, please don't hesitate to reach</p> 
           <p>out to us at.</p> 
           </p>
    </div></div>
    <div className="bg-white text-center max-w-md mx-auto mt-10 px-24">
      {/* Email Section */}
      <div className="flex items-center space-x-4 mb-4">
        <MdEmail className="text-btn-bg text-2xl" />
        <div>
          <a href="boazict@gmail.com" className="text-black font-medium">
          boazict@gmail.com
          </a>
          <br />
          <a href="eyosimar524@gmail.com" className="text-black font-medium">
          eyosimar524@gmail.com
          </a>
        </div>
      </div>

      {/* Phone Section */}
      <div className="flex items-center space-x-4 mb-4">
        <MdPhone className="text-btn-bg text-2xl" />
        <a href="tel:+251911086178" className="text-black font-medium">
          + (251) 911-086-178
        </a>
      </div>

      {/* LinkedIn Section */}
      <div className="flex items-center space-x-4">
        <FaLinkedin className="text-btn-bg text-2xl" />
        <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-black font-medium">
         Connect with us on LinkedIn
        </a>
      </div>
    </div>
    <p className="text-center font-normal font-serif mt-6 mb-5 text-black text-2xl">Thank you for choosing Hiyaw Kal, and may God bless your journey.</p>
    </>
  );
};

export default About;
