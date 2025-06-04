import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export interface FollowerCardProps {
  id: string;
  avatarSrc: string;
  name: string;
  location: string;
  initialFollowStatus: boolean;
  className?: string;
}

const FollowerCard: React.FC<FollowerCardProps> = ({
  avatarSrc,
  name,
  location,
  initialFollowStatus,
  className,
}) => {
  const [isFollowing, setIsFollowing] = React.useState<boolean>(initialFollowStatus);

  const handleFollowToggle = React.useCallback(() => {
    setIsFollowing((prev) => !prev);
    // Here you would typically make an API call to update follow status
    console.log(`${isFollowing ? 'Unfollowed' : 'Followed'} ${name}`);
  }, [isFollowing, name]);

  return (
    <Card className={cn('text-center shadow-sm hover:shadow-md transition-shadow', className)}>
      <CardContent className="p-6 flex flex-col items-center">
        <Avatar className="h-20 w-20 mb-4">
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{location}</span>
        </div>
        <Button
          variant={isFollowing ? 'default' : 'outline'}
          onClick={handleFollowToggle}
          className={cn(
            'w-full',
            isFollowing ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                        : 'text-primary border-primary hover:bg-primary hover:text-primary-foreground'
          )}
        >
          {isFollowing ? 'Followed' : 'Follow'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FollowerCard;
