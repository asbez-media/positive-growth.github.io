import Head from "next/head";
import Hero from "../components/hero";
import WhatYourAudienceGet from "../components/whatUrAudienceGet";
import WhatWeDo from "../components/whatWeDo";

function App() {
  return (
    <>
      <Head
        title='Positive Growth'
        description='Actively growing your social media presence'
      >
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-main-dark'>
        <div className='bg-main-light dark:bg-none dark:bg-transparent '>
          <Hero />
          <WhatWeDo />
          <WhatYourAudienceGet />
        </div>
      </main>
    </>
  );
}

export default App;
