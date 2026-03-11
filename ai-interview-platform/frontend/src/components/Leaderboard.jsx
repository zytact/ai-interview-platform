
import React from 'react';

const Leaderboard = ({ candidates }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-slate-900">Leaderboard</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 leaderboard-table">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Candidate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Overall Score</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Time Taken (min)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Integrity</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {candidates.map((candidate, index) => (
              <tr key={candidate.id} className="hover:bg-slate-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">{candidate.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">{candidate.overallScore}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">{candidate.timeTaken}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">{candidate.integrity}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
