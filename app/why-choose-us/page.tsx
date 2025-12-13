import Link from 'next/link';

export const metadata = {
  title: 'Why Choose Us - SoftLogix',
  description: 'Discover why businesses choose SoftLogix for technical expertise, industry knowledge, end-to-end solutions, and reliable support.',
  openGraph: {
    title: 'Why Choose Us - SoftLogix',
    description: 'Discover why businesses choose SoftLogix for technical expertise, industry knowledge, end-to-end solutions, and reliable support.',
    images: ['/images/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/logo.png'],
  },
};

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Technical Expertise',
      description: 'Our team consists of certified software professionals and experienced engineers with deep technical knowledge in accounting systems and industrial automation.',
      details: [
        'Certified professionals in leading software platforms',
        'Engineering expertise in automation and machinery',
        'Continuous training on latest technologies',
        'Proven track record of successful implementations'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Industry Knowledge',
      description: 'Years of experience across diverse industries means we understand your specific challenges, regulations, and operational requirements.',
      details: [
        'Deep understanding of multiple industry sectors',
        'Knowledge of regulatory and compliance requirements',
        'Best practices from across industries',
        'Experience with businesses of all sizes'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'End-to-End Solutions',
      description: 'From initial consultation through implementation and ongoing support, we provide comprehensive solutions that cover every aspect of your needs.',
      details: [
        'Complete project lifecycle management',
        'Seamless integration between systems',
        'Unified approach to software and machinery',
        'Single point of contact for all services'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Reliable Support and Service',
      description: 'Our commitment doesn\'t end at implementation. We provide ongoing support, maintenance, and updates to ensure your systems continue to perform optimally.',
      details: [
        'Responsive helpdesk support',
        'Regular maintenance and updates',
        'Proactive monitoring and optimization',
        'Long-term partnership approach'
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Why Choose SoftLogix?</h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl">
            Experience, expertise, and commitment to your success
          </p>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four key reasons why businesses trust SoftLogix for their technology and automation needs
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 rounded-lg text-white mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{reason.description}</p>
                <ul className="space-y-3">
                  {reason.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Approach</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                At SoftLogix, we believe in building long-term partnerships rather than 
                transactional relationships. We take the time to understand your business, 
                your goals, and your challenges before recommending solutions.
              </p>
              <p>
                Our collaborative approach means you're involved every step of the way. 
                We provide transparent communication, regular updates, and clear documentation 
                so you always know where your project stands.
              </p>
              <p>
                We measure our success by your success. When your operations run more smoothly, 
                your costs decrease, and your business grows, we've achieved our goal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to work with businesses that value quality, reliability, and innovation
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg flex items-center justify-center h-32">
                <p className="text-gray-400 text-sm">Client Logo</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the SoftLogix Difference</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the businesses that have transformed their operations with our solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

