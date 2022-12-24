import { Player } from "@lottiefiles/react-lottie-player";
import Card from "./card";
import { motion } from "framer-motion";

function WhatWeDo() {
  return (
    <section
      id='whatwedo'
      className='min-h-screen w-full bg-blue-400/20 dark:bg-slate-700/10 p-12 flex flex-col '
    >
      <div className='gap-8 items-center py-8 px-4 mx-auto sm:py-16 lg:px-6'>
        <h1 className='whatwedoheading mb-4 text-4xl font-extrabold text-center tracking-tight leading-none text-slate-800 md:text-5xl lg:text-6xl dark:text-violet-200 '>
          What We Do
        </h1>
      </div>
      <div className='flex flex-col justify-center grow'>
        <div
          className='
        grid grid-cols-auto gap-8 place-items-center w-full sm:px-6 lg:px-8 lg:grid-cols-3
        '
        >
          <Card
            title='Coaching'
            description='We provide coaching by experts in the field to help you grow your social media presence.'
            icon={
              <Player
                autoplay
                loop
                src='https://assets3.lottiefiles.com/packages/lf20_b4yychpi.json'
              />
            }
          />
          <Card
            title='Video Editing'
            description='We have a team of expert video editors to help you create high quality videos for your social media accounts.'
            icon={
              <Player
                autoplay
                loop
                src='https://assets8.lottiefiles.com/packages/lf20_zpz526tf.json'
              />
            }
          />
          <Card
            title='Optimization For Algorithms'
            description='We study the algorithms of social media platforms to help you optimize your content for maximum reach.'
            icon={
              <Player
                autoplay
                loop
                src=' https://assets10.lottiefiles.com/packages/lf20_eqgazukp.json'
              />
            }
          />
        </div>
      </div>
      <div className='flex flex-row justify-center mt-8'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='cursor-pointer animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center'
          onClick={() => {
            window.document.getElementById("audienceget").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <svg
            className='w-6 h-6 text-violet-500'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

export default WhatWeDo;
