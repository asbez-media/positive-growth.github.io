import { motion } from "framer-motion";
import Header from "./header";

function Hero() {
  return (
    <main className='h-screen flex flex-col'>
      <Header />
      <section id='hero' className='grow flex flex-col justify-center'>
        <div className='flex flex-col items-center gap-16 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
          <div className='flex flex-col items-center gap-4'>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
                We grow your social media presence.
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
                Here at Positive Growth, we are dedicated to providing solutions
                to help you grow your social media presence.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='cursor-pointer animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center'
            onClick={() => {
              window.document.getElementById("whatwedo").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <svg
              class='w-6 h-6 text-violet-500'
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
    </main>
  );
}

export default Hero;
