import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../utils';

export type ButtonProps = ComponentPropsWithoutRef<'button'>;

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(className, 'py-1 px-2 mx-1 text-xs rounded shadow hover:scale-105')} {...props}>
      {children}
    </button>
  );
}
