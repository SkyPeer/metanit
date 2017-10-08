import { Component } from '@angular/core';

/*функция-декоратор @Component, ассоциирует метаданные с классом компонента AppComponent.
В этой функции, во-первых, определяется параметр selector или селектор css для HTML-элемента, который
будет представлять компонент. Во-вторых, здесь определяется параметр template или шаблон, который указывает, как надо визуализировать компонент.

В этом шаблоне задана двусторонняя привязка с помощью выражений [(ngModel)]="name" и {{name}} к некоторой модели name.*/

@Component({
    selector: 'my-app',
    templateUrl: "main.html",
})
export class AppComponent {
    name= '';
}