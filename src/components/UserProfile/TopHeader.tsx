import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, Moon, Bell, Globe, Settings, LogOut, User, LayoutPanelLeft, Menu } from 'lucide-react';

interface TopHeaderProps {
  className?: string;
  onToggleSidebar?: () => void;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className, onToggleSidebar }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full h-16 bg-card border-b border-border flex items-center justify-between px-6 z-50',
        className
      )}
    >
      <div className="flex items-center space-x-4">
        {/* Hamburger menu for mobile, or if sidebar can be toggled */} 
        {onToggleSidebar && (
            <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="lg:hidden">
                <Menu className="h-5 w-5" />
            </Button>
        )}
        {/* Logo for larger screens, or if sidebar is fixed and no toggle */} 
        {/* <div className="flex items-center space-x-2">
          <LayoutPanelLeft className="h-7 w-7 text-primary" />
          <span className="font-semibold text-xl text-foreground">MatDash</span>
        </div> */}

        {/* Search Bar (simple version as per image, can be expanded) */} 
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="pl-10 pr-4 py-2 h-9 w-64 bg-background" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Moon className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Globe className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" />
                <AvatarFallback>DM</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">David McMichael</p>
                <p className="text-xs leading-none text-muted-foreground">d.mcmichael@example.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
