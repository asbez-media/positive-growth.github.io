import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function NameAndEmail() {
  return (
    <>
      <form
        className='max-w-xl'
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.target[0].value;
          emailjs
            .send(
              "service_4a3n75o",
              "template_499y21o",
              {
                from_name: "Positive Growth Landing Website",
                from_email: email,
                to_name: "Positive Growth Support",
                message: `User ${email} wants to get in touch.`,
                reply_to: email,
              },
              "hAW7EJkNMygNslFYB"
            )
            .then((result) => {
              console.log(result.text);
              toast.success("Message sent successfully!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            })
            .catch((error) => {
              console.log(error.text);
              toast.error(
                "Message failed to send. Try again with different parameters.",
                {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                }
              );
            });
        }}
      >
        <label
          for='search'
          class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Search
        </label>
        <div class='relative'>
          <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              class='w-5 h-5 text-gray-500 dark:text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
            </svg>
          </div>
          <input
            type='email'
            id='email'
            class='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Enter your email and we will get back to you soon.'
            required
          />
          <button
            type='submit'
            class='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
}

export default NameAndEmail;
