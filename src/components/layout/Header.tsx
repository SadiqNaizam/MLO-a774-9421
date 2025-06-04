import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../UserProfile/TopHeader'; // Assuming UserProfile is a sibling directory to layout

interface HeaderProps {
  className?: string;
  onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ className, onToggleSidebar }) => {
  // TopHeader component handles its own fixed positioning, height, background, etc.
  // We pass onToggleSidebar to allow TopHeader to trigger sidebar visibility changes.
  return (
    <TopHeader className={cn(className)} onToggleSidebar={onToggleSidebar} />
  );
};

export default Header;
