export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-[#E6F1FF] flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-[#64FFDA]">Contact Us</h1>
      <p className="mt-4 text-lg max-w-xl text-center">
        Have questions? Reach out to us, and we’ll be happy to assist you!
      </p>
      
      <form className="mt-8 bg-[#112240] p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block mb-2 text-lg">Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 rounded-md bg-[#0A192F] border border-[#64FFDA] text-[#E6F1FF] focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
        />

        <label className="block mt-4 mb-2 text-lg">Your Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md bg-[#0A192F] border border-[#64FFDA] text-[#E6F1FF] focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
        />

        <label className="block mt-4 mb-2 text-lg">Message</label>
        <textarea
          placeholder="Write your message..."
          rows="4"
          className="w-full px-4 py-2 rounded-md bg-[#0A192F] border border-[#64FFDA] text-[#E6F1FF] focus:outline-none focus:ring-2 focus:ring-[#64FFDA]"
        ></textarea>

        <button
          type="submit"
          className="mt-6 w-full px-4 py-2 bg-[#64FFDA] text-[#0A192F] font-semibold rounded-md hover:bg-[#4ECCA3] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
