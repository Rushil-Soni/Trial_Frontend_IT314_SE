import React from 'react';
import '../styles.css';

interface Incident {
  id: string;
  time: string;
  message: string;
}

export default function LiveIncidentUpdates() {
  const incidents: Incident[] = [
    { id: '1', time: '14:30', message: 'Power Grid 40% Restored - Central Sector' },
    { id: '2', time: '14:20', message: 'Road Closure: HWY 1 North' },
    { id: '3', time: '14:20', message: 'Road Closure: HWY 1 North' },
  ];

  return (
    <div>
      <div className="section-header">
        <span>LIVE INCIDENT UPDATES</span>
        <span style={{ cursor: 'pointer' }}>⋮</span>
      </div>
      <div className="section-content" style={{ backgroundColor: '#374151', color: 'white', border: 'none' }}>
        <ul className="incident-list">
          {incidents.map(incident => (
            <li key={incident.id} className="incident-item">
              <strong>{incident.time}</strong> {incident.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

