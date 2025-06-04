import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, UserPlus } from 'lucide-react';

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label, className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardContent className="p-4 flex flex-col items-center text-center">
        <Icon className="h-8 w-8 text-primary mb-2" />
        <p className="text-2xl font-semibold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
};

interface UserStatsProps {
  className?: string;
}

const UserStats: React.FC<UserStatsProps> = ({ className }) => {
  const statsData = [
    { id: 1, icon: FileText, value: '938', label: 'Posts' },
    { id: 2, icon: Users, value: '3,586', label: 'Followers' },
    { id: 3, icon: UserPlus, value: '2,659', label: 'Following' },
  ];

  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6', className)}>
      {statsData.map((stat) => (
        <StatCard
          key={stat.id}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
};

export default UserStats;
