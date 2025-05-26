const Footer = () => {
  return (
    <footer className="bg-white border-t text-gray-800 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Address */}
        <div>
          <div className="flex items-center mb-4">
            <img src="/cas.png" alt="Casper AI" className="w-20 h-20 mr-2"  />
            <span className="font-bold text-xl relative left-[-30px] top-1">
              <span className="text-blue-600 ">CASPER</span>AI
            </span>
          </div>
          <p className="font-semibold mb-2">Get in Touch</p>
          <div className="flex gap-3 mb-2">
            <a href="#"><img src="/mail.png" alt="Email" className="w-6 h-6" /></a>
            <a href="#"><img src="/linkedin2.png" alt="LinkedIn" className="w-6 h-6" /></a>
            <a href="#"><img src="/twitter2.png" alt="Instagram" className="w-6 h-6" /></a>
            <a href="#"><img src="/instagram.png" alt="X" className="w-6 h-6" /></a>
          </div>
          <p className="text-sm">
            Tower B3, Spaze i-Tech Park,<br />
            7, Gurugram, Haryana 122004
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">AI Tools & Solutions</a></li>
            <li><a href="#">Labs & Research</a></li>
            <li><a href="#">Internship & Mentorship</a></li>
            <li><a href="#">Blog & Case Studies</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Collaborate With Us */}
        <div>
          <h3 className="font-semibold mb-2">Collaborate With Us</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">API Licensing & Partnerships</a></li>
            <li><a href="#">Custom AI Solutions</a></li>
            <li><a href="#">Research Collaborations</a></li>
            <li><a href="#">Developer Ecosystem</a></li>
            <li><a href="#">Join Our Creator Community</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Our Focus Areas */}
        <div>
          <h3 className="font-semibold mb-2">Our Focus Areas</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">AI-Powered Marketing</a></li>
            <li><a href="#">Content Generation with AI</a></li>
            <li><a href="#">Virtual Prototyping & Ideation</a></li>
            <li><a href="#">UX/UI AI Assistants</a></li>
            <li><a href="#">AI Career Mentorship & Learning</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-10 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Copyright © 2025 Casper AI. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Use</a>
          <span>|</span>
          <a href="#">Legal</a>
          <span>|</span>
          <a href="#">Site Map</a>
        </div>
        <a href="#" className="underline">INDIA</a>
      </div>
    </footer>
  );
};

export default Footer;
