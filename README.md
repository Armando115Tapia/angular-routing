# Descripción del proyecto 

Para crear el proyecto se utilizó el siguiente comando

```javascript
ng new angular-routing
```
o si prefieres puedes clonarlo y luego ejecutar el siguiente comando (en el directorio raiz).
```javascritpt
npm install
```
Se tiene los siguientes componentes y subcomponentes

  * Componente a (comp-a)
    * Subcomponente a (sub-a)
    * Subcomponente b (sub-b)
    * Subcomponente c (sub-c)
  * Componente b (comp-b)
  * Componente c (comp-c)

Para crear los componentes se uso los siguientes comandos (desde la terminal):
```javascript
ng g c comp-a --spec=false
ng g c comp-b --spec=false
ng g c comp-c --spec=false
```

Para crear los subcomponentes se uso los siguientes comandos (desde la terminal)  
nota: primero crear los compontentes
```javascript
 ng g c comp-a/sub-a --spec=false
 ng g c comp-a/sub-b --spec=false
 ng g c comp-a/sub-c --spec=false
```

Configuración de las rutas para que sean subcomponentes
```javascript
// app-routing.module
// url -> compa/suba
{path: 'compa', component: CompAComponent, children: [
    {path: 'suba', component: SubAComponent},
    {path: 'subb', component: SubBComponent},
    {path: 'subc', component: SubCComponent}
  ]},
```
### Estas pueden ser accedidas directamente, sin necesidad de colocarlas dentro de un children 
Para acceder a los componentes hijos en el html debe contener el tag router-outlet
```html
<!-- comp-a.component.html-->
<p>
  comp-a works!
</p>
<router-outlet></router-outlet>
```
# AngularRouting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
