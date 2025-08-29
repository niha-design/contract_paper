import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, AlertTriangle, CheckCircle, ArrowRight, Eye } from 'lucide-react';
import { ProcessingSteps } from '../components/ProcessingSteps';
import { ResultTabs } from '../components/ResultTabs';

export const ProcessPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const steps = [
    { title: 'Extracting Text', description: 'OCR processing document content...' },
    { title: 'Analyzing Clauses', description: 'Identifying contract sections and terms...' },
    { title: 'Detecting Risks', description: 'AI-powered risk assessment in progress...' },
    { title: 'Simplifying Terms', description: 'Converting legal jargon to plain language...' },
  ];

  useEffect(() => {
    if (!showResults) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < steps.length - 1) {
            return prev + 1;
          } else {
            setIsComplete(true);
            setTimeout(() => setShowResults(true), 1000);
            return prev;
          }
        });
      }, 1500);

      return () => clearInterval(timer);
    }
  }, [showResults]);

  if (!showResults) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <ProcessingSteps 
          steps={steps} 
          currentStep={currentStep} 
          isComplete={isComplete} 
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contract Analysis Results</h1>
          <p className="text-gray-600">Review the extracted information and risk assessment</p>
        </div>

        <ResultTabs />
      </div>
    </motion.div>
  );
};