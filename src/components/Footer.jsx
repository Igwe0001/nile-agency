function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-[1100px] mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-primary font-bold text-xl">Technewman</h2>
          <p className="text-sm text-gray-600 mt-2">
            We build fast, responsive websites and powerful digital products to
            help brands grow online.
          </p>
          <p className="text-sm text-gray-500 mt-2">info@technewman.com</p>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Contact</h3>
          <p className="text-sm text-gray-600">
            21 Aso Drive, Garki, Abuja, Nigeria
          </p>
          <p className="text-sm text-gray-600 mt-2">+234 813 000 0000</p>
        </div>

        {/* Social Icons */}
        <div className="flex md:justify-end gap-3">
          {["facebook", "instagram", "twitter", "linkedin"].map(
            (platform, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 rounded-full shadow text-lg flex items-center justify-center text-gray-600 hover:text-primary transition"
                aria-label={platform}
              >
                <i className={`fab fa-${platform}`}></i>
              </a>
            )
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Technewman. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
