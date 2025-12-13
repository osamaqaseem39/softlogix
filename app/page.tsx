import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Empowering Business Excellence Through Technology & Automation
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-blue-100 mb-8">
              Professional accounting software consultancy and industrial machinery solutions 
              for manufacturing companies seeking efficiency, accuracy, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
              >
                Request a Consultation
              </Link>
              <Link
                href="/contact"
                className="bg-blue-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors border border-blue-600"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Accounting Software Consultancy */}
            <div className="rounded-lg bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 rounded-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Accounting Software Consultancy
              </h2>
              <p className="text-gray-600 mb-6">
                Transform your financial operations with expert software implementation, 
                ERP integration, and ongoing support. We help businesses streamline accounting 
                processes, ensure compliance, and make data-driven decisions.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Software implementation & customization
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  ERP & financial system integration
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Training & ongoing support
                </li>
              </ul>
              <Link href="/services" className="text-blue-900 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>

            {/* Industrial Machinery Solutions */}
            <div className="rounded-lg bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 rounded-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Industrial Machinery Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                Advanced liquid filling machines and automation equipment designed for precision, 
                efficiency, and reliability. From standard solutions to custom-built systems, 
                we deliver machinery that meets your production requirements.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Liquid filling machines
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Packaging & automation equipment
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom industrial solutions
                </li>
              </ul>
              <Link href="/products" className="text-blue-900 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Quick Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies across diverse sectors
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {['Manufacturing', 'FMCG', 'Pharmaceuticals', 'Food & Beverage', 'Retail & Distribution'].map((industry) => (
              <div key={industry} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900">{industry}</h3>
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
      <section className="py-16 bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help you achieve greater efficiency and growth.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
