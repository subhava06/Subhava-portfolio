import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
// { text } from 'framer-motion/client';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/* Step 3: Add this flex container for text and image */}
      <div className="mt-4 flex flex-col md:flex-row gap-6 items-start">
        {/* Text content */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
        >
          I’m a 4th-year Computer Science & Engineering undergraduate at Dr. A.P.J. Abdul Kalam Technical University, passionate about creating impactful digital experiences. My core expertise lies in app development using Flutter, with Firebase and Firestore powering seamless backends.
          Alongside apps, I build interactive and modern web solutions with React.js and Three.js, blending functionality with creativity. I have a solid foundation in Data Structures & Algorithms and proficiency in Java, C, Python, Dart, JavaScript, HTML, and CSS.
          I also work with SQL, Vercel, Git/GitHub, and Figma, ensuring end-to-end delivery from idea to deployment. Outside tech, I enjoy playing football and the guitar, balancing problem-solving with creativity.
        </motion.p>

        {/* Step 4: Add this motion.div with the img tag for the photo */}
        <motion.div
          variants={fadeIn("left", "", 0.3, 1)} // Animation: fade in from left
          className="md:w-1/3 flex justify-center items-center"
        >
          <img
            src="/Pphoto.jpg" // Step 5: Reference the public folder path here (adjust if needed)
            alt="My Profile Photo"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg"
          />
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");