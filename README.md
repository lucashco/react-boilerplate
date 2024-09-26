## Project Structure Overview

This document provides an overview of the project structure, outlining the organization of directories and files within the application.

### About project
It is a  ReBoilerplate project created by Vite JS.

### How to run
To install dependecies run:
```sh
 $ yarn
```

To run on dev run:
```sh
 $ yarn dev
```

## Folder structures

### `api`

The `api` directory holds configuration files for the client http configuration.

- **`@api/`**
  - `apiConfig.ts`: Axios configuration.
  - **`index.ts`**: Exports modules from the `api` directory.

### `assets`

The `assets` directory contains shared assets used across modules.

- **`fonts/`**: Reusable fonts.
  - _(Structure similar to `src/fonts/`)_
- **`images/`**: Shared images.
  - _(Structure similar to `src/images/`)_

### `components`

The `components` directory contains shared components used across modules.

### `features`

The `features` directory contains domain-specific logic and services.

- **`@featureName`**
  - **`useCases/`**: Use cases or domain-specific logic.
    - `use[hookName].ts`: Use case implementation.
  - `api.ts`: API service configuration.
  - `services.ts`: Domain-specific services.
  - `types.ts`: TypeScript types relevant to the domain.
  - **`index.ts`**: Exports modules from the `feature` directory.

### `hooks`

The `hooks` directory contains shared hooks used across modules.

- **`@hooks/`**
  - `use[HookName].ts`: Custom hook implementation.
  - **`index.ts`**: Exports modules from the `hooks` directory.

### `infra`

The `infra` directory is used to globals infra configurations.

- `queryKeys.ts`: Types related to query keys for data fetching.
- `querClient.ts`: React Query client instance.
- `mutation.ts`: Types for data mutation.


### `layouts`

The `layouts` directory contains shared layouts used across modules.

### `pages`

The `pages` directory contains shared pages used across modules.

- **`@pages/`**
  - **`Auth`**: Public pages.
  - **`App`**: Protected pages.
  - **`index.ts`**: Exports modules from the `pages` directory.

The `router` directory contains shared pages used across modules.

- **`@router/`**
  - **`router`**: All routes on the app.
  - **`index.ts`**: Exports modules from the `router` directory.

### `services`

The `services` directory contains shared services used across modules.

- **`@services/`**
  - `[ServiceFolder]`: Folder for a service, global state, custom providers, native resources and so on.
    - `[ServiceName].ts`: File that has service implementation.
    - `[ServiceTypes].ts`: Useful types for the service.
    - `[ServiceProvider].ts`: If necessary for any service.
    - `[useServiceName].ts`: To conect any service with UI.
    - **`index.ts`**: Exports service from the `service folder` directory.

  - **`index.ts`**: Exports modules from the `services` directory.

### `types`

The `types` directory is used to globals types.

---

This structured breakdown provides a clear understanding of how different aspects of the application are organized within the directory tree, helping developers navigate and maintain the codebase effectively.
