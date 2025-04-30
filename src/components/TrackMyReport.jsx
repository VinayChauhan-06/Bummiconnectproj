import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const mockReports = [
  {
    id: 1,
    status: 'Pending',
    date: 'March 18, 2024',
    details: 'Pothole on Main Street',
  },
  {
    id: 2,
    status: 'Resolved',
    date: 'March 10, 2024',
    details: 'Water leakage fixed',
  },
  {
    id: 3,
    status: 'Resolved',
    date: 'March 1, 2024',
    details: 'Street light repaired',
  },
];

const statusStyles = {
  Pending: 'bg-yellow-100 text-yellow-800 border-yellow-400',
  Resolved: 'bg-green-700 text-white border-green-700',
};

const TrackMyReport = () => {
  const navigate = useNavigate();
  const [reports] = useState(mockReports);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-2 py-8">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
        <div className="flex items-center mb-4">
          <button onClick={() => navigate(-1)} className="mr-2 text-gray-700 dark:text-gray-200 hover:text-green-700">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Track My Reports</h2>
        </div>
        <div className="flex flex-col gap-4">
          {reports.map((report) => (
            <motion.div
              key={report.id}
              whileHover={{ scale: 1.01 }}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 flex flex-col gap-2 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`px-3 py-1 rounded-lg text-xs font-semibold border ${statusStyles[report.status] || 'bg-gray-200 text-gray-700 border-gray-300'}`}
                >
                  {report.status}
                </span>
              </div>
              <div className="text-gray-900 dark:text-white font-medium">{report.date}</div>
              <div className="text-gray-500 dark:text-gray-300 text-sm mb-1">{report.details}</div>
              <button
                onClick={() => alert('Show details for report ' + report.id)}
                className="flex items-center text-green-700 dark:text-green-400 font-semibold text-sm hover:underline focus:outline-none"
              >
                View Details <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackMyReport; 