import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import Header from "./header";
import NameAndEmail from "./nameEmail";

function Hero() {
  return (
    <main className='h-screen flex flex-col'>
      <Header />
      <section id='hero' className='h-screen flex flex-col justify-center'>
        <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
                We grow your social media presence.
              </h1>
              <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
                Here at NoteWorthy, we are dedicated to providing solutions to
                help you grow your social media presence.
              </p>
              <NameAndEmail />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=' lg:mt-0 lg:col-span-5 lg:flex'
          >
            <Player
              autoplay
              loop
              src='https://assets10.lottiefiles.com/packages/lf20_osdxlbqq.json'
            />
          </motion.div>
        </div>
        <div className='flex flex-row justify-center mt-8'>
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
    </main>
  );
}

export default Hero;
