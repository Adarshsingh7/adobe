export default function ContactForm() {
    return <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="bg-green-900 text-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-4">We're here to help</h2>
        <p className="text-lg mb-6">
          Don’t dwell on what went wrong. Instead, focus on what to do next.
          Spend your energies on moving forward toward finding the answer.
        </p>
        
        {/* Contact Information */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-2xl">📧</span>
            <a href="mailto:info@infinite-energy.me" className="text-lg underline">
              info@infinite-energy.me
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-2xl">📞</span>
            <p className="text-lg">+971 4 3298847</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-2xl">📍</span>
            <p className="text-lg">
              Traders Market Free - Yiwu Market - Zone Street, Mina Jebel Ali - Dubai Aid City -
              Dubai, United Arab Emirates
            </p>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="flex space-x-4 mb-8">
          <a href="#" className="text-2xl">🌐</a>
          <a href="#" className="text-2xl">📘</a>
          <a href="#" className="text-2xl">📸</a>
          <a href="#" className="text-2xl">🎥</a>
          <a href="#" className="text-2xl">💼</a>
        </div>
        
        {/* Contact Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Omar Bin Saleh"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="itsomabsaleh010@gmail.com"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-green-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Contact No.</label>
            <input
              type="tel"
              placeholder="+971 557483 650 021"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Your Message</label>
            <textarea
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg font-medium hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  
}