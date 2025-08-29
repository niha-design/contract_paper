import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Info, DollarSign, Clock, Shield } from 'lucide-react';

export const HighlightedClausesTab: React.FC = () => {
  const clauses = [
    {
      id: 1,
      title: "Payment Terms",
      risk: "low",
      icon: DollarSign,
      text: "Payment schedule: 10% deposit, 25% upon foundation completion, 25% upon framing, 25% upon rough-in, 15% final payment.",
      analysis: "Standard payment schedule with reasonable milestone-based payments. Low risk.",
      category: "Financial"
    },
    {
      id: 2,
      title: "Termination Clause",
      risk: "high",
      icon: AlertTriangle,
      text: "Either party may terminate this agreement with 30 days written notice. Owner pays for completed work and materials.",
      analysis: "High risk: Allows contractor to terminate without cause, potentially leaving project incomplete.",
      category: "Contract Terms"
    },
    {
      id: 3,
      title: "Timeline Requirements",
      risk: "medium",
      icon: Clock,
      text: "Work shall commence on [Start Date] and be substantially completed within 120 days.",
      analysis: "Timeline seems reasonable but lacks penalty clauses for delays. Consider adding liquidated damages.",
      category: "Schedule"
    },
    {
      id: 4,
      title: "Indemnification",
      risk: "high",
      icon: Shield,
      text: "The Contractor shall indemnify and hold harmless the Owner from any claims, damages, or liabilities.",
      analysis: "Very broad indemnification clause. Consider mutual indemnification or limiting scope.",
      category: "Legal"
    },
    {
      id: 5,
      title: "Warranty Coverage",
      risk: "low",
      icon: CheckCircle,
      text: "Roofing installation with 25-year warranty materials provided by manufacturer.",
      analysis: "Good warranty terms clearly specified. Manufacturer warranty provides additional protection.",
      category: "Quality"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'border-red-300 bg-red-50';
      case 'medium': return 'border-amber-300 bg-amber-50';
      case 'low': return 'border-green-300 bg-green-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-amber-100 text-amber-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const riskSummary = {
    high: clauses.filter(c => c.risk === 'high').length,
    medium: clauses.filter(c => c.risk === 'medium').length,
    low: clauses.filter(c => c.risk === 'low').length,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Risk Summary */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Assessment Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg border border-red-200">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            <div>
              <div className="text-2xl font-bold text-red-800">{riskSummary.high}</div>
              <div className="text-sm text-red-600">High Risk Clauses</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <Info className="w-8 h-8 text-amber-500" />
            <div>
              <div className="text-2xl font-bold text-amber-800">{riskSummary.medium}</div>
              <div className="text-sm text-amber-600">Medium Risk Clauses</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <div>
              <div className="text-2xl font-bold text-green-800">{riskSummary.low}</div>
              <div className="text-sm text-green-600">Low Risk Clauses</div>
            </div>
          </div>
        </div>
      </div>

      {/* Clause Analysis */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Detailed Clause Analysis</h3>
        {clauses.map((clause, index) => (
          <motion.div
            key={clause.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`border rounded-lg p-6 ${getRiskColor(clause.risk)}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <clause.icon className={`w-6 h-6 ${
                  clause.risk === 'high' ? 'text-red-600' :
                  clause.risk === 'medium' ? 'text-amber-600' : 'text-green-600'
                }`} />
                <div>
                  <h4 className="font-semibold text-gray-900">{clause.title}</h4>
                  <span className="text-sm text-gray-600">{clause.category}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskBadge(clause.risk)}`}>
                {clause.risk.toUpperCase()} RISK
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border">
                <h5 className="text-sm font-medium text-gray-900 mb-2">Contract Text:</h5>
                <p className="text-sm text-gray-700 italic">"{clause.text}"</p>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h5 className="text-sm font-medium text-gray-900 mb-2">AI Analysis:</h5>
                <p className="text-sm text-gray-700">{clause.analysis}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};