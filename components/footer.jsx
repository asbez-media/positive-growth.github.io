/* eslint-disable @next/next/no-img-element */
function Footer() {
  return (
    <>
      <footer className='p-4 bg-transparent md:p-8 lg:p-10 bg-blue-400/50 dark:bg-blue-900/50'>
        <div className='mx-auto max-w-screen-xl text-center'>
          <span className='flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white'>
            <img
              src='/logo.png'
              alt='logo'
              className='h-10 w-10 mr-4 rounded-full'
            />
            NoteWorthy
          </span>
          <p className='my-6 text-gray-500 dark:text-gray-400'>
            Growing your social media presence in real time.
          </p>

          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2022{" "}
            <a href='#' className='hover:underline'>
              NoteWorthy
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
