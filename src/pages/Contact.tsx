import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';
import { businessInfo } from '../data/contactData';

export default function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-blue-900 mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Get In Touch</h2>
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start">
                  <MapPin className="text-yellow-400 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg text-blue-900">Address</h3>
                    <p className="text-gray-700">{businessInfo.address.street}</p>
                    <p className="text-gray-700">{businessInfo.address.city}</p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start">
                  <Phone className="text-yellow-400 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg text-blue-900">Phone</h3>
                    {businessInfo.contact.phones.map((phone, index) => (
                      <p key={index} className="text-gray-700">{phone}</p>
                    ))}
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start">
                  <Mail className="text-yellow-400 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg text-blue-900">Email</h3>
                    <p className="text-gray-700">{businessInfo.contact.email}</p>
                  </div>
                </div>
                {/* Business Hours */}
                <div className="flex items-start">
                  <Clock className="text-yellow-400 mt-1 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg text-blue-900">Business Hours</h3>
                    <p className="text-gray-700">{businessInfo.hours}</p>
                  </div>
                </div>
              </div>
              {/* Follow Us */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-semibold text-lg text-blue-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/RCYPRINTING"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
                  >
                    <Facebook size={24} />
                  </a>
                  {/* Instagram icon removed */}
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Placeholder */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Visit Our Shop</h2>
            <iframe
              title="Location map"
              className="w-full h-96 rounded-lg"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=896+RIZAL+BLVD.+BRGY.+LABAS+CITY+OF+SANTA+ROSA+LAGUNA`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
