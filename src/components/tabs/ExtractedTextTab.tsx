import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Download } from 'lucide-react';

export const ExtractedTextTab: React.FC = () => {
  const extractedText = `CONSTRUCTION AGREEMENT

This Construction Agreement ("Agreement") is made on [Date] between ABC Construction LLC ("Contractor") located at 123 Main Street, City, State ZIP and John Smith ("Owner") located at 456 Oak Avenue, City, State ZIP.

SCOPE OF WORK
The Contractor agrees to perform the following work:
- Foundation excavation and concrete pouring
- Framing and structural work
- Roofing installation with 25-year warranty materials
- Electrical rough-in and final installation
- Plumbing rough-in and fixture installation
- Drywall installation and finishing
- Interior and exterior painting

PAYMENT TERMS
Total contract amount: $125,000
Payment schedule:
- 10% deposit upon signing: $12,500
- 25% upon completion of foundation: $31,250  
- 25% upon completion of framing: $31,250
- 25% upon completion of rough-in: $31,250
- 15% final payment upon completion: $18,750

TIMELINE
Work shall commence on [Start Date] and be substantially completed within 120 days.

TERMINATION CLAUSE
Either party may terminate this agreement with 30 days written notice. In case of termination, the Owner shall pay for all work completed and materials purchased.

INDEMNIFICATION
The Contractor shall indemnify and hold harmless the Owner from any claims, damages, or liabilities arising from the performance of this work.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(extractedText);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Extracted Contract Text</h3>
        <div className="flex space-x-2">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
          >
            <Copy className="w-4 h-4" />
            <span>Copy</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 text-sm text-white bg-blue-800 hover:bg-blue-900 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 border">
        <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
          {extractedText}
        </pre>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="text-2xl font-bold text-blue-800">1,247</div>
          <div className="text-sm text-blue-600">Words Extracted</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="text-2xl font-bold text-green-800">98.5%</div>
          <div className="text-sm text-green-600">OCR Accuracy</div>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <div className="text-2xl font-bold text-amber-800">7</div>
          <div className="text-sm text-amber-600">Key Sections</div>
        </div>
      </div>
    </motion.div>
  );
};