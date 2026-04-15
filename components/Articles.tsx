import React, { useEffect, useState } from 'react';

interface Article {
  title: string;
  date: string;
  summary: string;
  url: string;
  tag?: string;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('/articles.json')
      .then(r => r.json())
      .then(data => setArticles(data))
      .catch(() => setArticles([]));
  }, []);

  if (articles.length === 0) return null;

  return (
    <section id="articles" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">Latest Articles</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-8 rounded-3xl hover:border-blue-500/30 transition-all group hover:-translate-y-2 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                {article.tag && (
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                    {article.tag}
                  </span>
                )}
                <span className="text-gray-600 text-xs ml-auto">
                  {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-blue-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{article.summary}</p>
              <div className="mt-6 flex items-center text-blue-400 text-sm font-bold group-hover:translate-x-2 transition-transform">
                Read full article
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
