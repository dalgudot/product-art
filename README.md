# Product Art

## Core Design System

In the MonoRepo environment, the path of `@dalgu/core-design-system` is divided as follows to utilize Server Component and Client Component as intended. In other words, when deploying to NPM, the "main" path of @dalgu/core-design-system must be temporarily changed.

MonoRepo:

```sh
"main": "src/index.ts",
```

NPM Package:

```sh
"main": "dist/index.js",
```
