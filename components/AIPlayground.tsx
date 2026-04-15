import React, { useState } from 'react';

const FORMSPREE_ID = 'mbdqjrwj';

const CRAEnquiry: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !question.trim()) {
      alert('Please fill in all fields.');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          question,
          _subject: `CRA Enquiry from ${name}`,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setName(''); setEmail(''); setQuestion('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-[#050b1a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gradient font-display text-4xl md:text-5xl font-bold mb-6">Ask a CRA Question</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a specific question about EU Cyber Resilience Act compliance for your product? Submit it here — Wesley will respond personally within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto glass p-8 md:p-12 rounded-[2rem] shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Question received</h3>
              <p className="text-gray-400">Wesley will respond to <span className="text-blue-400">{email || 'your email'}</span> within 24 hours.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 px-6 py-3 border border-white/20 rounded-xl text-sm text-gray-400 hover:text-white hover:border-white/40 transition-all"
              >
                Ask another question
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-all"
                    placeholder="Jane Chen"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Work Email</label>
                  <input
                    type="email"
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-all"
                    placeholder="you@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Your Question</label>
                <textarea
                  className="w-full h-36 bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-all resize-none"
                  placeholder="e.g. Our EV charger exports to Germany — what CRA requirements apply to the firmware update mechanism?"
                  value={question}
                  onChange={e => setQuestion(e.target.value)}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold flex items-center justify-center space-x-2 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                ) : (
                  <>
                    <span>Send Question</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email directly at wesley@wesleyai.com.tw</p>
              )}

              <p className="text-gray-600 text-xs text-center">
                Wesley responds personally to every enquiry — usually within 24 hours on business days.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CRAEnquiry;
