import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">SoftLogix</h3>
            <p className="mb-4 text-sm sm:text-base text-gray-400">
              Tax Consultancy, General Trading, and Marketing Management. 
              Specializing in Packaging Materials, Aseptic Packaging Paper, and Juices in PET Bottles.
            </p>
            <div className="mt-4">
              <p className="text-xs sm:text-sm text-gray-400">Phone: +971 50 763 9211</p>
              <p className="text-xs sm:text-sm text-gray-400">Location: DSO-IFZA, Dubai Silicon Oasis, Dubai, UAE</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
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
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Our Activities</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Tax Consultancy</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">General Trading</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Marketing Management</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Packaging Materials</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SoftLogix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

