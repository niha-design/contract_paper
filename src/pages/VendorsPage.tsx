import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Phone, Mail, MapPin, Filter, CheckCircle, Building, Users, Award } from 'lucide-react';

export const VendorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const vendors = [
    {
      id: 1,
      name: "ABC Construction LLC",
      category: "General Contractor",
      location: "New York, NY",
      rating: 4.8,
      reviews: 127,
      phone: "(555) 123-4567",
      email: "info@abcconstruction.com",
      address: "123 Main Street, New York, NY 10001",
      verified: true,
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Residential Construction", "Commercial Projects", "Renovation"],
      licenses: ["General Contractor License #GC-12345"],
      insurance: "Fully Insured - $2M Liability",
      yearsExperience: 15,
      completedProjects: 342,
      description: "Premier general contractor specializing in high-quality residential and commercial construction projects across New York."
    },
    {
      id: 2,
      name: "Elite Roofing Solutions",
      category: "Roofing Contractor",
      location: "Brooklyn, NY",
      rating: 4.9,
      reviews: 89,
      phone: "(555) 987-6543",
      email: "contact@eliteroofing.com",
      address: "456 Oak Avenue, Brooklyn, NY 11201",
      verified: true,
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Residential Roofing", "Commercial Roofing", "Emergency Repairs"],
      licenses: ["Roofing Contractor License #RC-54321"],
      insurance: "Bonded & Insured - $1M Liability",
      yearsExperience: 12,
      completedProjects: 156,
      description: "Expert roofing contractors providing comprehensive roofing solutions with industry-leading warranties."
    },
    {
      id: 3,
      name: "Premier Electric Co.",
      category: "Electrical Contractor",
      location: "Queens, NY",
      rating: 4.6,
      reviews: 156,
      phone: "(555) 456-7890",
      email: "service@premierelectric.com",
      address: "789 Pine Street, Queens, NY 11354",
      verified: false,
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Residential Electrical", "Industrial Electrical", "Emergency Service"],
      licenses: ["Master Electrician License #ME-98765"],
      insurance: "Insured - $1.5M Liability",
      yearsExperience: 18,
      completedProjects: 423,
      description: "Licensed master electricians providing safe and reliable electrical services for all types of projects."
    },
    {
      id: 4,
      name: "Manhattan Plumbing Pros",
      category: "Plumbing Contractor",
      location: "Manhattan, NY",
      rating: 4.7,
      reviews: 203,
      phone: "(555) 321-9876",
      email: "info@manhattanplumbing.com",
      address: "321 Broadway, Manhattan, NY 10007",
      verified: true,
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Residential Plumbing", "Commercial Plumbing", "24/7 Emergency"],
      licenses: ["Master Plumber License #MP-13579"],
      insurance: "Licensed & Insured - $1M Liability",
      yearsExperience: 20,
      completedProjects: 567,
      description: "Full-service plumbing contractor with two decades of experience serving Manhattan's residential and commercial properties."
    },
    {
      id: 5,
      name: "Bronx Concrete Works",
      category: "Concrete Contractor",
      location: "Bronx, NY",
      rating: 4.5,
      reviews: 94,
      phone: "(555) 654-3210",
      email: "sales@bronxconcrete.com",
      address: "654 Concourse Avenue, Bronx, NY 10451",
      verified: true,
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Foundation Work", "Driveways", "Decorative Concrete"],
      licenses: ["Concrete Contractor License #CC-24680"],
      insurance: "Bonded & Insured - $1.5M Liability",
      yearsExperience: 14,
      completedProjects: 289,
      description: "Specializing in residential and commercial concrete work with a focus on quality craftsmanship and durability."
    },
    {
      id: 6,
      name: "Staten Island HVAC Systems",
      category: "HVAC Contractor",
      location: "Staten Island, NY",
      rating: 4.8,
      reviews: 167,
      phone: "(555) 789-0123",
      email: "contact@sihvac.com",
      address: "789 Richmond Avenue, Staten Island, NY 10314",
      verified: true,
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["HVAC Installation", "Maintenance", "Energy Efficiency"],
      licenses: ["HVAC Contractor License #HC-11223"],
      insurance: "Licensed & Insured - $2M Liability",
      yearsExperience: 16,
      completedProjects: 378,
      description: "Leading HVAC contractor providing energy-efficient heating and cooling solutions for residential and commercial properties."
    }
  ];

  const categories = ["All", "General Contractor", "Roofing Contractor", "Electrical Contractor", "Plumbing Contractor", "Concrete Contractor", "HVAC Contractor"];
  const locations = ["All", "Manhattan, NY", "Brooklyn, NY", "Queens, NY", "Bronx, NY", "Staten Island, NY"];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || vendor.category === selectedCategory;
    const matchesLocation = selectedLocation === "All" || vendor.location === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Vendor Directory</h1>
          <p className="text-gray-600">Find verified construction professionals in your area</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search vendors or specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Building className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-blue-800">{vendors.length}</div>
                <div className="text-sm text-blue-600">Total Vendors</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-green-800">{vendors.filter(v => v.verified).length}</div>
                <div className="text-sm text-green-600">Verified Vendors</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-amber-50 rounded-lg">
              <Award className="w-8 h-8 text-amber-600" />
              <div>
                <div className="text-2xl font-bold text-amber-800">4.7</div>
                <div className="text-sm text-amber-600">Average Rating</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
              <Users className="w-8 h-8 text-purple-600" />
              <div>
                <div className="text-2xl font-bold text-purple-800">2,355</div>
                <div className="text-sm text-purple-600">Total Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredVendors.length} of {vendors.length} vendors
          </p>
        </div>

        {/* Vendors Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredVendors.map((vendor, index) => (
            <motion.div
              key={vendor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">{vendor.name}</h3>
                      {vendor.verified && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{vendor.category}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(vendor.rating) ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-gray-900">{vendor.rating}</span>
                        <span className="text-sm text-gray-500">({vendor.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{vendor.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{vendor.yearsExperience}</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{vendor.completedProjects}</div>
                    <div className="text-xs text-gray-600">Completed Projects</div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {vendor.specialties.map((specialty, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-sm mb-4">
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

                {/* Credentials */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Credentials</h4>
                  <div className="space-y-1 text-xs">
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

                {/* Actions */}
                <div className="flex space-x-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Contact Vendor
                  </button>
                  <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium py-2 px-4 rounded-lg transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredVendors.length === 0 && (
          <div className="text-center py-12">
            <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No vendors found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition-colors">
              Add New Vendor
            </button>
          </div>
        )}
      </div>
    </div>
  );
};