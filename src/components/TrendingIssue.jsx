import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Leaf } from 'lucide-react';

const trendingIssues = [
  {
    id: 1,
    type: 'Citizen',
    title: 'Overflowing Garbage Bin',
    description: 'The garbage bin near the main market is overflowing and causing a foul smell.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    tags: ['Sanitation', 'Public Health'],
    location: 'Main Market, City Center',
  },
  {
    id: 2,
    type: 'Farmer',
    title: 'Pest Infestation in Crops',
    description: 'Several farms in the village are facing pest attacks, damaging the wheat crop.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    tags: ['Agriculture', 'Pest'],
    location: 'Village Farms, Block A',
  },
  {
    id: 3,
    type: 'Citizen',
    title: 'Broken Street Light',
    description: 'A street light has been broken for weeks, making the area unsafe at night.',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80',
    tags: ['Safety', 'Infrastructure'],
    location: 'Sector 12, Near Park',
  },
  {
    id: 4,
    type: 'Farmer',
    title: 'Irrigation Water Shortage',
    description: 'Farmers are struggling due to irregular water supply for irrigation.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80',
    tags: ['Water', 'Farming'],
    location: 'Canal Side, Village B',
  },
];

const typeStyles = {
  Citizen: 'bg-blue-100 text-blue-800',
  Farmer: 'bg-green-100 text-green-800',
};

const TrendingIssue = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-2 py-8">
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Trending Local Issues</h2>
        <div className="flex flex-col gap-6">
          {trendingIssues.map((issue) => (
            <motion.div
              key={issue.id}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg overflow-hidden cursor-pointer transition-all"
              onClick={() => setSelected(selected === issue.id ? null : issue.id)}
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="w-full md:w-48 h-40 object-cover"
                  loading="lazy"
                />
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${typeStyles[issue.type]}`}>{issue.type}</span>
                      {issue.type === 'Citizen' ? <User className="h-4 w-4 text-blue-600" /> : <Leaf className="h-4 w-4 text-green-600" />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{issue.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {issue.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-700 dark:text-gray-200">{tag}</span>
                      ))}
                    </div>
                    <div className="text-gray-500 dark:text-gray-300 text-sm mb-1">{issue.location}</div>
                    <motion.p
                      initial={false}
                      animate={{ height: selected === issue.id ? 'auto' : 0, opacity: selected === issue.id ? 1 : 0 }}
                      className={`overflow-hidden transition-all duration-300 text-gray-700 dark:text-gray-200 text-base ${selected === issue.id ? 'mt-2' : ''}`}
                    >
                      {issue.description}
                    </motion.p>
                  </div>
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={e => { e.stopPropagation(); alert('View details for ' + issue.title); }}
                      className="text-green-700 dark:text-green-400 font-semibold text-sm hover:underline focus:outline-none"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingIssue; 