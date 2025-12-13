import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Industries We Serve - SoftLogix',
  description: 'SoftLogix serves diverse industries including manufacturing, FMCG, pharmaceuticals, food & beverage, and retail distribution with tax consultancy, trading, and packaging solutions.',
  openGraph: {
    title: 'Industries We Serve - SoftLogix',
    description: 'SoftLogix serves diverse industries including manufacturing, FMCG, pharmaceuticals, food & beverage, and retail distribution with tax consultancy, trading, and packaging solutions.',
    images: ['/images/manufacturer.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/manufacturer.png'],
  },
};

export default function Industries() {
  const industries = [
    {
      name: 'Manufacturing',
      description: 'Complete solutions for manufacturing operations, from financial management to production line automation.',
      image: '/images/manufacturer.png',
      solutions: [
        'ERP integration for manufacturing processes',
        'Production line automation equipment',
        'Inventory and supply chain management software',
        'Quality control and compliance systems',
        'Real-time production monitoring'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: 'FMCG (Fast-Moving Consumer Goods)',
      description: 'High-speed packaging and filling solutions with integrated financial systems for fast-moving consumer goods companies.',
      image: '/images/fmcg.png',
      solutions: [
        'High-speed liquid filling machines',
        'Packaging line automation',
        'Demand forecasting and inventory management',
        'Multi-channel distribution management',
        'Financial reporting and analytics'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      name: 'Pharmaceuticals',
      description: 'Precision equipment and compliance-focused software solutions for pharmaceutical manufacturing and distribution.',
      image: '/images/pharma.png',
      solutions: [
        'Precision filling machines for sterile products',
        'GMP-compliant automation systems',
        'Regulatory compliance software',
        'Batch tracking and traceability',
        'Quality assurance and documentation systems'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: 'Food & Beverage',
      description: 'Hygienic filling equipment and integrated financial management for food and beverage production operations.',
      image: '/images/foodandbeverage.png',
      solutions: [
        'Food-grade liquid filling machines',
        'Bottling and canning equipment',
        'Inventory management for perishables',
        'Recipe and batch costing software',
        'Food safety compliance systems'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    },
    {
      name: 'Retail and Distribution',
      description: 'Efficient distribution solutions with comprehensive accounting systems for retail operations and logistics.',
      image: '/images/retail.png',
      solutions: [
        'Warehouse management software integration',
        'Multi-location financial consolidation',
        'Point-of-sale system integration',
        'Supply chain visibility tools',
        'Automated reporting and analytics'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Industries We Serve</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl">
            Tailored solutions for diverse industries, understanding your unique challenges and requirements
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Industry Expertise</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              We work closely with businesses across multiple sectors, delivering solutions that address 
              industry-specific needs and challenges.
            </p>
          </div>

          <div className="space-y-12">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start`}
              >
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg text-blue-900 mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                  <p className="text-lg text-gray-600 mb-6">{industry.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Our Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1 group">
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-2 sm:p-4">
                    <div className="relative w-full aspect-square min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]">
                      <Image
                        src={industry.image}
                        alt={industry.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                        className="object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Industry-Specific Knowledge Drives Success
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Every industry has unique requirements, regulations, and operational challenges. 
              Our deep understanding of your sector enables us to deliver solutions that are 
              not just technically sound, but practically relevant to your business context.
            </p>
            <p className="text-lg text-gray-600">
              Whether it's GMP compliance in pharmaceuticals, food safety standards in FMCG, 
              or high-speed production requirements in manufacturing, we ensure our solutions 
              align with industry best practices and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to See How We Can Help Your Industry?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss industry-specific solutions tailored to your business needs.
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

