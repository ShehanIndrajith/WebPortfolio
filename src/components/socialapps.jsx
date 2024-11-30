import React from 'react'
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";


const SocialIcon = ({ Icon, url }) => {
    const handleClick = () => {
      window.open(url, "_blank");
    };
    
    return (
      <motion.div
        whileHover={{ scale: 1.2 }} // Animation for scaling on hover
        whileTap={{ scale: 0.9 }} // Animation on click
        className="flex justify-center items-center" // Added margin between icons
        onClick={handleClick}
      >
        <Icon className="size-8 hover:text-indigo-600 transition-colors text-gray-200 hover:cursor-pointer" />
      </motion.div>
    );
  };
  SocialIcon.propTypes = {
    Icon: PropTypes.elementType.isRequired, // Ensures 'Icon' is a valid React component
    url: PropTypes.string.isRequired, // Ensures 'url' is a string
  };
function socialapps() {
  return (
    <motion.div animate={{
      x: [0, -600, 0],
      transition: { ease: ["easeIn", "easeOut"] }
    }}
    className='flex flex-col rounded-full items-center justify-center px-4 space-y-2 backdrop-blur-sm bg-black/5 hover:bg-white/5 w-12 h-64 mx-auto fixed top-16 transition-transform duration-500 '>
      <SocialIcon
        Icon={FaFacebookSquare}
        url="https://www.facebook.com/profile.php?id=100090037665318"
      />
      <SocialIcon Icon={FaGithubSquare} url="https://github.com/ShehanIndrajith" />
      <SocialIcon Icon={IoLogoLinkedin} url="www.linkedin.com/in/shehan-indrajith-47b512216" />
      <SocialIcon
        Icon={FaInstagramSquare}
        url="https://www.instagram.com/___shehanindrajith___/"
      />
      <SocialIcon Icon={AiFillTikTok} url="https://www.tiktok.com/@shehan.indrajith?_r=1&_d=ef75digm9ml58h&sec_uid=MS4wLjABAAAABun1eLGsQD8dr9bSKd7ixRgOE33HWO4ocv_MUR9pFOOYl4W8X2a0sjPVVlEzSlqu&share_author_id=7299060582195512338&sharer_language=en&source=h5_m&u_code=eb1cmdm0ke89e4&ug_btm=b8727,b0&social_share_type=4&utm_source=copy&sec_user_id=MS4wLjABAAAABun1eLGsQD8dr9bSKd7ixRgOE33HWO4ocv_MUR9pFOOYl4W8X2a0sjPVVlEzSlqu&tt_from=copy&utm_medium=ios&utm_campaign=client_share&enable_checksum=1&user_id=7299060582195512338&share_link_id=7AA0B1C7-3CE2-49EA-B2B1-F3AB4CE56CDC&share_app_id=1233" />
      <SocialIcon Icon={FaYoutube} url="https://www.youtube.com/@shehanindrajith971" />
    </motion.div>
  );
}

export default socialapps
