/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';
import {
  AllVarColorType,
  VarFillButtonColorType,
  VarFillButtonLabelColorType,
  VarLineButtonColorType,
  VarLineButtonLabelColorType,
} from '../../type';

type AppearanceType = 'fill' | 'line';
type SizeType = 'large' | 'medium' | 'small';
type WidthType = number | 'fullWidth';

export interface ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  appearance?: AppearanceType;
  size?: SizeType;
  width?: WidthType;
  buttonColor?: AllVarColorType;
  labelColor?: AllVarColorType;
  disabled?: boolean;
}

export function Button({
  label,
  onClick,
  appearance = 'fill',
  size = 'medium',
  width = undefined,
  buttonColor = undefined,
  labelColor = undefined,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonCommon
      className={setLabelTextStyle(appearance, size)}
      css={[
        setAppearanceStyle(appearance, buttonColor, labelColor),
        setPadding(size, width),
      ]}
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
  text-align: center;

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
const fillButtonColor: VarFillButtonColorType = 'var(--fill-button-color)';
const fillButtonLabelColor: VarFillButtonLabelColorType =
  'var(--fill-button-label-color)';
const lineButtonColor: VarLineButtonColorType = 'var(--line-button-color)';
const lineButtonLabelColor: VarLineButtonLabelColorType =
  'var(--line-button-label-color)';

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

function setAppearanceStyle(
  appearance: AppearanceType,
  buttonColor?: AllVarColorType,
  labelColor?: AllVarColorType
): SerializedStyles {
  switch (appearance) {
    case 'fill':
      return css`
        background-color: ${buttonColor ?? fillButtonColor};
        color: ${labelColor ?? fillButtonLabelColor};
      `;
    case 'line':
      return css`
        border: 1px solid ${buttonColor ?? lineButtonColor};
        color: ${labelColor ?? lineButtonLabelColor};
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
