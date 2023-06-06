/**
 *
 *
 * Foundation Color Types
 *
 *
 */

export type AllVarColorType =
  | VarGrayColorType
  | VarPrimaryColorType
  | VarSecondaryColorType;

export type VarGrayColorType =
  | 'var(--gray1)'
  | 'var(--gray2)'
  | 'var(--gray3)'
  | 'var(--gray4)'
  | 'var(--gray5)'
  | 'var(--gray6)'
  | 'var(--gray7)'
  | 'var(--gray8)';

export type VarPrimaryColorType =
  | 'var(--primary1)'
  | 'var(--primary2)'
  | 'var(--primary3)'
  | 'var(--primary4)'
  | 'var(--primary5)'
  | 'var(--primary6)'
  | 'var(--primary7)'
  | 'var(--primary8)';

export type VarSecondaryColorType =
  | 'var(--secondary1)'
  | 'var(--secondary2)'
  | 'var(--secondary3)'
  | 'var(--secondary4)'
  | 'var(--secondary5)'
  | 'var(--secondary6)'
  | 'var(--secondary7)'
  | 'var(--secondary8)';

/**
 *
 *
 * Button Color Types
 *
 *
 */

export type VarFillButtonColorType = 'var(--fill-button-color)';
export type VarFillButtonLabelColorType = 'var(--fill-button-label-color)';
export type VarLineButtonColorType = 'var(--line-button-color)';
export type VarLineButtonLabelColorType = 'var(--line-button-label-color)';
