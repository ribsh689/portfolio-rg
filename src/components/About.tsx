import React from 'react';
import { motion } from 'framer-motion';
import profilePicture from '../assets/profile_picture.jpg'; // Adjust the path as necessary

const About: React.FC = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-2 items-center justify-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a dedicated frontend-heavy fullstack developer with over 3 years of experience building scalable
              and high-performing web applications. I specialize in technologies like React, Redux,
              JavaScript, HTML, and CSS, and I’m well-versed in modern styling tools such as Bootstrap
              and Tailwind CSS. I strive to develop clean, efficient interfaces that not only meet business
              goals but also provide outstanding user experiences.
            </p>

            <div className="pt-6">
              <motion.a
                href="/resume.pdf"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 place-items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.img
              src={profilePicture}
              alt="Rishabh Gupta"
              width={400}
              height={400}
              className="border border-stone-900 rounded-3xl"
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;