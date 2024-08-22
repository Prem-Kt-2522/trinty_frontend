import Head from 'next/head'

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>About Us - Trinity</title>
        <meta name="description" content="Learn more about Trinity, a leading eCommerce platform offering laptops, CCTVs, PCs, peripherals, and mobile phones." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          About <span className="text-white">Trinity</span>
        </h1>

        <p className="mt-3 text-lg">
          Welcome to <strong>Trinity</strong>, your one-stop solution for all things tech. We specialize in providing a wide range of products including laptops, CCTVs, PCs, peripherals, and mobile phones.
        </p>

        <div className="my-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-md leading-8">
            At Trinity, our mission is to empower individuals and businesses by providing top-quality technology products and exceptional customer service. We are committed to offering the latest tech at competitive prices.
          </p>
        </div>

        <div className="my-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="text-md leading-8 list-disc list-inside">
            <li>Wide selection of top brands and products.</li>
            <li>Exceptional customer service and support.</li>
            <li>Fast and reliable shipping.</li>
            <li>Competitive pricing on all items.</li>
          </ul>
        </div>

        <div className="my-12">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-md leading-8">
            Have any questions or concerns? Our team is here to help. Reach out to us at <a href="mailto:support@trinity.com" className="text-blue-400 underline">support@trinity.com</a>.
          </p>
        </div>
      </main>

      
    </div>
  )
}
