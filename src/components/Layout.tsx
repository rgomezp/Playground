import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar, { PlaygroundIcon, ComponentsIcon } from './Sidebar';

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  const navItems = [
    {
      name: 'Playground',
      href: '/playground',
      icon: <PlaygroundIcon />,
    },
    {
      name: 'Button',
      href: '/button',
      icon: <ComponentsIcon />,
    },
    {
      name: 'Card',
      href: '/card',
      icon: <ComponentsIcon />,
    },
    {
      name: 'FieldPicker',
      href: '/fieldpicker',
      icon: <ComponentsIcon />,
    },
    {
      name: 'SearchBar',
      href: '/searchbar',
      icon: <ComponentsIcon />,
    },
  ];

  return (
    <div className={`min-h-screen bg-gray-50 flex ${className}`}>
      <Sidebar navItems={navItems} />
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          {children || <Outlet />}
        </div>
      </main>
    </div>
  );
};

export default Layout;
