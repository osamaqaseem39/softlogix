import Link from 'next/link';

export const metadata = {
  title: 'Services - Accounting Software Consultancy | SoftLogix',
  description: 'Expert accounting software consultancy services including implementation, ERP integration, customization, training, and ongoing support for your business.',
};

export default function Services() {
  const services = [
    {
      title: 'Accounting Software Implementation',
      description: 'Seamless deployment of accounting systems tailored to your business needs. We handle everything from initial setup to go-live, ensuring minimal disruption to your operations.',
      features: [
        'Requirements analysis and system selection',
        'Data migration and configuration',
        'User access and security setup',
        'Testing and quality assurance',
        'Go-live support and handover'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'ERP and Financial System Integration',
      description: 'Connect your accounting software with ERP systems, CRM platforms, and other business applications for unified data management and real-time insights.',
      features: [
        'ERP system integration',
        'API development and configuration',
        'Data synchronization setup',
        'Third-party application connectivity',
        'Workflow automation'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Software Customization and Training',
      description: 'Tailor your accounting software to match your unique workflows and processes. Comprehensive training ensures your team can leverage all system capabilities.',
      features: [
        'Custom module development',
        'Workflow customization',
        'Report and dashboard design',
        'User training programs',
        'Documentation and knowledge transfer'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: 'Ongoing Support and Compliance Assistance',
      description: 'Continuous support to keep your systems running smoothly and ensure compliance with accounting standards, tax regulations, and industry requirements.',
      features: [
        'Helpdesk support and troubleshooting',
        'Regular system updates and maintenance',
        'Compliance monitoring and reporting',
        'Audit preparation assistance',
        'Performance optimization'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Tax Consultancy</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl">
            Transform your financial operations with expert tax consultancy and professional support
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Comprehensive accounting software solutions from implementation to ongoing support
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg text-blue-900 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-blue-900 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-8 h-full">
                  {/* Placeholder for service illustration or image */}
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">Service Image</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Consultancy Services</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Expert Team', desc: 'Certified professionals with extensive industry experience' },
              { title: 'Proven Methodology', desc: 'Time-tested processes for successful implementations' },
              { title: 'End-to-End Support', desc: 'From planning to post-implementation assistance' },
              { title: 'Industry Knowledge', desc: 'Deep understanding of your business sector and challenges' }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Accounting Operations?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our consultancy services can streamline your financial processes.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

