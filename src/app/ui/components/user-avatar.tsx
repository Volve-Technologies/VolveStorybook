import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/components/avatar';
import { cn } from '@/app/utils/helpers';
import { CSSProperties } from 'react';

interface Props extends React.ComponentProps<typeof Avatar> {
  user: {
    id: string;
    name?: string | undefined;
    email?: string | undefined;
    image?: string | undefined;
  };
  pending?: boolean;
  size?: number;
}

const AVATAR_COLORS = [
  'bg-indigo-600',
  'bg-violet-600',
  'bg-pink-600',
  'bg-rose-600',
  'bg-amber-600',
  'bg-emerald-600',
  'bg-teal-600',
  'bg-cyan-600',
  'bg-blue-600',
  'bg-purple-600',
];

function getColorFromId(id: string): string {
  if (id === '') return 'bg-surface-9';
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}

export function UserAvatar({ className, pending = false, user, size = 24, ...props }: Props) {
  const firstName = user.name?.split(' ')[0];
  const lastName = user.name?.split(' ')[1];
  const bgColor = getColorFromId(user.id);

  return (
    <Avatar
      style={{ '--avatar-size': `${size}px` } as CSSProperties}
      className={cn('size-(--avatar-size)!', className)}
      {...props}
    >
      <AvatarImage />
      <AvatarFallback
        style={{ fontSize: 'calc(var(--avatar-size) * 0.45)' }}
        className={cn(
          'text-white',
          pending ? 'border-dashed border border-surface-7 bg-white text-muted' : bgColor,
        )}
      >
        {user.name?.trim() === '' ? (
          user.email?.[0]
        ) : (
          <>
            {firstName?.[0]}
            {lastName?.[0]}
          </>
        )}
      </AvatarFallback>
    </Avatar>
  );
}
