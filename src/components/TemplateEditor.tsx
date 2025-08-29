import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Download, Eye, FileText, Edit } from 'lucide-react';

interface Template {
  id: number;
  name: string;
  description: string;
  category: string;
  fields: number;
}

interface TemplateEditorProps {
  template: Template;
  onBack: () => void;
}

export const TemplateEditor: React.FC<TemplateEditorProps> = ({ template, onBack }) => {
  const [activeTab, setActiveTab] = useState('edit');
  const [formData, setFormData] = useState({
    contractorName: '',
    contractorAddress: '',
    ownerName: '',
    ownerAddress: '',
    projectAddress: '',
    projectDescription: '',
    contractAmount: '',
    startDate: '',
    completionDate: '',
    paymentSchedule: 'milestone',
    warrantyPeriod: '12 months'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contractTemplate = `GENERAL CONSTRUCTION AGREEMENT

This Construction Agreement ("Agreement") is made on ${formData.startDate || '[START_DATE]'} between ${formData.contractorName || '[CONTRACTOR_NAME]'} ("Contractor") located at ${formData.contractorAddress || '[CONTRACTOR_ADDRESS]'} and ${formData.ownerName || '[OWNER_NAME]'} ("Owner") located at ${formData.ownerAddress || '[OWNER_ADDRESS]'}.

SCOPE OF WORK
The Contractor agrees to perform construction work at ${formData.projectAddress || '[PROJECT_ADDRESS]'} including:
${formData.projectDescription || '[PROJECT_DESCRIPTION]'}

PAYMENT TERMS
Total contract amount: ${formData.contractAmount || '[CONTRACT_AMOUNT]'}
Payment schedule: ${formData.paymentSchedule === 'milestone' ? 'Milestone-based payments' : 'Monthly payments'}

TIMELINE
Work shall commence on ${formData.startDate || '[START_DATE]'} and be substantially completed by ${formData.completionDate || '[COMPLETION_DATE]'}.

WARRANTY
The Contractor provides a ${formData.warrantyPeriod || '[WARRANTY_PERIOD]'} warranty on all work performed.

TERMINATION
Either party may terminate this agreement with 30 days written notice.

INDEMNIFICATION
The Contractor shall indemnify and hold harmless the Owner from any claims, damages, or liabilities arising from the performance of this work.

IN WITNESS WHEREOF, the parties have executed this Agreement on the date first written above.

CONTRACTOR: ____________________    DATE: __________
${formData.contractorName || '[CONTRACTOR_NAME]'}

OWNER: ____________________         DATE: __________
${formData.ownerName || '[OWNER_NAME]'}`;

  const tabs = [
    { id: 'edit', label: 'Edit Fields', icon: Edit },
    { id: 'preview', label: 'Preview Contract', icon: Eye },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Templates</span>
              </button>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{template.name}</h1>
                <p className="text-sm text-gray-600">Customize and generate your contract</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Save className="w-4 h-4" />
                <span>Save Draft</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative py-4 px-1 text-sm font-medium whitespace-nowrap transition-colors ${
                        activeTab === tab.id
                          ? 'text-blue-800 border-b-2 border-amber-500'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <tab.icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'edit' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Contract Details</h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Contractor Name
                          </label>
                          <input
                            type="text"
                            value={formData.contractorName}
                            onChange={(e) => handleInputChange('contractorName', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter contractor name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Contractor Address
                          </label>
                          <input
                            type="text"
                            value={formData.contractorAddress}
                            onChange={(e) => handleInputChange('contractorAddress', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter contractor address"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Owner Name
                          </label>
                          <input
                            type="text"
                            value={formData.ownerName}
                            onChange={(e) => handleInputChange('ownerName', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter owner name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Owner Address
                          </label>
                          <input
                            type="text"
                            value={formData.ownerAddress}
                            onChange={(e) => handleInputChange('ownerAddress', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter owner address"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Project Address
                          </label>
                          <input
                            type="text"
                            value={formData.projectAddress}
                            onChange={(e) => handleInputChange('projectAddress', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter project address"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Project Description
                          </label>
                          <textarea
                            value={formData.projectDescription}
                            onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Describe the work to be performed"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Contract Amount
                            </label>
                            <input
                              type="text"
                              value={formData.contractAmount}
                              onChange={(e) => handleInputChange('contractAmount', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="$0.00"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Warranty Period
                            </label>
                            <select
                              value={formData.warrantyPeriod}
                              onChange={(e) => handleInputChange('warrantyPeriod', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="6 months">6 months</option>
                              <option value="12 months">12 months</option>
                              <option value="24 months">24 months</option>
                              <option value="36 months">36 months</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Start Date
                            </label>
                            <input
                              type="date"
                              value={formData.startDate}
                              onChange={(e) => handleInputChange('startDate', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Completion Date
                            </label>
                            <input
                              type="date"
                              value={formData.completionDate}
                              onChange={(e) => handleInputChange('completionDate', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Payment Schedule
                          </label>
                          <select
                            value={formData.paymentSchedule}
                            onChange={(e) => handleInputChange('paymentSchedule', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="milestone">Milestone-based</option>
                            <option value="monthly">Monthly payments</option>
                            <option value="lump-sum">Lump sum on completion</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'preview' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gray-50 rounded-lg p-6 border"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <FileText className="w-6 h-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Contract Preview</h3>
                    </div>
                    <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
                      {contractTemplate}
                    </pre>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel - Live Preview */}
          <div className="bg-white rounded-lg shadow-sm border p-6 h-fit">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Preview</h3>
            <div className="bg-gray-50 rounded-lg p-6 border max-h-96 overflow-y-auto">
              <pre className="whitespace-pre-wrap text-xs text-gray-800 font-mono leading-relaxed">
                {contractTemplate}
              </pre>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Progress: {Object.values(formData).filter(v => v.length > 0).length}/{Object.keys(formData).length} fields completed</span>
                <span>{contractTemplate.length} characters</span>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(Object.values(formData).filter(v => v.length > 0).length / Object.keys(formData).length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};