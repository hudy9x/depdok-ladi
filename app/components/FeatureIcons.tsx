import React from 'react';

export interface CustomIconProps {
  className?: string;
  primary?: string;
  secondary?: string;
}

export const PlantumlIcon = ({ className, primary = "currentColor", secondary = "currentColor" }: CustomIconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 8V12" stroke={secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12H18" stroke={secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 12V16" stroke={secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 12V16" stroke={secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 3H9C8.44772 3 8 3.44772 8 4V7C8 7.55228 8.44772 8 9 8H15C15.5523 8 16 7.55228 16 7V4C16 3.44772 15.5523 3 15 3Z" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 16H4C3.44772 16 3 16.4477 3 17V20C3 20.5523 3.44772 21 4 21H8C8.55228 21 9 20.5523 9 20V17C9 16.4477 8.55228 16 8 16Z" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 16H16C15.4477 16 15 16.4477 15 17V20C15 20.5523 15.4477 21 16 21H20C20.5523 21 21 20.5523 21 20V17C21 16.4477 20.5523 16 20 16Z" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MmdIcon = ({ className, primary = "currentColor", secondary = "currentColor" }: CustomIconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 3L17 10H7L12 3Z" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 15H4C3.44772 15 3 15.4477 3 16V21C3 21.5523 3.44772 22 4 22H9C9.55228 22 10 21.5523 10 21V16C10 15.4477 9.55228 15 9 15Z" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 22C19.933 22 21.5 20.433 21.5 18.5C21.5 16.567 19.933 15 18 15C16.067 15 14.5 16.567 14.5 18.5C14.5 20.433 16.067 22 18 22Z" stroke={secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TodoIcon = ({ className, primary = "currentColor", secondary = "currentColor" }: CustomIconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M13 5H21" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 12H21" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 19H21" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 17L5 19L9 15" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 4H4C3.44772 4 3 4.44772 3 5V9C3 9.55228 3.44772 10 4 10H8C8.55228 10 9 9.55228 9 9V5C9 4.44772 8.55228 4 8 4Z" stroke={secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MarkdownIcon = ({ className, primary = "currentColor" }: CustomIconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20.5 4H3.5C2.1 4 1 5.1 1 6.5V17.5C1 18.9 2.1 20 3.5 20H20.5C21.9 20 23 18.9 23 17.5V6.5C23 5.1 21.9 4 20.5 4ZM5 16V8H7.5L9.5 10.5L11.5 8H14V16H12V11.5L9.5 14.5L7 11.5V16H5ZM18.5 16L15.5 12H17.5V8H19.5V12H21.5L18.5 16Z" fill={primary} />
  </svg>
);

export const LoggerIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/></svg>
);

export const ExcalidrawIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/><path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"/><path d="M7 17h.01"/><path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L11 18"/></svg>
);

export const DiffIcon = ({ className }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 4H9"/><path d="M9 20h6"/><path d="M22 10v4"/><path d="M2 10v4"/><path d="M6 4h.01"/><path d="M18 4h.01"/><path d="M6 20h.01"/><path d="M18 20h.01"/></svg>
);

export const getFeatureIcon = (id: string, className: string) => {
  switch (id) {
    case 'markdown': return <MarkdownIcon className={className} />;
    case 'mermaid': return <MmdIcon className={className} />;
    case 'plantuml': return <PlantumlIcon className={className} />;
    case 'logger': return <LoggerIcon className={className} />;
    case 'excalidraw': return <ExcalidrawIcon className={className} />;
    case 'todo': return <TodoIcon className={className} />;
    case 'diff': return <DiffIcon className={className} />;
    default: return <MarkdownIcon className={className} />;
  }
};
