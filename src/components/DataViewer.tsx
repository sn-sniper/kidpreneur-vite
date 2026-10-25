import React from 'react';
import { useSessions } from '../hooks/useSessions';

export const DataViewer: React.FC = () => {
  const { data: sessions, loading, error } = useSessions();

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <p className="text-gray-500 animate-pulse">Loading sessions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <h3 className="text-red-800 font-semibold">Error</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!sessions.length) {
    return <p className="p-4 text-gray-500">No sessions found.</p>;
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Kidpreneur Sessions</h2>
      <ul className="space-y-2">
        {sessions.map((session) => (
          <li 
            key={session.id} 
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-lg">{session.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
