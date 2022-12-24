import Footer from "../components/footer";
import Head from "next/head";
import Contact from "../components/contact";
import Hero from "../components/hero";
import WhatYourAudienceGet from "../components/whatUrAudienceGet";
import WhatWeDo from "../components/whatWeDo";

function App() {
  return (
    <>
      <Head>
        <title>NoteWorthy</title>
        <meta
          name='description'
          content='Make your social media profiles grow and attract more audience.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <main className='bg-main-dark'>
        <div className='bg-main-light dark:bg-none dark:bg-transparent '>
          <Hero />
          <WhatWeDo />
          <WhatYourAudienceGet />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
