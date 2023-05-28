[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@dalgu/core-design-system.svg)](https://www.npmjs.com/package/@dalgu/core-design-system)
[![npm](https://img.shields.io/npm/dm/@dalgu/core-design-system.svg)](https://www.npmjs.com/package/@dalgu/core-design-system)

# Core Design System `Preparing now...`

Essential, Customizable, Business Driven Design System for React

<br/>

✨ Core Design System is currently being prepared so that anyone can use it in a production environment. I hope to make it available to you as soon as possible.

If you support my project, you can sponsor me at the link below.
[KyungHwan Kim](https://github.com/sponsors/dalgudot)

<br/>

## Installation

```bash
npm i @dalgu/core-design-system @emotion/react @emotion/styled
```

```bash
yarn add @dalgu/core-design-system @emotion/react @emotion/styled
```

```bash
pnpm add @dalgu/core-design-system @emotion/react @emotion/styled
```

<br/>

## Usage

### Foundation CSS

```jsx
import '@dalgu/core-design-system/shared/text-styles-1.css';
import '@dalgu/core-design-system/shared/colors-1.css';

ReactDOM.render(<App />, document.getElementById('root'));
```

<br/>

### Components

Currently, only `<Button />` component can be used for testing Core Design System in your project.

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
