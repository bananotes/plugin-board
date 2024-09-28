import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils';

export type CardProps = {
  theme?: 'light' | 'dark';
} & ComponentPropsWithoutRef<'button'>;

export function EntryCard({ theme, className, children, ...props }: CardProps) {
  return (
    <button
      className={cn(
        className,
        'py-1 px-4 rounded shadow hover:scale-105',
        theme === 'light' ? 'bg-white text-black' : 'bg-black text-white',
      )}
      {...props}>
      {children}
    </button>
  );
}
