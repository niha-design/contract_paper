import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';

interface ProcessingStepsProps {
  steps: { title: string; description: string }[];
  currentStep: number;
  isComplete: boolean;
}

export const ProcessingSteps: React.FC<ProcessingStepsProps> = ({ steps, currentStep, isComplete }) => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Processing Your Contract</h1>
        <p className="text-gray-600">Our AI is analyzing your document. This may take a few moments.</p>
      </motion.div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
              index <= currentStep 
                ? 'bg-blue-50 border-l-4 border-blue-500' 
                : 'bg-gray-50 border-l-4 border-gray-300'
            }`}
          >
            <div className="flex-shrink-0">
              {index < currentStep || isComplete ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : index === currentStep ? (
                <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
              )}
            </div>
            
            <div className="flex-1">
              <h3 className={`font-semibold ${
                index <= currentStep ? 'text-blue-900' : 'text-gray-500'
              }`}>
                {step.title}
              </h3>
              <p className={`text-sm ${
                index <= currentStep ? 'text-blue-700' : 'text-gray-400'
              }`}>
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200 text-center"
        >
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-900 mb-2">Processing Complete!</h3>
          <p className="text-green-700">Your contract has been successfully analyzed.</p>
        </motion.div>
      )}
    </div>
  );
};