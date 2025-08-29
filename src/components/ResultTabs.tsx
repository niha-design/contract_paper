import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, ArrowRightLeft, Building } from 'lucide-react';
import { ExtractedTextTab } from './tabs/ExtractedTextTab';
import { HighlightedClausesTab } from './tabs/HighlightedClausesTab';
import { TerminologyTab } from './tabs/TerminologyTab';
import { VendorLinksTab } from './tabs/VendorLinksTab';

export const ResultTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 'extracted', label: 'Extracted Text', icon: FileText, component: ExtractedTextTab },
    { id: 'clauses', label: 'Highlighted Clauses', icon: AlertTriangle, component: HighlightedClausesTab },
    { id: 'terminology', label: 'Terminology Conversion', icon: ArrowRightLeft, component: TerminologyTab },
    { id: 'vendors', label: 'Vendor Links', icon: Building, component: VendorLinksTab },
  ];

  const ActiveComponent = tabs[activeTab].component;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`relative py-4 px-1 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === index
                  ? 'text-blue-800 border-b-2 border-amber-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </div>
              {activeTab === index && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ActiveComponent />
        </motion.div>
      </div>
    </div>
  );
};