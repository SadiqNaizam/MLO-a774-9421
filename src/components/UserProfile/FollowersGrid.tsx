import React from 'react';
import { cn } from '@/lib/utils';
import FollowerCard, { FollowerCardProps } from './FollowerCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

interface FollowersGridProps {
  className?: string;
}

const FollowersGrid: React.FC<FollowersGridProps> = ({ className }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const followersData: FollowerCardProps[] = [
    {
      id: '1',
      avatarSrc: 'https://i.pravatar.cc/150?u=derrick',
      name: 'Derrick Ray',
      location: 'Namibia',
      initialFollowStatus: false as const,
    },
    {
      id: '2',
      avatarSrc: 'https://i.pravatar.cc/150?u=eula',
      name: 'Eula Peterson',
      location: 'Peru',
      initialFollowStatus: false as const,
    },
    {
      id: '3',
      avatarSrc: 'https://i.pravatar.cc/150?u=leila',
      name: 'Leila Jefferson',
      location: 'Jordan',
      initialFollowStatus: true as const,
    },
    {
      id: '4',
      avatarSrc: 'https://i.pravatar.cc/150?u=hallie',
      name: 'Hallie Nelson',
      location: "Côte d'Ivoire",
      initialFollowStatus: false as const,
    },
    {
      id: '5',
      avatarSrc: 'https://i.pravatar.cc/150?u=john',
      name: 'John Smith',
      location: 'USA',
      initialFollowStatus: true as const,
    },
    {
      id: '6',
      avatarSrc: 'https://i.pravatar.cc/150?u=jane',
      name: 'Jane Doe',
      location: 'Canada',
      initialFollowStatus: false as const,
    },
    {
      id: '7',
      avatarSrc: 'https://i.pravatar.cc/150?u=ahmed',
      name: 'Ahmed Khan',
      location: 'Pakistan',
      initialFollowStatus: true as const,
    },
    {
      id: '8',
      avatarSrc: 'https://i.pravatar.cc/150?u=maria',
      name: 'Maria Garcia',
      location: 'Spain',
      initialFollowStatus: false as const,
    },
  ];

  const filteredFollowers = followersData.filter(follower => 
    follower.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    follower.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={cn('bg-card p-6 rounded-lg shadow-sm', className)}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold text-foreground">Followers</h2>
          <Badge variant="secondary">{filteredFollowers.length}</Badge>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search Followers..." 
            className="pl-10 pr-4 py-2 h-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {filteredFollowers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFollowers.map((follower) => (
            <FollowerCard
              key={follower.id}
              id={follower.id}
              avatarSrc={follower.avatarSrc}
              name={follower.name}
              location={follower.location}
              initialFollowStatus={follower.initialFollowStatus}
            />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground text-center py-8">No followers found matching your search.</p>
      )}
      
    </div>
  );
};

export default FollowersGrid;
