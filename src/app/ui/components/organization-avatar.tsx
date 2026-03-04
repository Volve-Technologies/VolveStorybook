import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/components/avatar';
import { cn } from '@/app/utils/helpers';
import { CSSProperties } from 'react';

interface Props extends React.ComponentProps<typeof Avatar> {
  organization: {
    id: string;
    name?: string | undefined;
  };
  size?: number;
}

const AVATAR_COLORS = [
  'bg-indigo-100 text-indigo-900',
  'bg-violet-100 text-violet-900',
  'bg-pink-100 text-pink-900',
  'bg-rose-100 text-rose-900',
  'bg-amber-100 text-amber-900',
  'bg-emerald-100 text-emerald-900',
  'bg-teal-100 text-teal-900',
  'bg-cyan-100 text-cyan-900',
  'bg-blue-100 text-blue-900',
  'bg-purple-100 text-purple-900',
];

function getColorFromId(id: string): string {
  if (id === '') return 'bg-surface-9';
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}

export function OrganizationAvatar({ className, organization, size = 24, ...props }: Props) {
  const bgColor = getColorFromId(organization.id);

  return (
    <Avatar
      style={{ '--avatar-size': `${size}px` } as CSSProperties}
      className={cn('size-(--avatar-size)!', className)}
      {...props}
    >
      <AvatarImage />
      <AvatarFallback
        style={{ fontSize: 'calc(var(--avatar-size) * 0.45)' }}
        className={cn('text-white', bgColor)}
      >
        {organization.name?.[0]}
        {organization.name?.[1]}
      </AvatarFallback>
    </Avatar>
  );
}
