"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title='| People on the World' textStyles='text-center' />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles='text-center'
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img src='/map.png' alt='map' className='w-full h-full object-cover' />

        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-orange-600'>
          <img src='/people-01.png' alt='people' className='w-full h-full' />
        </div>

        <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-[#F29DB0]'>
          <img src='/people-02.png' alt='people' className='w-full h-full' />
        </div>

        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-2xl shadow-[#ADB6D7]'>
          <img src='/people-03.png' alt='people' className='w-full h-full' />
        </div>

        <div className='absolute top-[50%] left-[188px] w-[211px] h-[159px] rounded-[32px] bg-[#5d6680] shadow-2xl shadow-[#923289]'>
          <img
            src='/planet-02.png'
            alt='planet'
            className={`w-[211px] h-[159px] object-cover rounded-[32px] items-center justify-center flex p-[8px]`}
          />
        </div>

        <div className='absolute top-[35px] left-[850px] w-[211px] h-[159px] rounded-[32px] bg-[#5d6680] shadow-2xl shadow-[#FF605D]'>
          <img
            src='/planet-07.png'
            alt='planet'
            className={`w-[211px] h-[159px] object-cover rounded-[32px] items-center justify-center flex p-[8px]`}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
