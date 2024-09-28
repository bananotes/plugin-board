import { useEffect, type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../utils';
import type { Entry } from '@apis/models';

export type CardProps = {
  isEditing: boolean;
} & Entry &
  ComponentPropsWithoutRef<'button'>;

export function EntryCard({ id: uuid, className, children, ...props }: CardProps) {
  useEffect(() => {
    console.log('uuid: ', uuid);
  }, []);
  return (
    <button className={cn(className, 'py-1 px-4 rounded shadow hover:scale-105', 'bg-white text-black')} {...props}>
      {children}
    </button>
  );
}
