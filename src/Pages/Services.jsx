import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const navigate = useNavigate();

  const handleImageClick = (location) => {
    navigate('/all-cards', { state: { location } });
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 bg-white mb-16 w-full">
      {/* Title and Subtitle */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-[#286181] mb-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        Top Locations in India
      </motion.h1>

      <motion.h3
        className="text-lg md:text-xl text-[#286181] text-center mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
      >
        Find your service at your location
      </motion.h3>

      {/* Locations Section */}
      <motion.div
        className="w-full max-w-6xl grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 py-6 px-4 border-2 border-[#286181] rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {['Delhi', 'Mumbai', 'Pune', 'Chennai', 'Kolkata', 'Delhi', 'Mumbai', 'Pune', 'Chennai', 'Kolkata','Delhi', 'Mumbai', 'Pune', 'Chennai', 'Kolkata','Delhi', 'Mumbai', 'Pune', 'Chennai', 'Kolkata'].map((city) => (
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handleImageClick(city)}
            key={city}
          >
            <img
              src="https://i.pinimg.com/564x/61/49/60/6149600e89247cebe96fdd5ca0997230.jpg"
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg transition-transform transform hover:scale-105"
              alt={city}
            />
            <h1 className="mt-2 text-sm md:text-lg text-[#286181]">{city}</h1>
          </div>
        ))}
      </motion.div>
      <div className='flex flex-col gap-5 items-center justify-center px-6 py-8'>
        <div className='text-center w-3/4 md:w-3/4'>
          <h1>What Makes Call Girls in Bangalore CGKeech Special?</h1>
          <p>Cgkeech.com is trusted by many people around Bangalore, CGKeech serves a large client base across every city in India, fulfilling all expectations of needed from Call girls with affordable rates and sensational pleasures
            Don’t wait! Go after what you want right now. Check out what is available in your area. Look for the services that sound good to you. You can find a Call girls in Bangalore who can help make your dreams come true. It is easy to pick what you like and book a time. Enjoy every moment and have fun. Life is short, so don’t hold back! Make a choice and go for it. You'll feel great when you fulfill your desires. So, take a step today and start your exciting adventure. Happiness is just a booking away!
          </p>
        </div>

        <div className='text-center w-3/4 md:w-3/4'>
          <h1>Can I request role-playing or other erotic scenarios?</h1>
          <p>You can expect all your fantasies to come true, whether you want roleplaying or soft sex that goes on harder with time and lasts all night, expect everything you want with call girls near Bangalore your location that can give you the best service as per your desires.
          Have fun, relax, and enjoy everything you ask for. It’s all about your pleasure and making your nights exciting. Don’t wait—let us help you find the perfect match for your wishes!
          </p>
        </div>

        <div className='text-center w-3/4 md:w-3/4'>
          <h1>Can I book two or more call girls Bangalore at the same time?</h1>
          <p>Yes , you can book more that one call girl Bangalore and enjoy a heavy threesome , foursome experience where the only aim of call girls is to make you feel satisfied , have all kind of sex you want let it be anal , vaginal , pegging etc, call girls of all specialized fields to help you with that so that you don’t sleep without getting your dreams fulfilled.
          </p>
        </div>

        <div className='text-center w-3/4 md:w-3/4'>
          <h1>Where to find affordable call girls in Bangalore?</h1>
          <p>At Cgkeech, you can find call girls of all range , no matter if you don’t have enough money to afford a high paying girl , we offer a large range of catalogue of Bangalore call girls and agencies for you to book that will come in your budget , and you will have a memorable experience at that . 
          </p>
        </div>

        <div className='text-center w-3/4 md:w-3/4'>
          <h1>Can I find genuine and good Bangalore call girl here?</h1>
          <p>We host profiles of  all the Bangalore call girl from novice to advance , you can have beginner call girl and be one of the first ones to teach her all her way to mastery of sexual pleasures or you can have our advance call girls give you the best time in sex you ever had with girls, they will have sex until you are free from your senses and then you will know what is the real meaning of sex. 
          </p>
        </div>


      </div>

    </section>
  );
};

export default Services;
