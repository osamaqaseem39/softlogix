'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function CataloguePage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (contentRef.current) {
      try {
        // Dynamically import html2pdf.js
        const html2pdf = (await import('html2pdf.js')).default;
        
        const opt = {
          margin: 0.5,
          filename: 'SoftLogix-Catalogue.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { 
            scale: 2, 
            useCORS: true,
            logging: false,
            windowWidth: contentRef.current.scrollWidth,
            windowHeight: contentRef.current.scrollHeight
          },
          jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };
        
        await html2pdf().set(opt).from(contentRef.current).save();
      } catch (error) {
        console.error('Error generating PDF:', error);
        // Fallback to print dialog
        window.print();
      }
    }
  };

  return (
    <div className="bg-white min-h-screen" ref={contentRef}>
      {/* Print-specific styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page {
            size: A4 landscape;
            margin: 1.5cm;
          }
          body {
            background: white !important;
          }
          header {
            display: none !important;
          }
          footer {
            display: none !important;
          }
          .no-print {
            display: none !important;
          }
          .avoid-break {
            page-break-inside: avoid;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .catalogue-section {
            page-break-after: always;
            height: 90vh !important;
            min-height: 90vh !important;
            max-height: 90vh !important;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 !important;
            padding: 0 !important;
          }
          .catalogue-section > div {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .catalogue-section:first-child {
            page-break-before: avoid !important;
            break-before: avoid !important;
          }
          .print\\:page-break-before-avoid {
            page-break-before: avoid !important;
            break-before: avoid !important;
          }
          .catalogue-section:not(:first-child) {
            page-break-before: always;
          }
          .catalogue-section:last-child {
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          section:last-of-type {
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          .no-print,
          .no-print * {
            display: none !important;
            height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .max-w-7xl {
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
          }
          main {
            margin: 0 !important;
            padding: 0 !important;
          }
          .product-grid {
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 1rem !important;
          }
          .service-grid {
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 0.75rem !important;
          }
        }
      `}} />

      {/* Print Button - Hidden when printing */}
      <div className="no-print bg-gray-100 py-4 px-6 border-b">
        <div className="max-w-7xl mx-auto flex justify-end">
          <button
            onClick={handleDownload}
            className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium shadow-md"
          >
            Download Catalogue
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 print:py-0 print:px-4 print:m-0">
        {/* Section 1: Business Name with Logo */}
        <section className="my-8 print:my-0 print:m-0 catalogue-section avoid-break h-[90vh] flex flex-col justify-center print:page-break-before-avoid">
          <div className="border-3 border-gray-800 rounded-lg p-8 print:p-6 bg-white shadow-md print:shadow-none h-full flex flex-col justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <div className="relative w-48 h-48 md:w-56 md:h-56 print:w-40 print:h-40">
                <Image
                  src="/images/logo.png"
                  alt="SoftLogix Consultancy Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl print:text-4xl font-bold text-blue-900 mb-2 print:mb-1">
                  SoftLogix Consultancy
                </h1>
                <div className="w-24 md:w-32 h-1 bg-blue-900 mx-auto md:mx-0 mb-4 print:mb-2"></div>
                <p className="text-xl md:text-2xl print:text-lg text-gray-700 font-semibold">
                  Professional Business Solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Brief Introduction */}
        <section className="mb-12 print:mb-0 catalogue-section avoid-break h-screen flex flex-col justify-center">
          <div className="border-3 border-gray-800 rounded-lg p-8 print:p-6 bg-white shadow-md print:shadow-none h-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl print:text-3xl font-bold text-gray-900 mb-6 print:mb-4 border-b-4 border-blue-900 pb-3 print:pb-2">
              About Us
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl print:text-base text-gray-700 leading-relaxed mb-4 print:mb-3">
                <span className="font-semibold text-blue-900">SoftLogix Consultancy</span> provides comprehensive services for{' '}
                <span className="font-semibold">tax consultancy</span> and specializes in sourcing the best{' '}
                <span className="font-semibold">beverage & Packaging Finished Goods</span> and{' '}
                <span className="font-semibold">Machinery</span> for production.
              </p>
              <p className="text-lg md:text-xl print:text-base text-gray-700 leading-relaxed">
                We primarily source our products from <span className="font-semibold text-blue-900">Pakistan</span> and{' '}
                <span className="font-semibold text-blue-900">China</span>, ensuring high-quality standards and competitive pricing 
                for our clients. Our expertise spans across tax advisory services and the complete supply chain of packaging 
                solutions and beverage products.
              </p>
            </div>
            <div className="mt-6 print:mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 print:gap-3 service-grid">
              <div className="bg-blue-50 p-4 print:p-3 rounded-lg border-l-4 border-blue-900">
                <h3 className="font-bold text-blue-900 mb-2 print:mb-1">Tax Consultancy</h3>
                <p className="text-sm print:text-xs text-gray-700">Expert tax advisory services</p>
              </div>
              <div className="bg-blue-50 p-4 print:p-3 rounded-lg border-l-4 border-blue-900">
                <h3 className="font-bold text-blue-900 mb-2 print:mb-1">Beverage Products</h3>
                <p className="text-sm print:text-xs text-gray-700">Premium finished goods</p>
              </div>
              <div className="bg-blue-50 p-4 print:p-3 rounded-lg border-l-4 border-blue-900">
                <h3 className="font-bold text-blue-900 mb-2 print:mb-1">Packaging Solutions</h3>
                <p className="text-sm print:text-xs text-gray-700">Complete packaging materials</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: PET Juices Products */}
        <section className="mb-12 print:mb-0 catalogue-section avoid-break h-screen flex flex-col justify-center">
          <div className="border-3 border-gray-800 rounded-lg p-8 print:p-6 bg-white shadow-md print:shadow-none h-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl print:text-3xl font-bold text-gray-900 mb-6 print:mb-4 border-b-4 border-blue-900 pb-3 print:pb-2">
              PET Juices Products
            </h2>
            <p className="text-lg print:text-base text-gray-700 mb-6 print:mb-4">
              We offer a wide range of premium juices in PET bottles, sourced from trusted manufacturers. 
              Our products meet international quality standards and are available in various flavors and sizes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:gap-4 product-grid">
              {/* Product Card 1 */}
              <div className="border-2 border-gray-300 rounded-lg p-6 print:p-4 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow avoid-break">
                <div className="relative w-full h-48 print:h-40 mb-4 print:mb-3 bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/petfilling.png"
                    alt="PET Juice Filling Machine"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="text-xl print:text-lg font-bold text-gray-900 mb-2 print:mb-1">
                  PET Juice Filling
                </h3>
                <p className="text-sm print:text-xs text-gray-600 mb-3 print:mb-2">
                  High-quality PET bottle filling solutions for various juice products
                </p>
                <div className="flex items-center text-blue-900 font-semibold text-sm print:text-xs">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Available in Multiple Sizes
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="border-2 border-gray-300 rounded-lg p-6 print:p-4 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow avoid-break">
                <div className="relative w-full h-48 print:h-40 mb-4 print:mb-3 bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/pet filling.png"
                    alt="PET Filling Equipment"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="text-xl print:text-lg font-bold text-gray-900 mb-2 print:mb-1">
                  PET Filling Equipment
                </h3>
                <p className="text-sm print:text-xs text-gray-600 mb-3 print:mb-2">
                  Professional-grade filling machinery for beverage production
                </p>
                <div className="flex items-center text-blue-900 font-semibold text-sm print:text-xs">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Industrial Grade
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="border-2 border-gray-300 rounded-lg p-6 print:p-4 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow avoid-break">
                <div className="relative w-full h-48 print:h-40 mb-4 print:mb-3 bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/waterfilling.png"
                    alt="Water Filling Solutions"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="text-xl print:text-lg font-bold text-gray-900 mb-2 print:mb-1">
                  Water & Beverage Filling
                </h3>
                <p className="text-sm print:text-xs text-gray-600 mb-3 print:mb-2">
                  Complete solutions for water and beverage filling operations
                </p>
                <div className="flex items-center text-blue-900 font-semibold text-sm print:text-xs">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Customizable Solutions
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Packaging Products */}
        <section className="mb-12 print:mb-0 catalogue-section avoid-break h-screen flex flex-col justify-center">
          <div className="border-3 border-gray-800 rounded-lg p-8 print:p-6 bg-white shadow-md print:shadow-none h-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl print:text-3xl font-bold text-gray-900 mb-6 print:mb-4 border-b-4 border-blue-900 pb-3 print:pb-2">
              Packaging Products
            </h2>
            <p className="text-lg print:text-base text-gray-700 mb-6 print:mb-4">
              Our comprehensive range of packaging products includes packing strips, straps, and various packaging materials 
              designed to meet your specific business needs. All products are sourced from reliable manufacturers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:gap-4 product-grid">
              {/* Product Card 1 - Packing Strips & Straps */}
              <div className="border-2 border-gray-300 rounded-lg p-6 print:p-4 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow avoid-break">
                <div className="relative w-full h-48 print:h-40 mb-4 print:mb-3 bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/industrial-packaging-strap.jpg"
                    alt="Packing Strips & Straps"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="text-xl print:text-lg font-bold text-gray-900 mb-2 print:mb-1">
                  Packing Strips & Straps
                </h3>
                <p className="text-sm print:text-xs text-gray-600 mb-3 print:mb-2">
                  High-strength packing strips, PP straps, and industrial-grade straps for secure bundling and heavy-duty packaging applications
                </p>
                <div className="flex items-center text-blue-900 font-semibold text-sm print:text-xs">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Durable & Heavy-Duty
                </div>
              </div>

              {/* Product Card 2 - Packaging Materials */}
              <div className="border-2 border-gray-300 rounded-lg p-6 print:p-4 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow avoid-break">
                <div className="relative w-full h-48 print:h-40 mb-4 print:mb-3 bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/packaging.png"
                    alt="Packaging Materials"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="text-xl print:text-lg font-bold text-gray-900 mb-2 print:mb-1">
                  Packaging Materials
                </h3>
                <p className="text-sm print:text-xs text-gray-600 mb-3 print:mb-2">
                  Comprehensive range of packaging materials and solutions for all your business needs
                </p>
                <div className="flex items-center text-blue-900 font-semibold text-sm print:text-xs">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Wide Selection
                </div>
              </div>

              {/* Product Card 3 - Packaging Solutions */}
              <div className="border-2 border-gray-300 rounded-lg p-6 print:p-4 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow avoid-break">
                <div className="relative w-full h-48 print:h-40 mb-4 print:mb-3 bg-white rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/packaging (2).png"
                    alt="Packaging Solutions"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <h3 className="text-xl print:text-lg font-bold text-gray-900 mb-2 print:mb-1">
                  Packaging Solutions
                </h3>
                <p className="text-sm print:text-xs text-gray-600 mb-3 print:mb-2">
                  Custom packaging solutions and advanced packaging technologies tailored to your specific requirements
                </p>
                <div className="flex items-center text-blue-900 font-semibold text-sm print:text-xs">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Customizable & Modern
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
