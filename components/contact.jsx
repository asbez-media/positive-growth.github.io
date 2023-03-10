import { Button } from "flowbite-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, name, message);
    emailjs
      .send(
        "service_4a3n75o",
        "template_499y21o",
        {
          from_name: name,
          from_email: email,
          to_name: "NoteWorthy Support",
          message: message,
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
  };

  return (
    <section
      id='contact'
      className='bg-blue-400/40 dark:bg-blue-900/40 h-screen flex flex-col justify-center'
    >
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
          Contact Us
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          Get your social media presence growing today using our service. Get in
          touch with us to get started or to clarify any questions you may have.
        </p>
        <form action='#' className='space-y-8'>
          <div>
            <label
              for='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='name@server.com'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              for='subject'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Your name
            </label>
            <input
              type='text'
              id='name'
              className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='What should we call you?'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              for='message'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Your message
            </label>
            <textarea
              id='message'
              rows='6'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='Send us a message and we will get back to you as soon as possible.'
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <Button
            type='submit'
            className='w-full'
            onClick={handleSubmit}
            disabled={email === "" || name === "" || message === ""}
          >
            Send message
          </Button>
        </form>
      </div>
      <ToastContainer className={"text-white dark:text-gray-900"} />
    </section>
  );
}

export default Contact;
