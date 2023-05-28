[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@dalgu/core-design-system.svg)](https://www.npmjs.com/package/@dalgu/core-design-system)
[![npm](https://img.shields.io/npm/dm/@dalgu/core-design-system.svg)](https://www.npmjs.com/package/@dalgu/core-design-system)

# Core Design System

Essential, Customizable, Business Driven Design System for React

<br/>

## Installation

```
npm i @dalgu/core-design-system @emotion/react @emotion/styled
```

```
yarn add @dalgu/core-design-system @emotion/react @emotion/styled
```

```
pnpm add @dalgu/core-design-system @emotion/react @emotion/styled
```

<br/>

## Usage

### CSS

```jsx
import '@dalgu/core-design-system/shared/text-styles-1.css';

ReactDOM.render(<App />, document.getElementById('root'));
```

### Components

Currently, only the `<Button />` component can be used for testing Core Design System.

```jsx
import { Button } from '@dalgu/core-design-system';

export default function Example() {
  return (
    <Button
      label='BUTTON LABEL'
      onClick={() => alert('Core Design System Button Component!')}
    />
  );
}
```

<br/>

## Version history

### 0.0.xx

`2023.05.20 ~`
✔️ Testing for production

<br/>

## Contact

[dalgudot@gmail.com](mailto:dalgudot@gmail.com)
