import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

export const VendorLinksTab: React.FC = () => {
  const linkedVendors = [
    {
      id: 1,
      name: "ABC Construction LLC",
      type: "General Contractor",
      foundIn: "Primary contractor mentioned throughout contract",
      rating: 4.8,
      reviews: 127,
      phone: "(555) 123-4567",
      email: "info@abcconstruction.com",
      address: "123 Main Street, City, State",
      verified: true,
      specialties: ["Residential Construction", "Commercial Projects", "Renovation"],
      licenses: ["General Contractor License #GC-12345", "Electrical License #E-6789"],
      insurance: "Fully Insured - $2M Liability"
    },
    {
      id: 2,
      name: "Elite Roofing Solutions",
      type: "Roofing Contractor",
      foundIn: "Referenced in roofing warranty section",
      rating: 4.9,
      reviews: 89,
      phone: "(555) 987-6543",
      email: "contact@eliteroofing.com",
      address: "456 Oak Avenue, City, State",
      verified: true,
      specialties: ["Residential Roofing", "Commercial Roofing", "Warranty Service"],
      licenses: ["Roofing Contractor License #RC-54321"],
      insurance: "Bonded & Insured - $1M Liability"
    },
    {
      id: 3,
      name: "Premier Electric Co.",
      type: "Electrical Contractor",
      foundIn: "Mentioned in electrical work scope",
      rating: 4.6,
      reviews: 156,
      phone: "(555) 456-7890",
      email: "service@premierelectric.com",
      address: "789 Pine Street, City, State",
      verified: false,
      specialties: ["Residential Electrical", "Industrial Electrical", "Emergency Service"],
      licenses: ["Master Electrician License #ME-98765"],
      insurance: "Insured - $1.5M Liability"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Vendor Directory Matches</h3>
        <p className="text-gray-700">
          We found {linkedVendors.length} contractors from your contract in our verified vendor database. 
          Review their profiles and contact information below.
        </p>
      </div>

      <div className="space-y-6">
        {linkedVendors.map((vendor, index) => (
          <motion.div
            key={vendor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">{vendor.name}</h4>
                    {vendor.verified ? (
                      <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        <CheckCircle className="w-3 h-3" />
                        <span>Verified</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1 bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">
                        <AlertCircle className="w-3 h-3" />
                        <span>Unverified</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{vendor.type}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(vendor.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{vendor.rating}</span>
                      <span className="text-sm text-gray-500">({vendor.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 text-sm text-blue-800 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>View Profile</span>
                </button>
              </div>

              {/* Contract Reference */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h5 className="text-sm font-medium text-blue-800 mb-2">Found in Contract:</h5>
                <p className="text-sm text-blue-900 italic">"{vendor.foundIn}"</p>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="space-y-3">
                  <h5 className="text-sm font-medium text-gray-900">Contact Information</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span>{vendor.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>{vendor.email}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                      <span>{vendor.address}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-sm font-medium text-gray-900">Specialties</h5>
                  <div className="flex flex-wrap gap-2">
                    {vendor.specialties.map((specialty, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-sm font-medium text-gray-900">Credentials</h5>
                  <div className="space-y-2 text-xs">
                    {vendor.licenses.map((license, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{license}</span>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>{vendor.insurance}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button className="flex-1 bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Contact Vendor
                </button>
                <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium py-2 px-4 rounded-lg transition-colors">
                  Save to Favorites
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium py-2 px-4 rounded-lg transition-colors">
                  Report Issue
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 border text-center">
        <h4 className="font-semibold text-gray-900 mb-2">Can't Find a Vendor?</h4>
        <p className="text-sm text-gray-600 mb-4">
          Add new vendors to our database or request verification for existing ones.
        </p>
        <div className="flex justify-center space-x-3">
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition-colors">
            Add New Vendor
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium py-2 px-4 rounded-lg transition-colors">
            Request Verification
          </button>
        </div>
      </div>
    </motion.div>
  );
};