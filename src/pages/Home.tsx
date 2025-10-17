import { servicesOverview } from '../data/servicesData';
import { businessInfo } from '../data/contactData';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{businessInfo.name}</h1>
          <p className="text-2xl mb-2">{businessInfo.tagline}</p>
          <p className="text-xl mb-8">{businessInfo.hours}</p>
          <button
            onClick={() => setCurrentPage('Contact')}
            className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-300 transition"
          >
            Get Started Today
          </button>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Welcome to RCY Printing</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your trusted partner for all printing needs in Santa Rosa, Laguna. 
              We specialize in professional and modern printing solutions for students, 
              walk-ins, small businesses, companies, and government agencies.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesOverview.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-yellow-400"
              >
                <h3 className="font-semibold text-lg text-blue-900">{service}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('Services')}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Ready to Print?</h2>
          <p className="text-xl text-blue-900 mb-8">
            Visit us today or contact us for your printing needs!
          </p>
          <button
            onClick={() => setCurrentPage('Contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}