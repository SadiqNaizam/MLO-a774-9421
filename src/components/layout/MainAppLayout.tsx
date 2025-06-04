import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Desktop Sidebar: Always visible, fixed position, takes up space via main content margin */} 
      {/* SidebarNav (inside Sidebar) is h-screen w-64 bg-sidebar */} 
      <div className="hidden lg:block fixed top-0 left-0 h-full w-64 z-20">
        <Sidebar />
      </div>

      {/* Mobile Sidebar: Overlay, toggled state */} 
      {isMobileSidebarOpen && (
        <>
          {/* Overlay to close sidebar on click outside */} 
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={toggleMobileSidebar}
            aria-hidden="true"
          />
          {/* Sidebar itself */} 
          <div className="fixed top-0 left-0 h-full w-64 z-40 lg:hidden shadow-xl">
            <Sidebar onClose={toggleMobileSidebar} />
          </div>
        </>
      )}

      {/* Main area: Header + Content */} 
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header: Fixed at the top of the viewport (z-50 from TopHeader itself) */}
        {/* TopHeader component is 'fixed top-0 left-0 w-full h-16' */}
        {/* Its content might be visually offset by its own padding or it overlays the top of the sidebar */}
        <Header onToggleSidebar={toggleMobileSidebar} />
        
        {/* Scrollable Main Content Area */} 
        {/* pt-16 for fixed header, lg:pl-64 for fixed desktop sidebar */}
        <main className="flex-1 overflow-y-auto pt-16 lg:pl-64">
          <div className="p-6"> {/* Inner padding for content as per requirements */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
