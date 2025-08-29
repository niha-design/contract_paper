import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Lightbulb } from 'lucide-react';

export const TerminologyTab: React.FC = () => {
  const terminologyPairs = [
    {
      id: 1,
      original: "Indemnification",
      simplified: "Protection from Legal Claims",
      definition: "A legal agreement where one party agrees to protect another from financial loss or legal claims.",
      example: "If someone gets hurt on the job site, the contractor will handle any lawsuits instead of the property owner."
    },
    {
      id: 2,
      original: "Substantial Completion",
      simplified: "Project Almost Finished",
      definition: "When the construction work is finished enough that the owner can use the building for its intended purpose.",
      example: "The house is ready to move into, but small items like touch-up paint might still be needed."
    },
    {
      id: 3,
      original: "Liquidated Damages",
      simplified: "Pre-agreed Penalty Fees",
      definition: "A specific amount of money agreed upon in advance that must be paid if someone breaks the contract.",
      example: "If the contractor finishes the project late, they must pay $500 for each day of delay."
    },
    {
      id: 4,
      original: "Mechanic's Lien",
      simplified: "Claim on Property for Unpaid Work",
      definition: "A legal claim on property that protects contractors and suppliers when they haven't been paid.",
      example: "If the owner doesn't pay, the contractor can file a claim that prevents selling the house until payment is made."
    },
    {
      id: 5,
      original: "Change Order",
      simplified: "Written Request to Modify Work",
      definition: "An official document that changes the original contract terms, scope, or price.",
      example: "The owner wants to add an extra bathroom, so they sign a change order for the additional $15,000 cost."
    },
    {
      id: 6,
      original: "Retainage",
      simplified: "Money Held Until Job Complete",
      definition: "A portion of payment withheld until the project is fully completed to ensure quality work.",
      example: "The owner keeps 10% of each payment and releases it only after all work is finished and approved."
    },
    {
      id: 7,
      original: "As-Built Drawings",
      simplified: "Final Plans Showing What Was Actually Built",
      definition: "Updated construction drawings that show how the building was actually constructed, including any changes.",
      example: "The original plans showed a door on the east wall, but the as-built drawings show it was moved to the south wall."
    },
    {
      id: 8,
      original: "Performance Bond",
      simplified: "Insurance Guaranteeing Work Completion",
      definition: "Insurance that guarantees the contractor will complete the work as promised or someone else will finish it.",
      example: "If the contractor goes out of business, the bonding company will hire another contractor to finish the job."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Legal Terms Made Simple</h3>
        </div>
        <p className="text-gray-700">
          Our AI has identified complex legal terminology in your contract and converted it into plain English. 
          Understanding these terms will help you make better decisions about your construction project.
        </p>
      </div>

      <div className="grid gap-6">
        {terminologyPairs.map((pair, index) => (
          <motion.div
            key={pair.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              {/* Term Comparison */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-red-800 mb-2">Legal Term</h4>
                  <p className="text-lg font-semibold text-red-900">{pair.original}</p>
                  <span className="text-xs text-red-600 mt-2 block">Complex legal language</span>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 hidden md:block">
                    <div className="bg-white border border-gray-300 rounded-full p-2">
                      <ArrowRight className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                  <h4 className="text-sm font-medium text-green-800 mb-2">Plain English</h4>
                  <p className="text-lg font-semibold text-green-900">{pair.simplified}</p>
                  <span className="text-xs text-green-600 mt-2 block">Easy to understand</span>
                </div>
              </div>

              {/* Definition and Example */}
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <h5 className="text-sm font-medium text-blue-800">Definition</h5>
                  </div>
                  <p className="text-sm text-blue-900">{pair.definition}</p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <h5 className="text-sm font-medium text-amber-800">Real-World Example</h5>
                  </div>
                  <p className="text-sm text-amber-900 italic">"{pair.example}"</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 border text-center">
        <h4 className="font-semibold text-gray-900 mb-2">Need More Help?</h4>
        <p className="text-sm text-gray-600 mb-4">
          Our AI has simplified the most common terms, but construction contracts can be complex.
        </p>
        <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition-colors">
          Schedule Legal Consultation
        </button>
      </div>
    </motion.div>
  );
};