import Link from "next/link";
import { motion } from "framer-motion";

/* eslint-disable @next/next/no-img-element */
function Header() {
  return (
    <>
      <header>
        <nav class='bg-transparent px-4 lg:px-6 py-2.5 mt-2'>
          <div class='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              class='flex items-center justify-between w-full lg:w-auto'
            >
              <Link href='/' class='flex items-center'>
                <span class='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                  Positive Growth
                </span>
              </Link>
            </motion.div>
            <div
              class='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
              id='mobile-menu-2'
            >
              <ul class='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <li>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => {
                      window.document.getElementById("hero").scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    class='cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Home
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => {
                      window.document
                        .getElementById("whatwedo")
                        .scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                    class='cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    What We Do
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => {
                      window.document
                        .getElementById("audienceget")
                        .scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                    class='cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Marketplace
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    onClick={() => {
                      window.document.getElementById("contact").scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    class='cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    Contact
                  </motion.div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
