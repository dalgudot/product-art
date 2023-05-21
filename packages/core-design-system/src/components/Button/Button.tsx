'use client';

import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
