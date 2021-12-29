(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\github\portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/aside/aside.component */ "2X6e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 118, vars: 0, consts: [[1, "container"], [1, "about-container"], [1, "fadeIn"], [1, "name"], [1, "title"], [1, "highlight"], [1, "description"], ["routerLink", "/projetos", 1, "btn-projects"], [1, "skills-section-title"], [1, "skills-container"], [1, "skills-box"], [1, "skills-title-front"], ["aria-label", "HTML", 1, "devicon-html5-plain", "colored"], ["aria-label", "CSS", 1, "devicon-css3-plain", "colored"], ["aria-label", "Javascript", 1, "devicon-javascript-plain", "colored"], ["aria-label", "React", 1, "devicon-react-plain", "colored"], ["aria-label", "Angular", 1, "devicon-angularjs-plain", "colored"], ["aria-label", "Vuejs", 1, "devicon-vuejs-plain", "colored"], ["aria-label", "Sass", 1, "devicon-sass-original", "colored"], ["aria-label", "Less", 1, "devicon-less-plain-wordmark", "colored"], ["aria-label", "Bootstrap", 1, "devicon-bootstrap-plain", "colored"], ["aria-label", "Figma", 1, "devicon-figma-plain", "colored"], ["aria-label", "Photoshop", 1, "devicon-photoshop-line", "colored"], ["aria-label", "Typescript", 1, "devicon-typescript-plain", "colored"], ["aria-label", "Jquery", 1, "devicon-jquery-plain-wordmark", "colored"], ["aria-label", "Wordpress", 1, "devicon-wordpress-plain"], ["c", "description"], [1, "skills-title-back"], ["aria-label", "Java", 1, "devicon-java-plain-wordmark"], ["aria-label", "Nodejs", 1, "devicon-nodejs-plain", "colored"], ["aria-label", "PHP", 1, "devicon-php-plain", "colored"], ["aria-label", "Firebase", 1, "devicon-firebase-plain-wordmark", "colored"], ["aria-label", "Spring Boot", 1, "devicon-spring-plain-wordmark", "colored"], ["aria-label", "Express", 1, "devicon-nodejs-plain", "colored"], ["aria-label", "Mongodb", 1, "devicon-mongodb-plain", "colored"], ["aria-label", "MySQL", 1, "devicon-mysql-plain", "colored"], ["aria-label", "Oracle", 1, "devicon-oracle-original"], [1, "skills-title-general"], ["aria-label", "Karma", 1, "devicon-karma-plain", "colored"], ["aria-label", "Jasmine", 1, "devicon-jasmine-plain", "colored"], ["aria-label", "Git", 1, "devicon-git-plain", "colored"], ["aria-label", "Github", 1, "devicon-github-original"], ["aria-label", "Bitbucket", 1, "devicon-bitbucket-original", "colored"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portif\u00F3lio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Desenvolvedor FrontEnd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Sou um desenvolvedor especializado em ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Frontend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ", com maior foco de utiliza\u00E7\u00E3o no framework ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " e suas ferramentas, tenho conhecimentos tamb\u00E9m em ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Testes Unit\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " como ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Karma e Jasmine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Possuo conhecimentos tamb\u00E9m em ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "UI Designer e UX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ", pois entendo que uma \u00F3tima interface e experi\u00EAncia de usu\u00E1rio s\u00E3o de extrema import\u00E2ncia para a satisfa\u00E7\u00E3o do cliente e boa interatividade do usu\u00E1rio com a aplica\u00E7\u00E3o. Fora isso, ele precisa tamb\u00E9m ser bem adaptado para todas as resolu\u00E7\u00F5es e navegadores. A principal ferramenta que eu utilizo para a prototipa\u00E7\u00E3o do projeto \u00E9 o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Figma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Tenho tamb\u00E9m no\u00E7\u00F5es das principais tecnologias ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Backend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ", como por exemplo o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Java e o Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ", afim de ter uma boa comunica\u00E7\u00E3o com equipe e para saber a melhor forma de consumir a API e integrar com o lado servidor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Ver Projetos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Minhas Skills FrontEnd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Conhe\u00E7a minhas tecnologias frontend: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Front-end");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Frameworks / Libs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "UI / UX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Tecnologias Auxiliares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Minhas Skills BackEnd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "No\u00E7\u00F5es de algumas tecnologias backend:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Back-end");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Frameworks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Databases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Minhas Skills Gerais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Ferramentas utilit\u00E1rias que eu conhe\u00E7o:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Unit Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "GIT / Repository");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_aside_aside_component__WEBPACK_IMPORTED_MODULE_1__["AsideComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".highlight[_ngcontent-%COMP%] {\r\n  color: var(--main-color);\r\n}\r\n\r\n.about-container[_ngcontent-%COMP%] {\r\n  flex: 1 1 80%;\r\n  min-height: 100vh;\r\n  background-color: var(--about-bg-color);\r\n  padding: 50px;\r\n}\r\ni[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n[aria-label][_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n[aria-label][_ngcontent-%COMP%]::after {\r\n  content: attr(aria-label);\r\n  display: none;\r\n  position: absolute;\r\n  top: 110%;\r\n  left: 0px;\r\n  z-index: 5000;\r\n  border-radius: 10px;\r\n  pointer-events: none;\r\n  padding: 8px 10px;\r\n  text-decoration: none;\r\n  font-size: 28px;\r\n  color: #61dafb;\r\n  background-color: #1e2a3a;\r\n}\r\n[aria-label][_ngcontent-%COMP%]:hover::after {\r\n  display: block;\r\n}\r\n.name[_ngcontent-%COMP%] {\r\n  font-size: 42px;\r\n  margin-bottom: 15px;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  margin-bottom: 15px;\r\n  font-weight: bold;\r\n}\r\n.description[_ngcontent-%COMP%] {\r\n  max-width: 75%;\r\n  margin-bottom: 10px;\r\n}\r\n.btn-projects[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  color: var(--black-color);\r\n  background-color: var(--main-color);\r\n  border: 2px solid var(--main-color);\r\n  border-radius: 5px;\r\n  text-decoration: none;\r\n  transition: .5s;\r\n  margin: 25px 0;\r\n  padding: 12px 10px;\r\n  width: 150px;\r\n  text-align: center;\r\n  display: flex;\r\n}\r\n.btn-projects[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .btn-projects[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  flex: 1 1 0;\r\n}\r\n.btn-projects[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  max-width: 20px;\r\n}\r\n.btn-projects[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent;\r\n  color: var(--main-text-color);\r\n}\r\n.skills-section-title[_ngcontent-%COMP%] {\r\n  border-top: 1px solid var(--border-color);\r\n  padding-top: 20px;\r\n  margin-bottom: 20px;\r\n  font-size: 32px;\r\n}\r\n.skills-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-top: 25px;\r\n}\r\n\r\n@media(max-width: 450px) {\r\n\r\n  .about-container[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 30px;\r\n  }\r\n\r\n  .about-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\r\n    margin: 10px auto;\r\n    max-width: 100%;\r\n    line-height: 26px;\r\n  }\r\n\r\n  .btn-projects[_ngcontent-%COMP%] {\r\n    margin: 20px auto;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZO0FBQ1o7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVDQUF1QztFQUN2QyxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBRUE7O0VBRUUsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFHQSxXQUFXO0FBQ1g7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2VuZXJhbCAqL1xyXG4uaGlnaGxpZ2h0IHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbn1cclxuICBcclxuLyogYWJvdXQgY29udGFpbmVyICovXHJcbi5hYm91dC1jb250YWluZXIge1xyXG4gIGZsZXg6IDEgMSA4MCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWJvdXQtYmctY29sb3IpO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbmk6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuW2FyaWEtbGFiZWxdIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuICBcclxuW2FyaWEtbGFiZWxdOjphZnRlciB7XHJcbiAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDExMCU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHotaW5kZXg6IDUwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBwYWRkaW5nOiA4cHggMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiAjNjFkYWZiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTJhM2E7XHJcbn1cclxuXHJcblthcmlhLWxhYmVsXTpob3Zlcjo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgZm9udC1zaXplOiA0MnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmJ0bi1wcm9qZWN0cyB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgcGFkZGluZzogMTJweCAxMHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJ0bi1wcm9qZWN0cyBpb24taWNvbixcclxuLmJ0bi1wcm9qZWN0cyBzcGFuIHtcclxuICBmbGV4OiAxIDEgMDtcclxufVxyXG5cclxuLmJ0bi1wcm9qZWN0cyBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1heC13aWR0aDogMjBweDtcclxufVxyXG5cclxuLmJ0bi1wcm9qZWN0czpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5za2lsbHMtc2VjdGlvbi10aXRsZSB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5za2lsbHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG5cclxuLyogTW9iaWxlICovXHJcbkBtZWRpYShtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcblxyXG4gIC5hYm91dC1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcblxyXG4gIC5hYm91dC1jb250YWluZXIgLmRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByb2plY3RzIHtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIH1cclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "2X6e":
/*!*****************************************************!*\
  !*** ./src/app/components/aside/aside.component.ts ***!
  \*****************************************************/
/*! exports provided: AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AsideComponent {
    constructor() { }
    ngOnInit() {
    }
}
AsideComponent.ɵfac = function AsideComponent_Factory(t) { return new (t || AsideComponent)(); };
AsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideComponent, selectors: [["app-aside"]], decls: 23, vars: 0, consts: [[1, "bio-container"], ["src", "assets/images/profile.jpg", "alt", "Jackson Lacerda", 1, "bio-image"], [1, "highlight"], [1, "contact-text"], [1, "social-container"], ["href", "https://www.linkedin.com/in/jackson-lacerda-a02500229/", "target", "_blank"], [1, "fab", "fa-linkedin"], ["href", "https://github.com/jacksonlacerda", "target", "_blank"], [1, "fab", "fa-github"], ["href", "mailto:jacksonlacerda2106@gmail.com", "target", "_blank"], [1, "fas", "fa-envelope"], [1, "email-container"], ["href", "mailto:jacksonlacerda2106@gmail.com"]], template: function AsideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Jackson Lacerda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Desenvolvedor FrontEnd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " focado em Angular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "CONTATO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "jacksonlacerda2106@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bio-container[_ngcontent-%COMP%] {\r\n    flex: 1 1 20%;\r\n    height: 100%;\r\n    background-color: var(--bio-bg-color);\r\n    text-align: center;\r\n    padding: 30px 12px;\r\n    border-right: 5px solid var(--bio-border-color);\r\n}\r\n\r\n\r\n\r\n.bio-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.bio-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.bio-container[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.bio-container[_ngcontent-%COMP%]   .contact-text[_ngcontent-%COMP%] {\r\n    border-top: 1px solid var(--border-color);\r\n    padding-top: 20px;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.bio-image[_ngcontent-%COMP%] {\r\n    width: 175px;\r\n    height: 175px;\r\n    border-radius: 50%;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.social-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    list-style: none;\r\n    margin-bottom: 0px;\r\n    padding-top: 14px;\r\n    padding-bottom: 25px;\r\n}\r\n\r\n.social-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    flex: 1 1 0;\r\n    max-width: 60px;\r\n}\r\n\r\n.social-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: var(--main-color);\r\n    font-size: 30px;\r\n}\r\n\r\n.email-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: var(--main-color);\r\n    font-size: 30px;\r\n}\r\n\r\n.email-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    justify-content: center;\r\n}\r\n\r\n.email-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .email-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    flex: 1 1 0;\r\n}\r\n\r\n.email-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: var(--main-text-color);\r\n    text-decoration: none;\r\n    margin-top: 15px;\r\n    font-size: 18px;\r\n    text-align: center;\r\n}\r\n\r\n.email-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\r\n    color: var(--main-color);\r\n    font-size: 20px;\r\n    margin-right: 5px;\r\n    max-width: 20px;\r\n}\r\n\r\n\r\n\r\n@media(max-width: 450px) {\r\n\r\n    .bio-container[_ngcontent-%COMP%] {\r\n      min-height: auto;\r\n      border-right: none;\r\n      border-bottom: 5px solid var(--bio-border-color);\r\n    }\r\n  \r\n    .bio-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  \r\n    .bio-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n      max-width: 60%;\r\n      margin: 10px auto;\r\n    }\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLCtDQUErQztBQUNuRDs7QUFFQSxrQkFBa0I7O0FBQ2xCO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQSxXQUFXOztBQUNYOztJQUVJO01BQ0UsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixnREFBZ0Q7SUFDbEQ7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxjQUFjO01BQ2QsaUJBQWlCO0lBQ25COztBQUVKIiwiZmlsZSI6ImFzaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlvLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxIDEgMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmlvLWJnLWNvbG9yKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTJweDtcclxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHZhcigtLWJpby1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4vKiBCaW8gY29udGFpbmVyICovXHJcbi5iaW8tY29udGFpbmVyIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5iaW8tY29udGFpbmVyIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJpby1jb250YWluZXIgLndlbGNvbWUtdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJpby1jb250YWluZXIgLmNvbnRhY3QtdGV4dCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5iaW8taW1hZ2Uge1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgaGVpZ2h0OiAxNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG59XHJcbiAgXHJcbi5zb2NpYWwtY29udGFpbmVyIGxpIHtcclxuICAgIGZsZXg6IDEgMSAwO1xyXG4gICAgbWF4LXdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4uc29jaWFsLWNvbnRhaW5lciBsaSBhIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmVtYWlsLWNvbnRhaW5lciBpIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmVtYWlsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbWFpbC1jb250YWluZXIgaW9uLWljb24sXHJcbi5lbWFpbC1jb250YWluZXIgYSB7XHJcbiAgICBmbGV4OiAxIDEgMDtcclxufVxyXG5cclxuLmVtYWlsLWNvbnRhaW5lciBhIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVtYWlsLWNvbnRhaW5lciBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1heC13aWR0aDogMjBweDtcclxufVxyXG5cclxuLyogTW9iaWxlICovXHJcbkBtZWRpYShtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcblxyXG4gICAgLmJpby1jb250YWluZXIge1xyXG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1iaW8tYm9yZGVyLWNvbG9yKTtcclxuICAgIH1cclxuICBcclxuICAgIC5iaW8tY29udGFpbmVyIGgyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC5iaW8tY29udGFpbmVyIHAge1xyXG4gICAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgXHJcbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/projects/projects.component */ "u/sh");
/* harmony import */ var _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/aside/aside.component */ "2X6e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");



// Pages


// Compenents


class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
        _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_5__["AsideComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "u/sh":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/aside/aside.component */ "2X6e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 85, vars: 0, consts: [[1, "container"], [1, "about-container"], [1, "fadeIn"], [1, "title"], [1, "highlight"], [1, "description"], ["routerLink", "/", 1, "btn-projects"], [1, "project"], [1, "skills-section-title"], ["src", "assets/images/lux.PNG", "alt", "lux", 1, "projects"], [1, "links-container"], ["href", "https://github.com/jacksonlacerda/lux", "target", "_blank"], [1, "fab", "fa-github"], [1, "text-link"], ["src", "assets/images/goldbank-financing.PNG", "alt", "goldbank financing", 1, "projects"], ["href", "https://github.com/jacksonlacerda/goldbank-financing", "target", "_blank"], ["href", "https://jacksonlacerda.github.io/goldbank-financing", "target", "_blank"], [1, "fas", "fa-desktop"], ["src", "assets/images/bootstrap.png", "alt", "technology", 1, "projects"], ["href", "https://github.com/jacksonlacerda/bootstrap", "target", "_blank"], ["href", "https://jacksonlacerda.github.io/bootstrap", "target", "_blank"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Projetos Desenvolvidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Estes projetos foram desenvolvidos com o intuito de treino e para servir como uma amostra dos meus conhecimentos nas respectivas tecnologias. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Portal de An\u00FAncios Imobili\u00E1rios:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "C\u00F3digo Fonte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Este projeto \u00E9 um site institucional de uma empresa TI prestadora de servi\u00E7os que cria aplicativos, sites e automatiza tarefas para os seus clientes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Tecnologias Utilizadas: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Angular - Typescript - Bootstrap - HTML - SCSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Testes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Karma - Jasmine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " API Fake: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Nodejs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Goldbank Financing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Simulador de Financiamento Imobiliario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "C\u00F3digo Fonte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "P\u00E1gina no Ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Este projeto \u00E9 um site institucional de uma empresa TI prestadora de servi\u00E7os que cria aplicativos, sites e automatiza tarefas para os seus clientes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Tecnologias Utilizadas: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Angular - Typescript - Bootstrap - HTML - SCSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Site Institucional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "C\u00F3digo Fonte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "P\u00E1gina no Ar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Este projeto \u00E9 um site institucional de uma empresa TI prestadora de servi\u00E7os que cria aplicativos, sites e automatiza tarefas para os seus clientes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Tecnologias Utilizadas: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Jquery - Bootstrap - HTML - CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_aside_aside_component__WEBPACK_IMPORTED_MODULE_1__["AsideComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".projects[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    \r\n}\r\n\r\n.links-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: var(--main-color);\r\n    font-size: 28px;\r\n}\r\n\r\n.links-container[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.links-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .links-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    margin-right: 30px;\r\n    left: 0;\r\n}\r\n\r\n.links-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: var(--main-text-color);\r\n    text-decoration: none;\r\n    margin-top: 15px;\r\n    font-size: 16px;\r\n    text-align: center;\r\n}\r\n\r\n.links-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\r\n    color: var(--main-color);\r\n    font-size: 20px;\r\n    margin-right: 5px;\r\n    max-width: 20px;\r\n}\r\n\r\nspan.text-link[_ngcontent-%COMP%]{\r\n    padding-left: 10px;\r\n}\r\n\r\n.project[_ngcontent-%COMP%]{\r\n    margin-bottom: 30px;\r\n}\r\n\r\n@media(max-width: 1024px) {\r\n\r\n    .projects[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n    }\r\n    \r\n}\r\n\r\n@media(max-width: 768px) {\r\n\r\n    .projects[_ngcontent-%COMP%] {\r\n        width: 90%;\r\n    }\r\n    \r\n}\r\n\r\n@media(max-width: 479px) {\r\n\r\n    .projects[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    .links-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n    }\r\n\r\n    .links-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n    \r\n}\r\n\r\n@media(max-width: 374px) {\r\n\r\n    .links-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .links-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .links-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .links-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        margin-right: 20px;\r\n        left: 0;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtJQUNWOzt5QkFFcUI7QUFDekI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLE9BQU87QUFDWDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJO1FBQ0ksVUFBVTtJQUNkOztBQUVKOztBQUVBOztJQUVJO1FBQ0ksVUFBVTtJQUNkOztBQUVKOztBQUVBOztJQUVJO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTs7UUFFSSxrQkFBa0I7UUFDbEIsT0FBTztJQUNYOztBQUVKIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnByb2plY3RzIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICAvKiBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAqL1xyXG59XHJcblxyXG4ubGlua3MtY29udGFpbmVyIGkge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG4ubGlua3MtY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmxpbmtzLWNvbnRhaW5lciBpb24taWNvbixcclxuLmxpbmtzLWNvbnRhaW5lciBhIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5saW5rcy1jb250YWluZXIgYSB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5rcy1jb250YWluZXIgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbnNwYW4udGV4dC1saW5re1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cclxuICAgIC5wcm9qZWN0cyB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgIC5wcm9qZWN0cyB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA0NzlweCkge1xyXG5cclxuICAgIC5wcm9qZWN0cyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmtzLWNvbnRhaW5lciBpIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmtzLWNvbnRhaW5lciBhIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogMzc0cHgpIHtcclxuXHJcbiAgICAubGlua3MtY29udGFpbmVyIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAubGlua3MtY29udGFpbmVyIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAubGlua3MtY29udGFpbmVyIGlvbi1pY29uLFxyXG4gICAgLmxpbmtzLWNvbnRhaW5lciBhIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/projects/projects.component */ "u/sh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");

// Pages




const routes = [
    {
        path: "",
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: "projetos",
        component: _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map