import React from 'react';

// --- DESIGN SYSTEM UTILS ---
export const formatCategoryTitle = (key: string): string => {
  const cleanKey = key.replace(/^\d+_/, '').replace(/_/g, ' ');
  return cleanKey.charAt(0).toUpperCase() + cleanKey.slice(1);
};

// --- TYPOGRAPHY SYSTEM ---

interface StandardProps {
  children: React.ReactNode;
  className?: string;
}

// Display Titles (Headers, Cover)
export const Display = {
  H1: (({ children, className = '' }: StandardProps) => (
    <h1 className={`font-display font-bold text-6xl text-text-primary leading-[0.9] tracking-tight ${className}`}>
      {children}
    </h1>
  )) as React.FC<StandardProps>,
  H2: (({ children, className = '' }: StandardProps) => (
    <h2 className={`font-display font-bold text-2xl text-text-primary uppercase tracking-tight ${className}`}>
      {children}
    </h2>
  )) as React.FC<StandardProps>,
  Metric: (({ children }: { children: React.ReactNode }) => (
    <span className="font-display font-medium text-sm text-text-primary leading-tight break-words block">
      {children}
    </span>
  )) as React.FC<{ children: React.ReactNode }>,
  Brand: (({ children }: { children: React.ReactNode }) => (
    <span className="font-brand font-bold text-text-primary tracking-tighter">
      {children}
    </span>
  )) as React.FC<{ children: React.ReactNode }>
};

// Technical Text (Labels, Metadata, Captions)
export const Mono = {
  Label: (({ children, className = '' }: StandardProps) => (
    <span className={`block font-mono text-[10px] font-medium text-text-tertiary uppercase tracking-widest leading-none mb-1.5 ${className}`}>
      {children}
    </span>
  )) as React.FC<StandardProps>,
  Meta: (({ children }: { children: React.ReactNode }) => (
    <span className="font-mono text-xs font-light text-text-secondary tracking-wide">
      {children}
    </span>
  )) as React.FC<{ children: React.ReactNode }>,
  Tag: (({ children }: { children: React.ReactNode }) => (
    <span className="inline-block px-2 py-0.5 bg-text-primary text-surface font-mono text-[10px] uppercase tracking-wider">
      {children}
    </span>
  )) as React.FC<{ children: React.ReactNode }>
};

// Body Text (Content, Paragraphs)
export const Body = {
  Paragraph: (({ children }: { children: React.ReactNode }) => (
    <p className="font-sans font-light text-sm text-text-primary leading-7 text-justify mb-4 last:mb-0">
      {children}
    </p>
  )) as React.FC<{ children: React.ReactNode }>,
  ListItem: (({ index, children }: { index: number; children: React.ReactNode }) => (
    <div className="flex gap-4 items-baseline">
      <span className="font-mono text-text-tertiary font-bold text-[10px] mt-1 shrink-0">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="font-sans font-light text-sm text-text-primary leading-relaxed text-justify">
        {children}
      </span>
    </div>
  )) as React.FC<{ index: number; children: React.ReactNode }>
};

// --- LAYOUT COMPONENTS ---

export const Section: React.FC<{ title: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <section className={`mb-12 print-break-inside-avoid ${className}`}>
    {title && (
      <div className="border-b-2 border-border-strong pb-2 mb-6 mt-8 flex items-end justify-between">
        <Display.H2>{title}</Display.H2>
        <div className="h-2 w-2 bg-text-primary"></div>
      </div>
    )}
    {children}
  </section>
);

export const SubSection: React.FC<{ title: React.ReactNode; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="font-display text-xs font-bold text-text-tertiary uppercase tracking-widest mb-4 border-b border-border pb-1">
      {title}
    </h3>
    {children}
  </div>
);

export const DataField: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="flex flex-col mb-5">
    <Mono.Label>{label.replace(/_/g, ' ')}</Mono.Label>
    <Display.Metric>{value}</Display.Metric>
  </div>
);

// --- COMPLEX MOLECULES ---

export const MetricsGrid: React.FC<{ data: any }> = ({ data }) => {
  if (!data) return null;

  const primitives: [string, any][] = [];
  const objects: [string, any][] = [];

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      objects.push([key, value]);
    } else {
      primitives.push([key, value]);
    }
  });

  return (
    <div className="space-y-6">
      {/* Primitives Grid */}
      {primitives.length > 0 && (
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {primitives.map(([key, value]) => (
             <DataField key={key} label={key} value={Array.isArray(value) ? value.join(', ') : String(value)} />
          ))}
        </div>
      )}

      {/* Complex Objects (Nested) */}
      {objects.map(([key, value]) => (
        <div key={key} className="mt-4 bg-surface p-4 border border-border rounded-sm print:p-0 print:border-none print:bg-transparent">
          <span className="font-display text-xs font-bold text-text-primary uppercase block mb-4 border-b border-border-strong/10 pb-2">{key.replace(/_/g, ' ')}</span>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {Object.entries(value).map(([subKey, subValue]) => (
              <DataField key={subKey} label={subKey} value={String(subValue)} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};