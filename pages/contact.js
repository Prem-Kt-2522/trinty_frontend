import Head from 'next/head'

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Contact Us - Trinity</title>
        <meta name="description" content="Get in touch with Trinity, your trusted partner in technology products." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Contact <span className="text-white">Trinity</span>
        </h1>

        <p className="mt-3 text-lg">
          We're here to help you with any questions or concerns you might have. Reach out to us, and we'll get back to you as soon as possible.
        </p>

        <div className="my-12 w-full max-w-lg">
          <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-left mb-2 text-sm font-medium text-gray-300">Your Name</label>
              <input type="text" id="name" className="w-full p-3 text-black rounded-lg" placeholder="John Doe" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-left mb-2 text-sm font-medium text-gray-300">Your Email</label>
              <input type="email" id="email" className="w-full p-3 text-black rounded-lg" placeholder="john@example.com" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-left mb-2 text-sm font-medium text-gray-300">Your Message</label>
              <textarea id="message" className="w-full p-3 h-32 text-black rounded-lg" placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit" className="w-full p-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg">
              Send Message
            </button>
          </form>
        </div>

        <div className="my-12 text-left">
          <h2 className="text-3xl font-semibold mb-4">Other Ways to Contact Us</h2>
          <p className="text-md leading-8">
            <strong>Email:</strong> <a href="mailto:support@trinity.com" className="text-blue-400 underline">support@trinity.com</a><br />
            <strong>Phone:</strong> 1234567891<br />
            <strong>Address:</strong> D-6/13, Shri Krupa Society, Kopar Khairane, Navi Mumbai - 400709 (Sector No 22)
          </p>
        </div>
      </main>

      
    </div>
  )
}
