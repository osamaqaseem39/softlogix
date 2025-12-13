import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 sm:py-28 md:py-36 lg:py-48 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/herobg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/50 to-blue-900/50"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Professional Tax Consultancy & General Trading Solutions
            </h1>
            <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 px-4 sm:px-0">
              Expert tax consultancy, general trading, and marketing management services. 
              Specializing in packaging materials, aseptic packaging paper, and juices in PET bottles.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
              >
                Request a Consultation
              </Link>
              <Link
                href="/contact"
                className="bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors border border-blue-600 text-sm sm:text-base"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
            {/* Tax Consultancy & General Trading */}
            <div className="group rounded-lg bg-gray-50 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 overflow-hidden rounded-lg bg-white p-2 sm:p-4">
                  <div className="relative w-full aspect-square min-h-[200px] sm:min-h-[250px]">
                    <Image
                      src="/images/tax.jpg"
                      alt="Tax Consultancy"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Tax Consultancy & General Trading
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                Expert tax consultancy services and comprehensive general trading solutions. 
                We help businesses navigate tax regulations, optimize financial strategies, 
                and expand their trading operations with professional guidance and support.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Tax Consultancy
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  General Trading
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Marketing Management
                </li>
              </ul>
              <Link href="/services" className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 group-hover:translate-x-2 transition-transform duration-300">
                Learn More →
              </Link>
              </div>
            </div>

            {/* Packaging & Products */}
            <div className="group rounded-lg bg-gray-50 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 overflow-hidden rounded-lg bg-white p-2 sm:p-4">
                  <div className="relative w-full aspect-square min-h-[200px] sm:min-h-[250px]">
                    <Image
                      src="/images/packaginghomepage.png"
                      alt="Packaging Materials - Beverages and Products"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Packaging Materials & Products
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                High-quality packaging materials and products including aseptic packaging paper 
                and premium juices in PET bottles. We provide reliable packaging solutions 
                tailored to your business needs.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Packaging Materials
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Aseptic Packaging Paper
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Juices in PET Bottles
                </li>
              </ul>
              <Link href="/products" className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 group-hover:translate-x-2 transition-transform duration-300">
                Learn More →
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Quick Overview */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Industries We Serve</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Trusted by leading companies across diverse sectors
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {['Manufacturing', 'FMCG', 'Pharmaceuticals', 'Food & Beverage', 'Retail & Distribution'].map((industry, idx) => (
              <div key={industry} className="group bg-white p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-900 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">{industry}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries" className="text-blue-900 font-semibold hover:text-blue-700">
              Explore All Industries →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-4 sm:px-0">Ready to Transform Your Business?</h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Let's discuss how our solutions can help you achieve greater efficiency and growth.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
