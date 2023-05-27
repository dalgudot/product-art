/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

type AppearanceType = 'fill' | 'line';
type SizeType = 'large' | 'medium' | 'small';
type WidthType = number | 'fullWidth';

// Temp Color
const g1 = '#e1dee6';
const g8 = '#1f1f20';

export interface ButtonProps {
  label: string;
  appearance?: AppearanceType;
  size?: SizeType;
  width?: WidthType;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  label,
  appearance = 'fill',
  size = 'medium',
  width,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <ButtonCommon className='bold__14' onClick={onClick} disabled={disabled}>
      {label}
    </ButtonCommon>
  );
}

const ButtonCommon = styled.button`
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  background-color: transparent;
  border: none;
  border-radius: 8px;

  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
  }

  &:active {
    opacity: 0.5;
  }

  &:disabled {
    cursor: unset;
    opacity: 0.3;
  }
`;

/**
 *
 *
 * Style Helper Functions
 *
 *
 */
