import { serviceCategories } from '../data/servicesData';
import { targetCustomers } from '../data/contactData';

export default function Services() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-blue-900 mb-4">Our Services</h1>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          We offer a comprehensive range of printing services to meet all your needs
        </p>
        
        <div className="space-y-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-4 border-yellow-400 pb-2 inline-block">
                {category.title}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-yellow-400 mr-2 text-xl">✓</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Who We Serve
          </h3>
          <p className="text-lg text-gray-700">
            {targetCustomers.join(' • ')}
          </p>
        </div>
      </div>
    </div>
  );
}