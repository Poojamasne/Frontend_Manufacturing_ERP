import React from 'react';

interface ModuleSelectorProps {
  modules: { id: string; name: string; icon: string }[];
  selectedModule: string;
  onSelect: (moduleId: string) => void;
}

export const ModuleSelector: React.FC<ModuleSelectorProps> = ({ modules, selectedModule, onSelect }) => {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {modules.map(module => (
        <button
          key={module.id}
          onClick={() => onSelect(module.id)}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: `2px solid ${selectedModule === module.id ? '#3b82f6' : '#e5e7eb'}`,
            backgroundColor: selectedModule === module.id ? '#eff6ff' : 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>{module.icon}</span>
          <span>{module.name}</span>
        </button>
      ))}
    </div>
  );
};