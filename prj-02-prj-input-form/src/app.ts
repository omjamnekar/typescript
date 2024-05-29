/// <reference path="models/drag-drop-interface.ts" />
/// <reference path="models/project-model.ts" />
/// <reference path="state/project-state.ts"/>
/// <reference path="util/validation.ts"/>
/// <reference path="decorator/autobind_decorator.ts"/>
/// <reference path="components/base-component.ts"/>
/// <reference path="components/project-items.ts"/>
/// <reference path="components/project-input.ts"/>
/// <reference path="components/project-list.ts"/>


namespace App {

  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');

}