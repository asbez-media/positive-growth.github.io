import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Card(props) {
  const { title, description, icon, className } = props;

  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      className={
        "h-full max-w-sm bg-slate-100/50 border border-gray-200 rounded-lg shadow-md dark:border-gray-700 flex flex-col justify-between dark:bg-slate-900/50 backdrop-filter backdrop-blur-sm " +
        " " +
        className
      }
    >
      <div className='grow p-6 rounded-t-lg flex justify-center items-center'>
        {icon}
      </div>
      <div className='p-5'>
        <h5 className='w-full text-left mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-white'>
          {title}
        </h5>
        <p className='text-justify mb-3 font-normal text-lg text-gray-700 dark:text-gray-400'>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default Card;
