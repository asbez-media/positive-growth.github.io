import { Player } from "@lottiefiles/react-lottie-player";
import Card from "./card";
import { motion } from "framer-motion";

function WhatYourAudienceGet() {
  return (
    <section
      id='audienceget'
      className='min-h-screen w-full bg-blue-400/30 dark:bg-slate-700/20 p-12 flex flex-col '
    >
      <div className='gap-8 items-center py-8 px-4 mx-auto sm:py-16 lg:px-6'>
        <h1 className='whatwedoheading mb-4 text-4xl font-extrabold text-center tracking-tight leading-none text-slate-800 md:text-5xl lg:text-6xl dark:text-violet-200 '>
          What Your Audience Feel
        </h1>
      </div>
      <div className='flex flex-col justify-center grow'>
        <div
          className='
        grid grid-cols-auto gap-8 place-items-center w-full sm:px-6 lg:px-8 lg:grid-cols-3
        '
        >
          <Card
            title='Authenticity'
            description='We help you make your content in a way that your audience feel like you are truly talking them with authenticity throughout the piece of content.'
            icon={
              <Player
                autoplay
                loop
                src='https://assets1.lottiefiles.com/packages/lf20_dyimsq5i.json'
              />
            }
          />
          <Card
            title='Confidence'
            description='We teach you to make your audience feel confident about you, by making them confident about the content you make.'
            icon={
              <Player
                autoplay
                loop
                src='https://assets3.lottiefiles.com/packages/lf20_c9miik7h.json'
              />
            }
          />
          <Card
            title='Personal Touch'
            description='We help you make your content in a way that they feel personally connected to you, your content and by extension, your brand.'
            icon={
              <Player
                autoplay
                loop
                src='https://assets1.lottiefiles.com/packages/lf20_fjv8qxqn.json'
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
            window.document.getElementById("contact").scrollIntoView({
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

export default WhatYourAudienceGet;
