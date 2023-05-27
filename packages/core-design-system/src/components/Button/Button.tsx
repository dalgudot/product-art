/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';

const config = require('core-design-system.config');

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
  width = undefined,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <ButtonCommon
      className={setLabelTextStyle(appearance, size)}
      css={[setAppearanceStyle(appearance), setPadding(size, width)]}
      onClick={onClick}
      disabled={disabled}
    >
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
function setLabelTextStyle(type: AppearanceType, size: SizeType) {
  switch (size) {
    case 'large':
      return type === 'fill' ? 'bold__18' : 'medium__18';
    case 'medium':
      return type === 'fill' ? 'bold__16' : 'medium__16';
    case 'small':
      return type === 'fill' ? 'bold__14' : 'medium__14';
  }
}

function setAppearanceStyle(type: AppearanceType): SerializedStyles {
  switch (type) {
    case 'fill':
      return css`
        background-color: ${g8};
        color: ${g1};
      `;
    case 'line':
      return css`
        border: 1px solid ${g1};
        color: ${g1};
      `;
  }
}

function setPadding(size: SizeType, width?: WidthType): SerializedStyles {
  const setWidth = width && (width === 'fullWidth' ? '100%' : `${width}px`);

  switch (size) {
    case 'large':
      return css`
        padding: 12px 16px;
        width: ${setWidth};
      `;

    case 'medium':
      return css`
        padding: 10px 14px;
        width: ${setWidth};
      `;

    case 'small':
      return css`
        padding: 8px 12px;
        width: ${setWidth};
      `;
  }
}
