import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Edit, Eye, Plus, Search } from 'lucide-react';
import { TemplateEditor } from '../components/TemplateEditor';

export const TemplatesPage: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const templates = [
    {
      id: 1,
      name: "General Construction Agreement",
      description: "Standard contract for residential and commercial construction projects",
      category: "General",
      lastModified: "2024-01-15",
      downloads: 1247,
      fields: 23,
      preview: "This Construction Agreement is made between [CONTRACTOR_NAME] and [OWNER_NAME] for construction work at [PROJECT_ADDRESS]..."
    },
    {
      id: 2,
      name: "Subcontractor Agreement",
      description: "Contract template for hiring subcontractors on construction projects",
      category: "Subcontractor",
      lastModified: "2024-01-12",
      downloads: 892,
      fields: 19,
      preview: "This Subcontractor Agreement is between [GENERAL_CONTRACTOR] and [SUBCONTRACTOR] for [WORK_DESCRIPTION]..."
    },
    {
      id: 3,
      name: "Material Supply Agreement",
      description: "Agreement for material suppliers and construction companies",
      category: "Supply",
      lastModified: "2024-01-10",
      downloads: 634,
      fields: 16,
      preview: "This Material Supply Agreement is between [SUPPLIER_NAME] and [CONTRACTOR_NAME] for the supply of [MATERIALS]..."
    },
    {
      id: 4,
      name: "Change Order Template",
      description: "Template for documenting project changes and cost adjustments",
      category: "Change Management",
      lastModified: "2024-01-08",
      downloads: 756,
      fields: 12,
      preview: "Change Order #[CHANGE_NUMBER] for project [PROJECT_NAME]. Description of change: [CHANGE_DESCRIPTION]..."
    },
    {
      id: 5,
      name: "Payment Schedule Agreement",
      description: "Detailed payment milestone template for construction projects",
      category: "Financial",
      lastModified: "2024-01-05",
      downloads: 543,
      fields: 15,
      preview: "Payment Schedule for [PROJECT_NAME]. Total Contract Value: [TOTAL_AMOUNT]. Payment milestones..."
    },
    {
      id: 6,
      name: "Warranty and Maintenance Agreement",
      description: "Post-construction warranty and maintenance service agreement",
      category: "Warranty",
      lastModified: "2024-01-03",
      downloads: 421,
      fields: 18,
      preview: "Warranty Agreement for [PROJECT_NAME] completed on [COMPLETION_DATE]. Warranty period: [WARRANTY_PERIOD]..."
    }
  ];

  const categories = ["All", "General", "Subcontractor", "Supply", "Change Management", "Financial", "Warranty"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleUseTemplate = (templateId: number) => {
    setSelectedTemplate(templateId);
    setIsEditing(true);
  };

  if (isEditing && selectedTemplate) {
    const template = templates.find(t => t.id === selectedTemplate);
    return (
      <TemplateEditor 
        template={template!} 
        onBack={() => {
          setIsEditing(false);
          setSelectedTemplate(null);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contract Templates</h1>
          <p className="text-gray-600">Professional construction contract templates ready to customize</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create New Template</span>
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Templates List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <FileText className="w-6 h-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {template.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{template.description}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <span>{template.fields} fields</span>
                      <span>{template.downloads} downloads</span>
                      <span>Updated {template.lastModified}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Preview</h4>
                  <p className="text-sm text-gray-600 italic">{template.preview}</p>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleUseTemplate(template.id)}
                    className="flex-1 bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Use Template</span>
                  </button>
                  <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium py-2 px-4 rounded-lg transition-colors flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>Preview</span>
                  </button>
                  <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium py-2 px-4 rounded-lg transition-colors flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Templates</span>
                  <span className="font-semibold">{templates.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Most Popular</span>
                  <span className="font-semibold">General Construction</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Downloads</span>
                  <span className="font-semibold">4,493</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Custom Templates?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our legal experts can create custom contract templates tailored to your specific needs.
              </p>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Request Custom Template
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">General Construction template updated</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">New Warranty template added</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-gray-600">Payment Schedule template downloaded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};