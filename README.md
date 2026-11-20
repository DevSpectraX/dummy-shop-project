# DummyShop

## Links

- https://dummyjson.com/docs/auth#auth-login

- https://tailwindcss.com/docs/installation/framework-guides/angular

- https://www.figma.com/design/brLzCzBltIL78JB2kqPxkh/Welcome-Login--Community-?node-id=0-1&p=f

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Arquitectura del proyecto

src/app/
├── presentation/ # Lo que se ve (signals)
│ └── products/
│ ├── products-list-view/ # ProductsListView (componente de página)
│ ├── products.view-model.ts # ProductsViewModel
│ ├── products.state.ts # ProductsState (signals)
│ └── components/
│ ├── grid/ # ProductsGrid
│ ├── card/ # ProductCard
│ └── error/ # ProductsError
│
├── domain/ # Reglas y contratos (sin Angular ni HTTP)
│ ├── entities/
│ │ └── product.entity.ts # ProductEntity
│ ├── repositories/
│ │ └── products.repository.ts # ProductsRepository (contrato)
│ └── usecases/
│ └── get-products.usecase.ts # GetProductsUseCase
│
├── data/ # De dónde salen los datos
│
├── repositories/
│ └── products.repository.impl.ts # ProductsImpRepository: coordina local y remoto
├── mappers/
│ └── product.mapper.ts # 3 traducciones (DTO → Entity, Entity → Local, Local → Entity)
├── datasources/
│ ├── local/
│ │ └── products-local.datasource.ts # caché / DB, trabaja con StoragePort
│ └── remote/
│ └── products-remote.datasource.ts # API DummyJSON, devuelve DTOs
└── dto/
└── product.dto.ts # ProductDTO (forma de la API)
│
└── core/ # Herramientas compartidas
├── http/
│ ├── request.ts # doRequest()
│ └── interceptors/ # Interceptor de HttpClient
└── storage/
├── storage.port.ts # StoragePort (contrato)
└── local-storage.adapter.ts # Implementación con localStorage

Crear core/storage/storage.port.ts con la clase abstracta StoragePort (get, set, remove).
Crear core/storage/local-storage.adapter.ts con LocalStorageAdapter extends StoragePort, usando localStorage dentro de try/catch.
Crear core/session/session.service.ts (SessionService) con save, load y clear.
Registrar { provide: StoragePort, useClass: LocalStorageAdapter } en app.config.ts o en provideAuthDi().
Inyectar SessionService en LoginViewModel y llamar a save(session) en next cuando rememberMe sea true.
Quitar los console.log del token antes de terminar.
Probar el login completo con emilys / emilyspass.
