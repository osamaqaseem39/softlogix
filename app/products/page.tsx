import Link from 'next/link';

export const metadata = {
  title: 'Products - Industrial Machinery Solutions | SoftLogix',
  description: 'High-quality liquid filling machines, packaging equipment, and custom industrial automation solutions for manufacturing companies.',
};

export default function Products() {
  const products = [
    {
      title: 'Liquid Filling Machines',
      description: 'Precision liquid filling equipment designed for accuracy, speed, and reliability. Available in various configurations to meet your specific production requirements.',
      features: [
        'Automated liquid filling with precise volume control',
        'Multiple filling heads for high-speed production',
        'Compatible with various container types and sizes',
        'Hygienic design for food, pharmaceutical, and chemical industries',
        'Easy-to-use control panel and maintenance-friendly design'
      ],
      applications: ['Beverages', 'Pharmaceuticals', 'Chemicals', 'Food Products', 'Cosmetics'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Packaging and Automation Equipment',
      description: 'Complete packaging solutions including capping, labeling, and sealing systems integrated with your production line for seamless automation.',
      features: [
        'Integrated packaging line solutions',
        'Automatic capping and sealing systems',
        'Labeling and date coding equipment',
        'Cartoning and case packing automation',
        'Quality control and inspection systems'
      ],
      applications: ['FMCG', 'Pharmaceuticals', 'Food & Beverage', 'Retail Products'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Custom Industrial Solutions',
      description: 'Tailored machinery and automation systems designed to meet your unique production requirements and operational challenges.',
      features: [
        'Custom design and engineering',
        'Integration with existing production lines',
        'Scalable solutions for future growth',
        'Specialized equipment for unique applications',
        'Complete project management and support'
      ],
      applications: ['Specialized Manufacturing', 'Unique Product Lines', 'High-Volume Production'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: 'High Precision',
      description: 'Accurate filling and packaging with minimal waste and maximum consistency'
    },
    {
      title: 'Increased Productivity',
      description: 'Automated processes that significantly boost production capacity and efficiency'
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce labor costs and material waste while improving output quality'
    },
    {
      title: 'Reliability',
      description: 'Robust equipment built for continuous operation in demanding environments'
    },
    {
      title: 'Compliance Ready',
      description: 'Designed to meet industry standards and regulatory requirements'
    },
    {
      title: 'Scalable Solutions',
      description: 'Equipment and systems that grow with your business needs'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Packaging Materials & Products</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl">
            Packaging materials, aseptic packaging paper, and juices in PET bottles
          </p>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Products & Solutions</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Cutting-edge industrial machinery designed for precision, efficiency, and reliability
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg text-blue-900 mb-4">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full text-sm font-medium">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-8 h-full">
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">Product Image</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why manufacturing companies choose our industrial machinery solutions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {['Manufacturing', 'FMCG', 'Pharmaceuticals', 'Food & Beverage', 'Chemicals'].map((industry) => (
              <div key={industry} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/industries" className="text-blue-900 font-semibold hover:text-blue-700">
              Learn More About Industries →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Machinery Solutions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a customized quote for your production requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

