import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../UserProfile/SidebarNav'; // Assuming UserProfile is a sibling directory to layout

interface SidebarProps {
  className?: string;
  /** Optional: Called when the sidebar should be closed, e.g., on mobile after a navigation item click. */
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ className, onClose }) => {
  // SidebarNav component already defines its width, height, and core styling (bg-sidebar, etc.)
  // The onClose prop is available if SidebarNav needs to trigger a close action,
  // but SidebarNav itself would need to be modified to use it.
  // For this implementation, closing is handled by MainAppLayout's overlay or Header's toggle.
  return (
    <aside className={cn('h-full', className)}>
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
