export default function Footer() {
    return (
      <footer className="w-full bg-[#172A45] text-[#E6F1FF] py-8 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold text-[#64FFDA]">eDukan</h2>
            <p className="text-sm mt-2">Your trusted online store for the best quality products at unbeatable prices.</p>
            <p className="text-sm mt-2"> Hapur District, Uttar Pradesh, India</p>
            <p className="text-sm"> <a href="mailto:vishal@gmail.com" className="hover:text-[#4ECCA3] transition">vishal@gmail.com</a></p>
            <p className="text-sm"> +91 98765 43210</p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-[#64FFDA]">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="" className="hover:text-[#4ECCA3] transition">About Us</a></li>
              <li><a href="" className="hover:text-[#4ECCA3] transition">Careers</a></li>
              <li><a href="" className="hover:text-[#4ECCA3] transition">Privacy Policy</a></li>
              <li><a href="" className="hover:text-[#4ECCA3] transition">Terms & Conditions</a></li>
              <li><a href="" className="hover:text-[#4ECCA3] transition">Help Center</a></li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold text-[#64FFDA] flex flex-col">Follow Us</h2>
            <div className="mt-2 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ECCA3] transition">
                 Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ECCA3] transition">
                 Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ECCA3] transition">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#4ECCA3] transition">
                 LinkedIn
              </a>
            </div>
          </div>
  
        </div>
  
       
      </footer>
    );
  }
  