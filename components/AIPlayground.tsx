import React, { useState } from 'react';
import { generateProfessionalAnalysis } from '../services/gemini';

const AIPlayground: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const analysis = await generateProfessionalAnalysis(input);
      setResult(analysis || 'Analysis complete.');
    } catch (err) {
      setResult('Service temporarily unavailable. Please contact us directly at info@wesleyai.com.tw');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="playground" className="py-24 bg-[#050b1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gradient font-display text-4xl md:text-5xl font-bold mb-6">CRA Compliance Advisor</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ask a question about EU Cyber Resilience Act compliance, energy AI regulations, or how these affect Taiwan manufacturers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
             <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
             </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Your Question</label>
              <textarea 
                className="w-full h-32 bg-black/40 border border-white/10 rounded-2xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-all resize-none"
                placeholder="e.g. Our EV charger exports to Germany — what CRA requirements apply to us?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            <button 
              onClick={handleAnalyze}
              disabled={loading || !input}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold flex items-center justify-center space-x-2 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
              ) : (
                <>
                  <span>Get AI Analysis</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </>
              )}
            </button>

            {result && (
              <div className="mt-8">
                <label className="block text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">Advisory Response</label>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-gray-200 leading-relaxed font-light">
                  {result}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlayground;
