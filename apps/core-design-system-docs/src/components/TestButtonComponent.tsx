'use client';
import { Button } from '@dalgu/core-design-system';
import s from './TestButtonComponent.module.css';

export default function TestButtonComponent() {
  return (
    <div className={s.layout}>
      <Button
        label='Client Button'
        appearance='fill'
        size='large'
        onClick={() => {}}
      />
      <Button
        label='Client Button'
        appearance='fill'
        size='medium'
        onClick={() => {}}
      />

      <Button
        label='Client Button'
        appearance='line'
        size='small'
        onClick={() => {}}
      />
      <Button
        label='Client Button'
        appearance='fill'
        size='large'
        onClick={() => {}}
        disabled={true}
      />
    </div>
  );
}
