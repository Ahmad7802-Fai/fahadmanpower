export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid gap-8 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="font-bold text-lg">Fahad Manpower</h2>
          <p className="text-sm text-gray-400 mt-3">
            Solusi tenaga kerja profesional dan terpercaya.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Recruitment</li>
            <li>Outsourcing</li>
            <li>Training</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-400">
            Email: info@fahadmanpower.com
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Phone: +62 812 3456 7890
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-800">
        © {new Date().getFullYear()} Fahad Manpower. All rights reserved.
      </div>
    </footer>
  );
}