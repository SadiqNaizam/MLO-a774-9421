import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { UserCircle, Home } from 'lucide-react';

interface PageHeaderProps {
  className?: string;
  userName: string;
  userTitle: string;
  avatarSrc?: string;
  coverImageSrc?: string; // Optional: if you want to pass a dynamic cover image
}

const PageHeader: React.FC<PageHeaderProps> = ({
  className,
  userName,
  userTitle,
  avatarSrc = 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  coverImageSrc 
}) => {
  return (
    <div className={cn('mb-6', className)}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Followers</h1>
        <Button variant="outline" className="text-muted-foreground">
          <Home className="mr-2 h-4 w-4" />
          Followers
        </Button>
      </div>

      <div className="bg-card rounded-lg shadow-sm overflow-hidden">
        <div 
          className="h-40 bg-gradient-to-r from-primary/20 to-purple-300/20 relative"
          style={coverImageSrc ? { backgroundImage: `url(${coverImageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
        >
          {/* Placeholder for wavy background if no image provided */}
          {!coverImageSrc && 
            <div className="absolute inset-0 opacity-50">
              {/* Simplified representation of waves */}
              <svg width="100%" height="100%" viewBox="0 0 1440 200" preserveAspectRatio="none" className="fill-primary/40">
                <path d="M0,160 C240,100 480,220 720,160 C960,100 1200,220 1440,160 L1440,200 L0,200 Z" />
              </svg>
            </div>
          }
        </div>
        <div className="px-6 py-4 relative">
          <div className="flex items-end -mt-16 space-x-4">
            <Avatar className="h-24 w-24 border-4 border-card shadow-md">
              <AvatarImage src={avatarSrc} alt={userName} />
              <AvatarFallback>{userName.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold text-foreground">{userName}</h2>
              <p className="text-sm text-muted-foreground">{userTitle}</p>
            </div>
          </div>
          <div className="absolute top-4 right-6">
            <Button variant="outline">
              <UserCircle className="mr-2 h-4 w-4" />
              Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
