import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  FileText,
  ChevronDown,
  Users,
  ShoppingCart,
  NotebookText,
  MessageSquare,
  UserCircle2,
  User,
  Heart,
  Image,
  FileCheck2,
  StickyNote,
  CalendarDays,
  Mail,
  Ticket,
  Settings,
  Contact,
  LayoutPanelLeft,
  Minus
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  isSubItem?: boolean;
  hasDot?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive, isSubItem, hasDot }) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center py-2 px-3 rounded-md text-sm transition-colors',
        isSubItem ? 'ml-4' : '',
        isActive && !isSubItem
          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
          : 'hover:bg-primary/10 hover:text-primary text-sidebar-foreground/80',
        isActive && isSubItem ? 'text-primary-foreground font-semibold' : 'text-sidebar-foreground/80 hover:text-primary-foreground/100'
      )}
    >
      {hasDot && <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full mr-2 shrink-0"></span>}
      <Icon className={cn('h-4 w-4 mr-3 shrink-0', isActive ? (isSubItem ? 'text-primary-foreground' : 'text-primary-foreground') : 'text-sidebar-foreground/60 group-hover:text-primary')} />
      {label}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const navItems = {
    dashboards: [
      { href: '#', icon: LayoutDashboard, label: 'Dashboard1', isSubItem: true },
      { href: '#', icon: FileText, label: 'Dashboard2', isSubItem: true },
      { href: '#', icon: Settings, label: 'Dashboard3', isSubItem: true },
    ],
    apps: [
      { href: '#', icon: Contact, label: 'Contacts' },
      { href: '#', icon: MessageSquare, label: 'Chats' },
    ],
    userProfileSubItems: [
      { href: '#', icon: User, label: 'Profile', isSubItem: true },
      { href: '#', icon: Users, label: 'Followers', isActive: true, hasDot: true, isSubItem: true },
      { href: '#', icon: Heart, label: 'Friends', isSubItem: true },
      { href: '#', icon: Image, label: 'Gallery', isSubItem: true },
      { href: '#', icon: FileCheck2, label: 'Invoice', isSubItem: true }, 
      { href: '#', icon: StickyNote, label: 'Notes', isSubItem: true },
      { href: '#', icon: CalendarDays, label: 'Calendar', isSubItem: true },
      { href: '#', icon: Mail, label: 'Email', isSubItem: true },
      { href: '#', icon: Ticket, label: 'Tickets', isSubItem: true },
    ],
  };

  return (
    <div className={cn('w-64 bg-sidebar text-sidebar-foreground h-screen flex flex-col', className)}>
      <div className="p-4 border-b border-sidebar-foreground/10">
        <a href="#" className="flex items-center space-x-2">
          <LayoutPanelLeft className="h-8 w-8 text-white" />
          <span className="font-semibold text-xl text-white">MatDash</span>
        </a>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <div>
          <h3 className="px-3 py-2 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider">Dashboards</h3>
          {navItems.dashboards.map((item) => (
            <NavItem key={item.label} {...item} icon={item.icon} />
          ))}
        </div>

        <Accordion type="multiple" defaultValue={['front-pages', 'ecommerce', 'blogs', 'user-profile']}>
          <AccordionItem value="front-pages" className="border-none">
            <AccordionTrigger className="hover:no-underline hover:bg-primary/10 hover:text-primary text-sidebar-foreground/80 py-2 px-3 rounded-md text-sm justify-start">
              <div className="flex items-center">
                <FileText className="h-4 w-4 mr-3 text-sidebar-foreground/60" />
                Front Pages
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <NavItem href="#" icon={Minus} label="Landingpage" isSubItem={true} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div>
          <h3 className="px-3 py-2 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider">Apps</h3>
          {navItems.apps.map((item) => (
            <NavItem key={item.label} {...item} icon={item.icon} />
          ))}
          <Accordion type="multiple" defaultValue={['ecommerce', 'blogs']}>
            <AccordionItem value="ecommerce" className="border-none">
              <AccordionTrigger className="hover:no-underline hover:bg-primary/10 hover:text-primary text-sidebar-foreground/80 py-2 px-3 rounded-md text-sm justify-start">
                <div className="flex items-center">
                  <ShoppingCart className="h-4 w-4 mr-3 text-sidebar-foreground/60" />
                  ECommerce
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                 {/* Add ECommerce sub-items here if any */}
                 <NavItem href="#" icon={Minus} label="Products" isSubItem={true} />
                 <NavItem href="#" icon={Minus} label="Orders" isSubItem={true} />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="blogs" className="border-none">
              <AccordionTrigger className="hover:no-underline hover:bg-primary/10 hover:text-primary text-sidebar-foreground/80 py-2 px-3 rounded-md text-sm justify-start">
                 <div className="flex items-center">
                  <NotebookText className="h-4 w-4 mr-3 text-sidebar-foreground/60" />
                  Blogs
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                {/* Add Blogs sub-items here if any */}
                <NavItem href="#" icon={Minus} label="All Posts" isSubItem={true} />
                <NavItem href="#" icon={Minus} label="Add New" isSubItem={true} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Accordion type="single" collapsible defaultValue="user-profile" className="w-full">
          <AccordionItem value="user-profile" className={cn('border-none rounded-md', 'bg-primary text-primary-foreground')}> 
            <AccordionTrigger className="hover:no-underline py-2 px-3 rounded-md text-sm justify-start text-primary-foreground hover:bg-primary/90">
              <div className="flex items-center">
                <UserCircle2 className="h-4 w-4 mr-3 text-primary-foreground" />
                Users Profile
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-1 pt-1 space-y-1">
              {navItems.userProfileSubItems.map((item) => (
                <NavItem key={item.label} {...item} icon={item.icon} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </nav>
    </div>
  );
};

export default SidebarNav;
