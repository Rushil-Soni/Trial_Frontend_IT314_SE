// src/pages/Responder.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import ResponderHeader from '../components/ResponderHeader';
import MapPanel from '../components/MapPanel';
import LiveIncidentUpdates from '../components/LiveIncidentUpdates';
import ToDoList from '../components/ToDoList';
import LiveChatSupport from '../components/LiveChatSupport';
import '../styles.css';

export default function Responder() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <ResponderHeader />
      <div className="p-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded shadow">
              <MapPanel />
            </div>
            <LiveIncidentUpdates />
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <ToDoList />
            <LiveChatSupport />
          </div>
        </div>
      </div>
    </div>
  );
}
