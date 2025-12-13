import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">SoftLogix</h3>
            <p className="mb-4 text-gray-400">
              Leading provider of accounting software consultancy and industrial machinery solutions. 
              Empowering businesses with technology and automation.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Email: info@softlogix.com</p>
              <p className="text-sm text-gray-400">Phone: +1 (555) 123-4567</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Software Consultancy</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Liquid Filling Machines</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Automation Equipment</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Custom Solutions</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SoftLogix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

