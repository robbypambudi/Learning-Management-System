'use client';
import React, { useState } from 'react';

import { AppSidebar } from '@/components/app-sidebar';

const AskAI: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAskAI = async () => {
    if (!question.trim()) {
      alert('Please enter a question.');
      return;
    }

    setIsLoading(true);
    setResponse(null);

    try {
      // Simulate AI response or use an API call to OpenAI
      const aiResponse = await fakeAIResponse(question); // Replace with actual API call
      setResponse(aiResponse);
    } catch (error) {
      setResponse('Oops! Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Simulated AI response for demo
  const fakeAIResponse = (input: string): Promise<string> =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(`This is a simulated response to your question: "${input}"`);
      }, 1500)
    );

  return (
    <AppSidebar>
      <main className='p-6'>
        <div className='p-6 bg-gray-100 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Ask AI</h2>
          <textarea
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            rows={4}
            placeholder='Type your question here...'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
          <button
            className='mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
            onClick={handleAskAI}
            disabled={isLoading}
          >
            {isLoading ? 'Thinking...' : 'Ask AI'}
          </button>
          {response && (
            <div className='mt-6 p-4 bg-white rounded-lg border border-gray-300'>
              <h3 className='font-semibold text-gray-700 mb-2'>AI Response:</h3>
              <p className='text-gray-800'>{response}</p>
            </div>
          )}
        </div>
      </main>
    </AppSidebar>
  );
};

export default AskAI;
