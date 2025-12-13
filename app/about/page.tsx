export const metadata = {
  title: 'About Us - SoftLogix',
  description: 'Learn about SoftLogix, our mission, vision, and commitment to delivering excellence in accounting software consultancy and industrial machinery solutions.',
};

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About SoftLogix</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Delivering excellence through technical expertise and engineering-driven solutions
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                To empower businesses with cutting-edge technology solutions and industrial automation 
                that drive efficiency, accuracy, and sustainable growth. We combine deep technical 
                expertise with practical business understanding to deliver results that matter.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to be the trusted partner that transforms how companies manage their 
                financial operations and manufacturing processes, enabling them to focus on what they 
                do best—growing their business.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-4">
                To become the leading provider of integrated business solutions, recognized for our 
                innovation, reliability, and commitment to customer success across manufacturing, 
                finance, and operations.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where businesses seamlessly integrate their financial systems 
                and production processes, achieving unprecedented levels of efficiency and insight 
                through technology and automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With years of experience across diverse industries, we understand the unique challenges 
              and opportunities your business faces.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-900 mb-2">10+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Years in Business</h3>
              <p className="text-gray-600">
                Serving clients across multiple industries with proven track record
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Projects Completed</h3>
              <p className="text-gray-600">
                Successfully implemented solutions for businesses of all sizes
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">
                Committed to exceeding expectations in every engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Quality */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in every project, ensuring reliability and precision 
                in both software and machinery solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accuracy</h3>
              <p className="text-gray-600">
                Precision matters. Our solutions are designed and implemented with meticulous attention 
                to detail, ensuring accurate results every time.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Efficiency</h3>
              <p className="text-gray-600">
                We optimize processes and workflows to maximize productivity and minimize waste, 
                delivering measurable improvements to your operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Approach */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Engineering-Driven Approach
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At SoftLogix, we combine deep technical expertise with practical business acumen. 
              Our team consists of certified software professionals and experienced engineers who 
              understand both the technology and the industries we serve.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We take a systematic, data-driven approach to every project. From initial assessment 
              through implementation and ongoing support, we ensure that every solution is tailored 
              to your specific needs and aligned with your business objectives.
            </p>
            <p className="text-lg text-gray-600">
              Our professional, reliable service has earned the trust of manufacturing companies, 
              finance teams, factory owners, and distributors across various sectors. We're not just 
              vendors—we're partners in your success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

