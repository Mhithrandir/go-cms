"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_custom_view_custom_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/custom-view/custom-view.component */ 3048);
/* harmony import */ var _services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/role-guard.service */ 6970);
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/login/login.component */ 93);
/* harmony import */ var _views_routes_routes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/routes/routes.component */ 5615);
/* harmony import */ var _views_user_types_user_types_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user-types/user-types.component */ 2668);
/* harmony import */ var _views_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/users/users.component */ 7623);
/* harmony import */ var _views_menu_view_menu_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/menu-view/menu-view.component */ 398);
/* harmony import */ var _views_database_database_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/database/database.component */ 4947);
/* harmony import */ var _views_component_editor_component_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/component-editor/component-editor.component */ 9600);
/* harmony import */ var _views_sheet_management_sheet_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/sheet-management/sheet-management.component */ 9940);
/* harmony import */ var _views_logs_logs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/logs/logs.component */ 9623);
/* harmony import */ var _views_characters_characters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/characters/characters.component */ 3989);
/* harmony import */ var _views_equip_type_equip_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/equip-type/equip-type.component */ 3270);
/* harmony import */ var _views_equip_equip_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/equip/equip.component */ 614);
/* harmony import */ var _views_forum_forum_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/forum/forum.component */ 932);
/* harmony import */ var _views_map_map_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/map/map.component */ 7312);
/* harmony import */ var _views_guilds_guilds_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/guilds/guilds.component */ 5475);
/* harmony import */ var _views_Frontend_character_character_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/Frontend/character/character.component */ 2427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);





















const routes = [
    // { path: 'logout', component: LogOutComponent },
    { path: 'be/users', component: _views_users_users_component__WEBPACK_IMPORTED_MODULE_5__.UsersComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'be/usertypes', component: _views_user_types_user_types_component__WEBPACK_IMPORTED_MODULE_4__.UserTypesComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'be/routes', component: _views_routes_routes_component__WEBPACK_IMPORTED_MODULE_3__.RoutesComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'be/menus', component: _views_menu_view_menu_view_component__WEBPACK_IMPORTED_MODULE_6__.MenuViewComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'be/database', component: _views_database_database_component__WEBPACK_IMPORTED_MODULE_7__.DatabaseComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'be/componenteditor', component: _views_component_editor_component_editor_component__WEBPACK_IMPORTED_MODULE_8__.ComponentEditorComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'be/sheetelement', component: _views_sheet_management_sheet_management_component__WEBPACK_IMPORTED_MODULE_9__.SheetManagementComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'be/logs', component: _views_logs_logs_component__WEBPACK_IMPORTED_MODULE_10__.LogsComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'be/characters', component: _views_characters_characters_component__WEBPACK_IMPORTED_MODULE_11__.CharactersComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'be/equip', component: _views_equip_equip_component__WEBPACK_IMPORTED_MODULE_13__.EquipComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'be/equiptype', component: _views_equip_type_equip_type_component__WEBPACK_IMPORTED_MODULE_12__.EquipTypeComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'be/forums', component: _views_forum_forum_component__WEBPACK_IMPORTED_MODULE_14__.ForumComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'be/location', component: _views_map_map_component__WEBPACK_IMPORTED_MODULE_15__.MapComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'be/guilds', component: _views_guilds_guilds_component__WEBPACK_IMPORTED_MODULE_16__.GuildsComponent, canActivate: [_services_role_guard_service__WEBPACK_IMPORTED_MODULE_1__.RoleGuardService] },
    { path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
    // { path: 'logout', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_custom_view_custom_view_component__WEBPACK_IMPORTED_MODULE_0__.CustomViewComponent },
    { path: 'ambientazione', component: _components_custom_view_custom_view_component__WEBPACK_IMPORTED_MODULE_0__.CustomViewComponent },
    { path: 'regolamento', component: _components_custom_view_custom_view_component__WEBPACK_IMPORTED_MODULE_0__.CustomViewComponent },
    { path: 'guida', component: _components_custom_view_custom_view_component__WEBPACK_IMPORTED_MODULE_0__.CustomViewComponent },
    { path: 'infoluoghi', component: _components_custom_view_custom_view_component__WEBPACK_IMPORTED_MODULE_0__.CustomViewComponent },
    { path: 'character', component: _views_Frontend_character_character_component__WEBPACK_IMPORTED_MODULE_17__.CharacterComponent },
    { path: 'be/home', component: _components_custom_view_custom_view_component__WEBPACK_IMPORTED_MODULE_0__.CustomViewComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _components_base_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/base/base.component */ 9604);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/dialog-type */ 1679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/commons.service */ 3765);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu/menu.component */ 5819);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dialog/dialog.component */ 9509);











function AppComponent_app_dialog_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-dialog", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancelClick", function AppComponent_app_dialog_9_Template_app_dialog_cancelClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r1.CancelDialogClick(); })("deleteClick", function AppComponent_app_dialog_9_Template_app_dialog_deleteClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.DeletelDialogClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Delete Item")("dialogType", ctx_r0.dialogType);
} }
class AppComponent extends _components_base_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(service, router, document) {
        super(service);
        this.router = router;
        this.document = document;
    }
    ngOnInit() {
        let menuName = "MainMenuFe";
        this.service.OnError.subscribe((_error) => {
            this.error = _error;
            window.setTimeout(() => {
                this.error = null;
            }, 5000);
        });
        this.service.OnShowDeleteDialog.subscribe((request) => {
            this.dialogType = _classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Delete;
            this.selectedRecord = request;
        });
        this.router.events.subscribe((event) => {
            if (!this.router.url.startsWith("/be")) {
                this.loadStyle('./styles/frontend.css');
            }
            else {
                this.loadStyle('');
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationError) {
                this.HandleError(event.error);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
                //do something on end activity
                if (event.url.startsWith("/be")) {
                    menuName = "MainMenuBe";
                }
                else {
                    menuName = "MainMenuFe";
                }
                //Load the correct menu based on the route
                this.service.Get("menu", "getMenu?menuName=" + menuName).subscribe((result) => {
                    let temp = this.service.FormatResponse(result).Data;
                    if ((this.records == null) || (temp.length != this.records.length)) {
                        this.records = temp;
                    }
                    else {
                        for (let i = 0; i < temp.length; i++) {
                            if (!this.Equals(temp[i], this.records[i])) {
                                this.records = temp;
                                break;
                            }
                        }
                    }
                }, (error) => {
                    this.HandleError(error);
                }, () => {
                    return this.records;
                });
            }
        });
    }
    closeError() {
        this.error = null;
    }
    Equals(first, m) {
        if ((first == null) || (m == null))
            return false;
        if ((first.MenuName != m.MenuName) || (first.Name != m.Name) || (first.Parent != m.Parent) || (first.IDRoute != m.IDRoute) || (first.MenuOrder != m.MenuOrder) || ((first.Childrens != null) && (m.Childrens != null) && (first.Childrens.length != m.Childrens.length))) {
            return false;
        }
        if ((first.Childrens != null) && (m.Childrens != null)) {
            for (let i = 0; i < first.Childrens.length; i++) {
                if (!this.Equals(first.Childrens[i], m.Childrens[i])) {
                    return false;
                }
            }
        }
        return true;
    }
    loadStyle(styleName) {
        const head = this.document.getElementsByTagName('head')[0];
        let themeLink = this.document.getElementById('frontend-theme');
        if (styleName != '') {
            if ((themeLink) && (themeLink.href != styleName)) {
                themeLink.href = styleName;
            }
            else {
                const style = this.document.createElement('link');
                style.id = 'frontend-theme';
                style.rel = 'stylesheet';
                style.href = `${styleName}`;
                head.appendChild(style);
            }
        }
        else {
            if (themeLink) {
                head.removeChild(themeLink);
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_commons_service__WEBPACK_IMPORTED_MODULE_2__.CommonsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 4, consts: [["id", "content", 1, "content"], [3, "menu"], [1, "render"], ["id", "error", 1, "error-message"], [1, "icon", 3, "click"], [3, "title", "dialogType", "cancelClick", "deleteClick", 4, "ngIf"], [3, "title", "dialogType", "cancelClick", "deleteClick"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_span_click_7_listener() { return ctx.closeError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppComponent_app_dialog_9_Template, 1, 2, "app-dialog", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("menu", ctx.records);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@showError", ctx.error != null ? "open" : "closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dialogType == 2);
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__.DialogComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)("showError", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)("open", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ minHeight: "auto", opacity: 1 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)("closed", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ height: "0px", opacity: 0, overflow: "hidden" })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)("* => closed", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)("0.5s")]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)("* => open", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)("0.5s")])
            ])
        ] } });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu.component */ 5819);
/* harmony import */ var _components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/base/base.component */ 9604);
/* harmony import */ var _services_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/commons.service */ 3765);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/login/login.component */ 93);
/* harmony import */ var _components_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/form-control/form-control.component */ 7175);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @kolkov/angular-editor */ 8888);
/* harmony import */ var _components_custom_view_custom_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/custom-view/custom-view.component */ 3048);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _views_users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/users/users.component */ 7623);
/* harmony import */ var _services_customizeheaders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/customizeheaders */ 1493);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dialog/dialog.component */ 9509);
/* harmony import */ var _views_routes_routes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/routes/routes.component */ 5615);
/* harmony import */ var _views_user_types_user_types_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/user-types/user-types.component */ 2668);
/* harmony import */ var _components_tree_node_tree_node_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tree-node/tree-node.component */ 1658);
/* harmony import */ var _views_menu_view_menu_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/menu-view/menu-view.component */ 398);
/* harmony import */ var _views_database_database_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/database/database.component */ 4947);
/* harmony import */ var _components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/code-editor/code-editor.component */ 7043);
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ngx-monaco-editor */ 6218);
/* harmony import */ var _components_edit_route_edit_route_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/edit-route/edit-route.component */ 809);
/* harmony import */ var _components_edit_user_type_edit_user_type_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/edit-user-type/edit-user-type.component */ 9877);
/* harmony import */ var _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-user/edit-user.component */ 7887);
/* harmony import */ var _components_edit_menu_edit_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/edit-menu/edit-menu.component */ 2666);
/* harmony import */ var _views_component_editor_component_editor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/component-editor/component-editor.component */ 9600);
/* harmony import */ var _views_sheet_management_sheet_management_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/sheet-management/sheet-management.component */ 9940);
/* harmony import */ var _components_edit_sheet_element_edit_sheet_element_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/edit-sheet-element/edit-sheet-element.component */ 5550);
/* harmony import */ var _views_logs_logs_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/logs/logs.component */ 9623);
/* harmony import */ var _views_characters_characters_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/characters/characters.component */ 3989);
/* harmony import */ var _views_equip_equip_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/equip/equip.component */ 614);
/* harmony import */ var _views_equip_type_equip_type_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/equip-type/equip-type.component */ 3270);
/* harmony import */ var _components_edit_equip_type_edit_equip_type_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/edit-equip-type/edit-equip-type.component */ 3717);
/* harmony import */ var _components_edit_equip_edit_equip_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/edit-equip/edit-equip.component */ 5631);
/* harmony import */ var _views_forum_forum_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/forum/forum.component */ 932);
/* harmony import */ var _components_edit_topic_edit_topic_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/edit-topic/edit-topic.component */ 6871);
/* harmony import */ var _views_map_map_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/map/map.component */ 7312);
/* harmony import */ var _components_edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/edit-location/edit-location.component */ 3268);
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/tabs/tabs.component */ 9450);
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/tab/tab.component */ 3385);
/* harmony import */ var _pipes_typefilter_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pipes/typefilter.pipe */ 3882);
/* harmony import */ var _pipes_parentfilter_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pipes/parentfilter.pipe */ 3244);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/table/table.component */ 9767);
/* harmony import */ var _views_guilds_guilds_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./views/guilds/guilds.component */ 5475);
/* harmony import */ var _components_edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/edit-component/edit-component.component */ 8600);
/* harmony import */ var _views_Frontend_character_character_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./views/Frontend/character/character.component */ 2427);
/* harmony import */ var _components_create_character_create_character_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/create-character/create-character.component */ 2778);
/* harmony import */ var _components_edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/edit-skills/edit-skills.component */ 2261);
/* harmony import */ var _components_edit_bundles_edit_bundles_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/edit-bundles/edit-bundles.component */ 9390);
/* harmony import */ var _components_edit_character_info_edit_character_info_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/edit-character-info/edit-character-info.component */ 8765);
/* harmony import */ var _components_expander_expander_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/expander/expander.component */ 6458);
/* harmony import */ var _components_block_editor_block_editor_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/block-editor/block-editor.component */ 6740);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/core */ 3184);

























































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_48__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_48__["ɵɵdefineInjector"]({ providers: [_services_commons_service__WEBPACK_IMPORTED_MODULE_4__.CommonsService, { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_49__.HTTP_INTERCEPTORS, useClass: _services_customizeheaders__WEBPACK_IMPORTED_MODULE_9__.CustomizeHeaders, multi: true }, { provide: _angular_common__WEBPACK_IMPORTED_MODULE_50__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_50__.HashLocationStrategy }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_51__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_49__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_52__.ReactiveFormsModule,
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_53__.AngularEditorModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_54__.BrowserAnimationsModule,
            ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_55__.MonacoEditorModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_48__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent,
        _components_base_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent,
        _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _components_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_6__.FormControlComponent,
        _components_custom_view_custom_view_component__WEBPACK_IMPORTED_MODULE_7__.CustomViewComponent,
        _views_users_users_component__WEBPACK_IMPORTED_MODULE_8__.UsersComponent,
        _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__.DialogComponent,
        _views_routes_routes_component__WEBPACK_IMPORTED_MODULE_11__.RoutesComponent,
        _views_user_types_user_types_component__WEBPACK_IMPORTED_MODULE_12__.UserTypesComponent,
        _components_tree_node_tree_node_component__WEBPACK_IMPORTED_MODULE_13__.TreeNodeComponent,
        _views_menu_view_menu_view_component__WEBPACK_IMPORTED_MODULE_14__.MenuViewComponent,
        _views_database_database_component__WEBPACK_IMPORTED_MODULE_15__.DatabaseComponent,
        _components_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_16__.CodeEditorComponent,
        _components_edit_route_edit_route_component__WEBPACK_IMPORTED_MODULE_17__.EditRouteComponent,
        _components_edit_user_type_edit_user_type_component__WEBPACK_IMPORTED_MODULE_18__.EditUserTypeComponent,
        _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_19__.EditUserComponent,
        _components_edit_menu_edit_menu_component__WEBPACK_IMPORTED_MODULE_20__.EditMenuComponent,
        _views_component_editor_component_editor_component__WEBPACK_IMPORTED_MODULE_21__.ComponentEditorComponent,
        _views_sheet_management_sheet_management_component__WEBPACK_IMPORTED_MODULE_22__.SheetManagementComponent,
        _components_edit_sheet_element_edit_sheet_element_component__WEBPACK_IMPORTED_MODULE_23__.EditSheetElementComponent,
        _views_logs_logs_component__WEBPACK_IMPORTED_MODULE_24__.LogsComponent,
        _views_characters_characters_component__WEBPACK_IMPORTED_MODULE_25__.CharactersComponent,
        _views_equip_equip_component__WEBPACK_IMPORTED_MODULE_26__.EquipComponent,
        _views_equip_type_equip_type_component__WEBPACK_IMPORTED_MODULE_27__.EquipTypeComponent,
        _components_edit_equip_type_edit_equip_type_component__WEBPACK_IMPORTED_MODULE_28__.EditEquipTypeComponent,
        _components_edit_equip_edit_equip_component__WEBPACK_IMPORTED_MODULE_29__.EditEquipComponent,
        _views_forum_forum_component__WEBPACK_IMPORTED_MODULE_30__.ForumComponent,
        _components_edit_topic_edit_topic_component__WEBPACK_IMPORTED_MODULE_31__.EditTopicComponent,
        _views_map_map_component__WEBPACK_IMPORTED_MODULE_32__.MapComponent,
        _components_edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_33__.EditLocationComponent,
        _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_34__.TabsComponent,
        _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_35__.TabComponent,
        _pipes_typefilter_pipe__WEBPACK_IMPORTED_MODULE_36__.TypefilterPipe,
        _pipes_parentfilter_pipe__WEBPACK_IMPORTED_MODULE_37__.ParentfilterPipe,
        _components_table_table_component__WEBPACK_IMPORTED_MODULE_38__.TableComponent,
        _views_guilds_guilds_component__WEBPACK_IMPORTED_MODULE_39__.GuildsComponent,
        _components_edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_40__.EditComponentComponent,
        _views_Frontend_character_character_component__WEBPACK_IMPORTED_MODULE_41__.CharacterComponent,
        _components_create_character_create_character_component__WEBPACK_IMPORTED_MODULE_42__.CreateCharacterComponent,
        _components_edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_43__.EditSkillsComponent,
        _components_edit_bundles_edit_bundles_component__WEBPACK_IMPORTED_MODULE_44__.EditBundlesComponent,
        _components_edit_character_info_edit_character_info_component__WEBPACK_IMPORTED_MODULE_45__.EditCharacterInfoComponent,
        _components_expander_expander_component__WEBPACK_IMPORTED_MODULE_46__.ExpanderComponent,
        _components_block_editor_block_editor_component__WEBPACK_IMPORTED_MODULE_47__.BlockEditorComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_51__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_49__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_52__.ReactiveFormsModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_53__.AngularEditorModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_54__.BrowserAnimationsModule, ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_55__.MonacoEditorModule] }); })();


/***/ }),

/***/ 6977:
/*!****************************************!*\
  !*** ./src/app/classes/basic-table.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicTable": () => (/* binding */ BasicTable)
/* harmony export */ });
class BasicTable {
}


/***/ }),

/***/ 7326:
/*!***************************************!*\
  !*** ./src/app/classes/data-table.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTable": () => (/* binding */ DataTable),
/* harmony export */   "DataColumn": () => (/* binding */ DataColumn)
/* harmony export */ });
class DataTable {
    constructor() {
        this.ChildrenRows = false;
        this.EditButton = false;
        this.DeleteButton = false;
        this.AddButton = false;
        this.ShowFilter = false;
    }
    Copy() {
        let result = new DataTable();
        result.Columns = this.Columns;
        result.ChildrenRows = this.ChildrenRows;
        result.EditButton = this.EditButton;
        result.DeleteButton = this.DeleteButton;
        result.AddButton = this.AddButton;
        result.AddButtonText = this.AddButtonText;
        return result;
    }
}
class DataColumn {
    constructor(name, type, desc = "") {
        if (desc == "") {
            this.Description = name;
        }
        else {
            this.Description = desc;
        }
        this.Name = name;
        this.Type = type;
    }
}


/***/ }),

/***/ 3226:
/*!*******************************************!*\
  !*** ./src/app/classes/delete-request.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteRequest": () => (/* binding */ DeleteRequest)
/* harmony export */ });
class DeleteRequest {
}


/***/ }),

/***/ 1679:
/*!****************************************!*\
  !*** ./src/app/classes/dialog-type.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogType": () => (/* binding */ DialogType)
/* harmony export */ });
var DialogType;
(function (DialogType) {
    DialogType[DialogType["Add"] = 1] = "Add";
    DialogType[DialogType["Delete"] = 2] = "Delete";
    DialogType[DialogType["Edit"] = 3] = "Edit";
    DialogType[DialogType["Error"] = 4] = "Error";
    DialogType[DialogType["Null"] = 99] = "Null";
})(DialogType || (DialogType = {}));


/***/ }),

/***/ 5709:
/*!***************************************!*\
  !*** ./src/app/classes/dictionary.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dictionary": () => (/* binding */ Dictionary)
/* harmony export */ });
class Dictionary {
    constructor() {
        this._keys = new Array();
        this._values = new Array();
    }
    add(key, value) {
        if (this.containsKey(key)) {
            throw new Error("Key already exist");
        }
        this._keys.push(key);
        this._values.push(value);
    }
    remove(key) {
        if (!this.containsKey(key)) {
            throw new Error("Key not exist exist");
        }
        let index = this._keys.indexOf(key);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
    }
    keys() {
        return this._keys;
    }
    values() {
        return this._values;
    }
    containsKey(key) {
        return (this._keys.indexOf(key) != -1);
    }
    get(key) {
        if (!this.containsKey(key)) {
            throw new Error("Key not exist exist");
        }
        return this._values[this._keys.indexOf(key)];
    }
    set(key, value) {
        if (!this.containsKey(key)) {
            throw new Error("Key not exist exist");
        }
        this._values[this._keys.indexOf(key)] = value;
    }
}


/***/ }),

/***/ 1139:
/*!*******************************************!*\
  !*** ./src/app/classes/editor-element.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorElement": () => (/* binding */ EditorElement)
/* harmony export */ });
/* harmony import */ var _basic_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table */ 6977);

class EditorElement extends _basic_table__WEBPACK_IMPORTED_MODULE_0__.BasicTable {
}


/***/ }),

/***/ 2754:
/*!***************************************!*\
  !*** ./src/app/classes/equip-type.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipType": () => (/* binding */ EquipType)
/* harmony export */ });
/* harmony import */ var _basic_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table */ 6977);

class EquipType extends _basic_table__WEBPACK_IMPORTED_MODULE_0__.BasicTable {
}


/***/ }),

/***/ 7307:
/*!**********************************!*\
  !*** ./src/app/classes/equip.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Equip": () => (/* binding */ Equip)
/* harmony export */ });
/* harmony import */ var _basic_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table */ 6977);

class Equip extends _basic_table__WEBPACK_IMPORTED_MODULE_0__.BasicTable {
}


/***/ }),

/***/ 6623:
/*!**********************************************!*\
  !*** ./src/app/classes/form-control-type.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormControlType": () => (/* binding */ FormControlType)
/* harmony export */ });
var FormControlType;
(function (FormControlType) {
    FormControlType[FormControlType["Input"] = 0] = "Input";
    FormControlType[FormControlType["Number"] = 1] = "Number";
    FormControlType[FormControlType["Select"] = 2] = "Select";
    FormControlType[FormControlType["Text"] = 3] = "Text";
    FormControlType[FormControlType["Mail"] = 4] = "Mail";
    FormControlType[FormControlType["Password"] = 5] = "Password";
    FormControlType[FormControlType["Checkbox"] = 6] = "Checkbox";
    FormControlType[FormControlType["CodeEditor"] = 7] = "CodeEditor";
    FormControlType[FormControlType["Image"] = 8] = "Image";
})(FormControlType || (FormControlType = {}));


/***/ }),

/***/ 9834:
/*!*************************************!*\
  !*** ./src/app/classes/location.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Location": () => (/* binding */ Location)
/* harmony export */ });
/* harmony import */ var _basic_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table */ 6977);

class Location extends _basic_table__WEBPACK_IMPORTED_MODULE_0__.BasicTable {
}


/***/ }),

/***/ 6093:
/*!*************************************!*\
  !*** ./src/app/classes/log-item.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogItem": () => (/* binding */ LogItem)
/* harmony export */ });
class LogItem {
    constructor(element) {
        this.Data = element.Data;
        this.Package = element.Package;
        this.Function = element.Function;
        this.Message = element.Message;
        this.Info = element.Info;
        this.Severity = element.Severity;
        this.StackTrace = element.StackTrace.replaceAll("\n", "<br>");
    }
}


/***/ }),

/***/ 7075:
/*!**************************************!*\
  !*** ./src/app/classes/menu-item.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItem": () => (/* binding */ MenuItem)
/* harmony export */ });
/* harmony import */ var _basic_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table */ 6977);

class MenuItem extends _basic_table__WEBPACK_IMPORTED_MODULE_0__.BasicTable {
}


/***/ }),

/***/ 7524:
/*!****************************************!*\
  !*** ./src/app/classes/page-button.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageButton": () => (/* binding */ PageButton)
/* harmony export */ });
class PageButton {
}


/***/ }),

/***/ 4584:
/*!*****************************************!*\
  !*** ./src/app/classes/pkg-response.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PkgResponse": () => (/* binding */ PkgResponse)
/* harmony export */ });
class PkgResponse {
    constructor(obj) {
        this.Data = obj.Data;
        this.Page = obj.Page;
        this.PageCount = obj.PageCount;
    }
}


/***/ }),

/***/ 1085:
/*!*********************************************!*\
  !*** ./src/app/classes/route-permission.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutePermission": () => (/* binding */ RoutePermission)
/* harmony export */ });
/* harmony import */ var _basic_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table */ 6977);

class RoutePermission extends _basic_table__WEBPACK_IMPORTED_MODULE_0__.BasicTable {
}


/***/ }),

/***/ 5921:
/*!**********************************!*\
  !*** ./src/app/classes/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var _basic_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table */ 6977);

class Route extends _basic_table__WEBPACK_IMPORTED_MODULE_0__.BasicTable {
}


/***/ }),

/***/ 6343:
/*!***********************************************!*\
  !*** ./src/app/classes/sheet-element-type.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SheetElementType": () => (/* binding */ SheetElementType)
/* harmony export */ });
/* harmony import */ var _basic_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table */ 6977);

class SheetElementType extends _basic_table__WEBPACK_IMPORTED_MODULE_0__.BasicTable {
}


/***/ }),

/***/ 116:
/*!******************************************!*\
  !*** ./src/app/classes/sheet-element.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SheetElement": () => (/* binding */ SheetElement),
/* harmony export */   "SheetElementValue": () => (/* binding */ SheetElementValue)
/* harmony export */ });
/* harmony import */ var _basic_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table */ 6977);

class SheetElement extends _basic_table__WEBPACK_IMPORTED_MODULE_0__.BasicTable {
}
class SheetElementValue {
}


/***/ }),

/***/ 9537:
/*!*******************************************!*\
  !*** ./src/app/classes/site-component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteComponent": () => (/* binding */ SiteComponent)
/* harmony export */ });
/* harmony import */ var _basic_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table */ 6977);

class SiteComponent extends _basic_table__WEBPACK_IMPORTED_MODULE_0__.BasicTable {
}


/***/ }),

/***/ 5554:
/*!******************************************!*\
  !*** ./src/app/classes/topic-message.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopicMessage": () => (/* binding */ TopicMessage)
/* harmony export */ });
/* harmony import */ var _basic_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table */ 6977);

class TopicMessage extends _basic_table__WEBPACK_IMPORTED_MODULE_0__.BasicTable {
}


/***/ }),

/***/ 6750:
/*!**********************************!*\
  !*** ./src/app/classes/topic.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Topic": () => (/* binding */ Topic)
/* harmony export */ });
/* harmony import */ var _basic_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table */ 6977);

class Topic extends _basic_table__WEBPACK_IMPORTED_MODULE_0__.BasicTable {
}


/***/ }),

/***/ 5258:
/*!**************************************!*\
  !*** ./src/app/classes/user-type.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserType": () => (/* binding */ UserType)
/* harmony export */ });
/* harmony import */ var _basic_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table */ 6977);

class UserType extends _basic_table__WEBPACK_IMPORTED_MODULE_0__.BasicTable {
}


/***/ }),

/***/ 9604:
/*!***************************************************!*\
  !*** ./src/app/components/base/base.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_delete_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/delete-request */ 3226);
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/commons.service */ 3765);




class BaseComponent {
    constructor(service) {
        this.service = service;
        this.page = "0";
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Null;
    }
    ngOnInit() {
    }
    HandleError(_error) {
        this.service.SetError(_error);
        this.error = _error.message;
        console.error(_error);
    }
    OpenDeleteDialog(id, pkg, func) {
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Delete;
        this.selectedRecord = new src_app_classes_delete_request__WEBPACK_IMPORTED_MODULE_0__.DeleteRequest();
        this.selectedRecord.ID = id;
        this.selectedRecord.Package = pkg;
        this.selectedRecord.Func = func;
        this.service.ShowDeleteDialog(this.selectedRecord);
    }
    CancelDialogClick() {
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Null;
        this.selectedRecord = null;
    }
    DeletelDialogClick() {
        this.service.Delete(this.selectedRecord.Package, this.selectedRecord.Func, this.selectedRecord.ID).subscribe((result) => {
            if (this.service.FormatResponse(result).Data) {
                this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Null;
                location.reload();
            }
        });
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_commons_service__WEBPACK_IMPORTED_MODULE_2__.CommonsService)); };
BaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], decls: 2, vars: 0, template: function BaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "base-component works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6740:
/*!*******************************************************************!*\
  !*** ./src/app/components/block-editor/block-editor.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockEditorComponent": () => (/* binding */ BlockEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var src_app_classes_editor_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/editor-element */ 1139);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/dialog.component */ 9509);









function BlockEditorComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.element.Type);
} }
function BlockEditorComponent__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockEditorComponent__svg_svg_5_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.ShowMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockEditorComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function BlockEditorComponent_form_6_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.SavePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-form-control", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-form-control", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockEditorComponent_form_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.CancelEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r2.mainFrmGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "* Name")("controlName", "name")("frmGroup", ctx_r2.mainFrmGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "* Route")("controlName", "route")("controlType", 2)("dataList", ctx_r2.routes)("descField", "Path")("frmGroup", ctx_r2.mainFrmGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r2.mainFrmGroup.invalid);
} }
function BlockEditorComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockEditorComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.Add("columns"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Columns");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockEditorComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockEditorComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.Add("column"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockEditorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockEditorComponent_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r25.Add("text"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockEditorComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockEditorComponent_div_11_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r27.Add("button"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "text", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Button");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Button");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockEditorComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockEditorComponent_div_12_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r29.Add("title"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "text", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "H");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tspan", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockEditorComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockEditorComponent_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r31.Add("image"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function BlockEditorComponent_app_block_editor_15_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-block-editor", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ondeleting", function BlockEditorComponent_app_block_editor_15_Template_app_block_editor_ondeleting_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r34.DeleteChildren($event); })("onselecting", function BlockEditorComponent_app_block_editor_15_Template_app_block_editor_onselecting_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r36.SelectChildren($event); })("onsaved", function BlockEditorComponent_app_block_editor_15_Template_app_block_editor_onsaved_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r37.SavedChildren($event); })("onmousenterchild", function BlockEditorComponent_app_block_editor_15_Template_app_block_editor_onmousenterchild_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r38.MouseChild($event); })("onmousleavechild", function BlockEditorComponent_app_block_editor_15_Template_app_block_editor_onmousleavechild_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r39.MouseChild($event); })("onmove", function BlockEditorComponent_app_block_editor_15_Template_app_block_editor_onmove_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r40.MoveChildren($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("element", e_r33);
} }
function BlockEditorComponent_h1_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "h1", 38);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r10.element.Content, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function BlockEditorComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "button", 38);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r11.element.Content, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function BlockEditorComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 38);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r12.element.Content, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function BlockEditorComponent_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 39);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r13.element.Content, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function BlockEditorComponent_footer_21_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockEditorComponent_footer_21_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r41.Delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockEditorComponent_footer_21_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r43.Select(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "svg", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockEditorComponent_footer_21_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r44.Move(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "svg", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockEditorComponent_footer_21_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r45.Move(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Delete ", ctx_r14.element.Type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Edit ", ctx_r14.element.Type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Move up ", ctx_r14.element.Type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Move down ", ctx_r14.element.Type, " ");
} }
function BlockEditorComponent_app_dialog_22_app_form_control_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-form-control", 50);
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "Content")("controlName", "text")("controlType", 3)("frmGroup", ctx_r46.frmGroup);
} }
function BlockEditorComponent_app_dialog_22_app_form_control_5_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-form-control", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onFileChanged", function BlockEditorComponent_app_dialog_22_app_form_control_5_Template_app_form_control_onFileChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r48.onFileChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "Image")("controlName", "image")("controlType", 8)("frmGroup", ctx_r47.frmGroup);
} }
function BlockEditorComponent_app_dialog_22_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-dialog", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancelClick", function BlockEditorComponent_app_dialog_22_Template_app_dialog_cancelClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r50.CancelDialogClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function BlockEditorComponent_app_dialog_22_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r52.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-form-control", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-form-control", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BlockEditorComponent_app_dialog_22_app_form_control_4_Template, 1, 4, "app-form-control", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, BlockEditorComponent_app_dialog_22_app_form_control_5_Template, 1, 4, "app-form-control", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Edit element")("dialogType", ctx_r15.dialogType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r15.frmGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "Id (off) or class (on)")("controlName", "class")("controlType", 6)("frmGroup", ctx_r15.frmGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "name (Id or class)")("controlName", "id")("frmGroup", ctx_r15.frmGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r15.selectedElement.Type == "title" || ctx_r15.selectedElement.Type == "button" || ctx_r15.selectedElement.Type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r15.selectedElement.Type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r15.frmGroup.invalid);
} }
const _c0 = function (a1) { return { "tool-menu": true, "hidden": a1 }; };
const _c1 = function (a1, a2) { return { "container": true, "vertical": a1, "horizontal": a2 }; };
class BlockEditorComponent {
    constructor(fb) {
        this.fb = fb;
        this.hideMenu = true;
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Null;
        this.ondeleting = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onselecting = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onsaved = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onmousenterchild = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onmousleavechild = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onsavepage = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.oncanceledit = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onmove = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        if (this.element == null) {
            //main element
            this.element = new src_app_classes_editor_element__WEBPACK_IMPORTED_MODULE_1__.EditorElement();
            this.element.Childrens = new Array();
            this.element.Type = "main";
            this.element.VerticalOrientation = true;
        }
        this.mainFrmGroup = this.createMainSignupForm();
    }
    createSignupForm() {
        let vett = {};
        vett['id'] = [this.selectedElement.IDElement];
        vett['class'] = [this.selectedElement.IsClass];
        vett['text'] = [this.selectedElement.Content];
        vett['image'] = [this.selectedElement.ImageName];
        var resullt = this.fb.group(vett);
        return resullt;
    }
    createMainSignupForm() {
        let vett = {};
        vett['name'] = [this.element.IDElement, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])];
        vett['route'] = [this.element.IDRoute];
        var resullt = this.fb.group(vett);
        return resullt;
    }
    ShowMenu() {
        this.hideMenu = !this.hideMenu;
    }
    Add(type) {
        let children = new src_app_classes_editor_element__WEBPACK_IMPORTED_MODULE_1__.EditorElement();
        children.Childrens = new Array();
        if (type == "column") {
            type = "container";
        }
        children.Type = type;
        switch (type) {
            case 'text':
                children.Content = "Example text";
                break;
            case 'button':
                children.Content = "Example button";
                break;
            case 'title':
                children.Content = "Example title";
                break;
            case 'image':
                children.Content = "http://via.placeholder.com/100x50";
                break;
        }
        if (type == 'columns') {
            for (let i = 0; i < 3; i++) {
                let c = new src_app_classes_editor_element__WEBPACK_IMPORTED_MODULE_1__.EditorElement();
                c.Childrens = new Array();
                c.Type = 'container';
                c.VerticalOrientation = true;
                c.ShowTitle = false;
                children.Childrens.push(c);
            }
        }
        children.IDParent = this.element.ID;
        this.element.Childrens.push(children);
    }
    Delete() {
        this.ondeleting.emit(this.element);
    }
    DeleteChildren(c) {
        let index = this.element.Childrens.indexOf(c);
        this.element.Childrens.splice(index, 1);
    }
    Select() {
        this.onselecting.emit(this.element);
    }
    SelectChildren(c) {
        let index = this.element.Childrens.indexOf(c);
        this.selectedElement = this.element.Childrens[index];
        this.frmGroup = this.createSignupForm();
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Edit;
    }
    CancelDialogClick() {
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Null;
    }
    onSubmit() {
        this.selectedElement.IDElement = this.frmGroup.controls["id"].value;
        this.selectedElement.IsClass = this.frmGroup.controls["class"].value;
        if (this.selectedElement.Type != 'image') {
            this.selectedElement.Content = this.frmGroup.controls["text"].value;
        }
        this.onsaved.emit(this.selectedElement);
        this.CancelDialogClick();
    }
    SavedChildren($event) {
        let index = this.element.Childrens.indexOf($event);
        this.element.Childrens[index] = $event;
    }
    ShowTitle($event, element) {
        element.ShowTitle = ($event.type == "mouseenter");
        if (element.ShowTitle) {
            this.onmousenterchild.emit(false);
        }
        else {
            this.onmousleavechild.emit(true);
        }
    }
    MouseChild(element) {
        this.element.ShowTitle = element;
    }
    onFileChanged($event) {
        this.userFile = $event;
        var reader = new FileReader();
        reader.readAsDataURL(this.userFile);
        reader.onloadend = (() => {
            this.selectedElement.Content = reader.result;
            this.selectedElement.ImageName = this.userFile.name;
        });
    }
    SavePage() {
        this.element.IDElement = this.mainFrmGroup.controls["name"].value;
        this.element.IDRoute = parseInt(this.mainFrmGroup.controls["route"].value);
        this.onsavepage.emit(this.element);
    }
    CancelEdit() {
        this.oncanceledit.emit();
    }
    Move(up) {
        this.onmove.emit({ element: this.element, up: up });
    }
    MoveChildren($event) {
        let index = this.element.Childrens.indexOf($event.element);
        this.element.Childrens.splice(index, 1);
        if ($event.up) {
            this.element.Childrens.splice(index - 1, 0, $event.element);
        }
        else {
            this.element.Childrens.splice(index + 1, 0, $event.element);
        }
    }
}
BlockEditorComponent.ɵfac = function BlockEditorComponent_Factory(t) { return new (t || BlockEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
BlockEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BlockEditorComponent, selectors: [["app-block-editor"]], inputs: { element: "element", routes: "routes" }, outputs: { ondeleting: "ondeleting", onselecting: "onselecting", onsaved: "onsaved", onmousenterchild: "onmousenterchild", onmousleavechild: "onmousleavechild", onsavepage: "onsavepage", oncanceledit: "oncanceledit", onmove: "onmove" }, decls: 23, vars: 24, consts: [[1, "border", 3, "mouseenter", "mouseleave"], [1, "barra"], [1, "tool-bar"], ["class", "type", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "viewBox", "0 0 459.325 459.325", 3, "click", 4, "ngIf"], ["method", "post", 3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "ngClass", "mouseleave"], ["class", "button", 3, "click", 4, "ngIf"], [3, "ngClass"], [3, "element", "ondeleting", "onselecting", "onsaved", "onmousenterchild", "onmousleavechild", "onmove", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], ["height", "100", 3, "src", 4, "ngSwitchCase"], [4, "ngIf"], [3, "title", "dialogType", "cancelClick", 4, "ngIf"], [1, "type"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "viewBox", "0 0 459.325 459.325", 3, "click"], ["d", "M459.319 229.668c0 22.201-17.992 40.193-40.205 40.193H269.85v149.271c0 22.207-17.998 40.199-40.196 40.193-11.101 0-21.149-4.492-28.416-11.763-7.276-7.281-11.774-17.324-11.769-28.419l-.006-149.288H40.181c-11.094 0-21.134-4.492-28.416-11.774C4.501 250.817.006 240.769.006 229.668 0 207.471 17.992 189.475 40.202 189.475h149.267V40.202C189.469 17.998 207.471 0 229.671 0c22.192.006 40.178 17.986 40.19 40.187v149.288h149.282c22.196.012 40.165 17.996 40.176 40.193z"], ["method", "post", 3, "formGroup", "ngSubmit"], [3, "label", "controlName", "frmGroup"], [3, "label", "controlName", "controlType", "dataList", "descField", "frmGroup"], ["type", "submit", 1, "btn", "unselectable", 3, "disabled"], ["type", "button", 1, "btn-warning", "unselectable", 3, "click"], [1, "button", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "fill-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "2", "clip-rule", "evenodd", "viewBox", "0 0 385 139"], ["d", "M112.5 12c0-4.139-3.36-7.5-7.5-7.5H20c-4.14 0-7.5 3.361-7.5 7.5v15c0 4.139 3.36 7.5 7.5 7.5h85c4.14 0 7.5-3.361 7.5-7.5V12ZM112.5 62c0-4.139-3.36-7.5-7.5-7.5H20c-4.14 0-7.5 3.361-7.5 7.5v15c0 4.139 3.36 7.5 7.5 7.5h85c4.14 0 7.5-3.361 7.5-7.5V62ZM112.5 112c0-4.139-3.36-7.5-7.5-7.5H20c-4.14 0-7.5 3.361-7.5 7.5v15c0 4.139 3.36 7.5 7.5 7.5h85c4.14 0 7.5-3.361 7.5-7.5v-15ZM242.5 12c0-4.139-3.36-7.5-7.5-7.5h-85c-4.139 0-7.5 3.361-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h85c4.14 0 7.5-3.361 7.5-7.5V12ZM242.5 62c0-4.139-3.36-7.5-7.5-7.5h-85c-4.139 0-7.5 3.361-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h85c4.14 0 7.5-3.361 7.5-7.5V62ZM242.5 112c0-4.139-3.36-7.5-7.5-7.5h-85c-4.139 0-7.5 3.361-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h85c4.14 0 7.5-3.361 7.5-7.5v-15ZM372.5 12c0-4.139-3.36-7.5-7.5-7.5h-85c-4.139 0-7.5 3.361-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h85c4.14 0 7.5-3.361 7.5-7.5V12ZM372.5 62c0-4.139-3.36-7.5-7.5-7.5h-85c-4.139 0-7.5 3.361-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h85c4.14 0 7.5-3.361 7.5-7.5V62ZM372.5 112c0-4.139-3.36-7.5-7.5-7.5h-85c-4.139 0-7.5 3.361-7.5 7.5v15c0 4.139 3.361 7.5 7.5 7.5h85c4.14 0 7.5-3.361 7.5-7.5v-15Z"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "viewBox", "0 0 349.078 349.078"], ["d", "M198.779 322.441v-58.245c0-7.903 6.406-14.304 14.304-14.304 28.183 0 43.515-28.904 45.643-85.961h-45.643c-7.897 0-14.304-6.41-14.304-14.304V26.64c0-7.9 6.406-14.301 14.304-14.301h121.69c7.896 0 14.305 6.408 14.305 14.301v122.988c0 27.349-2.761 52.446-8.181 74.611-5.568 22.722-14.115 42.587-25.398 59.049-11.604 16.917-26.132 30.192-43.155 39.437-17.152 9.304-37.09 14.026-59.267 14.026-7.891-.006-14.298-6.413-14.298-14.31zM14.301 249.887C6.404 249.887 0 256.293 0 264.185v58.257c0 7.896 6.404 14.298 14.301 14.298 22.166 0 42.114-4.723 59.255-14.026 17.032-9.244 31.558-22.508 43.161-39.437 11.29-16.462 19.836-36.328 25.404-59.061 5.423-22.165 8.178-47.263 8.178-74.6V26.628c0-7.9-6.41-14.301-14.304-14.301H14.301C6.404 12.327 0 18.734 0 26.628v122.988c0 7.899 6.404 14.304 14.301 14.304h45.002c-2.102 57.062-17.213 85.967-45.002 85.967z"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "fill-rule", "evenodd", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "1.5", "clip-rule", "evenodd", "viewBox", "0 0 347 159"], ["stroke-width", "10", "fill", "none", "d", "M340 134.25c0-18.351-16.538-33.25-36.909-33.25H43.909C23.538 101 7 115.899 7 134.25v66.5C7 219.101 23.538 234 43.909 234h259.182C323.462 234 340 219.101 340 200.75v-66.5Z", "transform", "matrix(1.00924 0 0 1.1203 -2.065 -108.15)"], ["x", "62", "y", "209", "font-family", "'ArialMT','Arial',sans-serif", "font-size", "102.852", "transform", "matrix(.92301 0 0 .925 -20.164 -73.819)"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "fill-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "2", "clip-rule", "evenodd", "viewBox", "0 0 203 83"], ["x", "32", "y", "209", "font-family", "'ArialMT','Arial',sans-serif", "font-size", "122.852", "transform", "matrix(.92301 0 0 .925 -32.194 -111.981)"], ["x", "102.484px 129.778px", "y", "209px 209px"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "fill-rule", "evenodd", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-miterlimit", "1.5", "clip-rule", "evenodd", "viewBox", "0 0 383 455"], ["fill", "none", "stroke-width", "60", "d", "M182 18h262v571H182z", "transform", "matrix(1.44275 0 0 .7881 -260.08 -11.686)"], ["stroke-width", "0", "d", "m32 396 319 1-52-268-114 153-59-59.556L32 396Z"], [3, "element", "ondeleting", "onselecting", "onsaved", "onmousenterchild", "onmousleavechild", "onmove"], [3, "innerHTML"], ["height", "100", 3, "src"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "viewBox", "0 0 496.268 496.268"], ["d", "M106.908 64.516V478.11c0 10.024 8.122 18.157 18.158 18.157h246.139c10.036 0 18.158-8.133 18.158-18.157l-.438-413.594H106.908zm61.531 401.111h-27.237V88.851h27.237v376.776zm93.311 0h-27.24V88.851h27.24v376.776zm96.842 0h-27.237V88.851h27.237v376.776zm47.339-447.572v28.259H90.337V18.055h96.284V0H309.65v18.055h96.281z"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "viewBox", "0 0 405.272 405.272"], ["d", "M393.401 124.425 179.603 338.208c-15.832 15.835-41.514 15.835-57.361 0L11.878 227.836c-15.838-15.835-15.838-41.52 0-57.358 15.841-15.841 41.521-15.841 57.355-.006l81.698 81.699L336.037 67.064c15.841-15.841 41.523-15.829 57.358 0 15.835 15.838 15.835 41.514.006 57.361z"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "viewBox", "0 0 451.847 451.846"], ["d", "m248.292 106.406 194.281 194.29c12.365 12.359 12.365 32.391 0 44.744-12.354 12.354-32.391 12.354-44.744 0L225.923 173.529 54.018 345.44c-12.36 12.354-32.395 12.354-44.748 0-12.359-12.354-12.359-32.391 0-44.75L203.554 106.4c6.18-6.174 14.271-9.259 22.369-9.259 8.095 0 16.192 3.091 22.369 9.265z"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "viewBox", "0 0 451.847 451.847"], ["d", "M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"], [3, "title", "dialogType", "cancelClick"], ["method", "post", 1, "grid-1", 3, "formGroup", "ngSubmit"], [3, "label", "controlName", "controlType", "frmGroup"], [3, "label", "controlName", "controlType", "frmGroup", 4, "ngIf"], [3, "label", "controlName", "controlType", "frmGroup", "onFileChanged", 4, "ngIf"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"], [3, "label", "controlName", "controlType", "frmGroup", "onFileChanged"]], template: function BlockEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function BlockEditorComponent_Template_div_mouseenter_0_listener($event) { return ctx.ShowTitle($event, ctx.element); })("mouseleave", function BlockEditorComponent_Template_div_mouseleave_0_listener($event) { return ctx.ShowTitle($event, ctx.element); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BlockEditorComponent_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, BlockEditorComponent__svg_svg_5_Template, 2, 0, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BlockEditorComponent_form_6_Template, 7, 11, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseleave", function BlockEditorComponent_Template_div_mouseleave_7_listener() { return ctx.ShowMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, BlockEditorComponent_div_8_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, BlockEditorComponent_div_9_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, BlockEditorComponent_div_10_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, BlockEditorComponent_div_11_Template, 7, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, BlockEditorComponent_div_12_Template, 8, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, BlockEditorComponent_div_13_Template, 6, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, BlockEditorComponent_app_block_editor_15_Template, 1, 1, "app-block-editor", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, BlockEditorComponent_h1_17_Template, 1, 1, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, BlockEditorComponent_button_18_Template, 1, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, BlockEditorComponent_p_19_Template, 1, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, BlockEditorComponent_img_20_Template, 1, 1, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, BlockEditorComponent_footer_21_Template, 17, 4, "footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, BlockEditorComponent_app_dialog_22_Template, 8, 13, "app-dialog", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.element.ShowTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.element != null && (ctx.element.Type == "main" || ctx.element.Type == "container" || ctx.element.Type == "columns"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.element != null && ctx.element.Type == "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](19, _c0, ctx.hideMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.element != null && (ctx.element.Type == "main" || ctx.element.Type == "container"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.element != null && ctx.element.Type == "columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.element != null && (ctx.element.Type == "main" || ctx.element.Type == "container"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.element != null && (ctx.element.Type == "main" || ctx.element.Type == "container"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.element != null && (ctx.element.Type == "main" || ctx.element.Type == "container"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.element != null && (ctx.element.Type == "main" || ctx.element.Type == "container"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](21, _c1, ctx.element.VerticalOrientation, !ctx.element.VerticalOrientation));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.element.Childrens);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.element.Type);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.element != null && ctx.element.Type != "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dialogType != 99 && ctx.dialogType != 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_2__.FormControlComponent, BlockEditorComponent, _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DialogComponent], styles: [".border[_ngcontent-%COMP%] {\n  border: 1px solid #0082C8;\n  min-height: 25px;\n  min-width: 150px;\n  width: 100%;\n}\n.border[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .barra[_ngcontent-%COMP%] {\n  max-width: 25px;\n  text-align: center;\n  margin-top: 5px;\n  position: relative;\n}\n.border[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .barra[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -27.5px;\n  left: -1px;\n  background-color: #0082C8;\n  color: white;\n  padding: 2.5px;\n}\n.border[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .barra[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #0082C8;\n  stroke: #0082C8;\n  cursor: pointer;\n}\n.border[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .barra[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n  fill: #00a3fb;\n}\n.border[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .barra[_ngcontent-%COMP%]   .tool-menu[_ngcontent-%COMP%] {\n  border: 1px solid #0082C8;\n  background-color: #000000;\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  box-shadow: 5px 5px 6px 0 #fff;\n  padding: 5px;\n  z-index: 1;\n}\n.border[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .barra[_ngcontent-%COMP%]   .tool-bar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25px 1fr;\n  width: 80vw;\n}\n.border[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .barra[_ngcontent-%COMP%]   .tool-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr 50px 50px;\n  grid-column-gap: 5px;\n  column-gap: 5px;\n  vertical-align: bottom;\n}\n.border[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .barra[_ngcontent-%COMP%]   .tool-bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: 0;\n}\n.border[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.button[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  cursor: pointer;\n  border: 1px solid #0082C8;\n  width: 150px;\n  padding: 5px 2.5px;\n  line-height: 25px;\n  border-radius: 5px;\n  margin-top: 5px;\n}\n.button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  max-height: 15px;\n  margin-right: 5px;\n  fill: #0082C8;\n  stroke: #0082C8;\n}\n.button[_ngcontent-%COMP%]:hover {\n  border-color: #00a3fb;\n  background-color: #0082c87e;\n}\n.button[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  fill: #00a3fb;\n  stroke: #00a3fb;\n}\nfooter[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  margin-left: 5px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n}\nfooter[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  border: 0;\n  color: #7c7c7c;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: stretch;\n  align-content: center;\n  grid-gap: 5px;\n  gap: 5px;\n  margin-top: 25px;\n}\n.vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2NrLWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUNRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFBWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRWhCO0FBQ1k7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDaEI7QUFBZ0I7RUFDSSxhQUFBO0FBRXBCO0FBQ1k7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUVBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDaEI7QUFDWTtFQUNJLGFBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUFDaEI7QUFBZ0I7RUFDSSx3Q0FBQTtFQUNBLG9CQUFBO0VBQUEsZUFBQTtFQUNBLHNCQUFBO0FBRXBCO0FBRG9CO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUd4QjtBQUVRO0VBQ0ksYUFBQTtBQUFaO0FBSUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREo7QUFFSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRUk7RUFDSSxxQkFBQTtFQUNBLDJCQUFBO0FBQVI7QUFDUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBQ1o7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7QUFBSjtBQUNJO0VBQ0ksU0FBQTtFQUNBLGNBQUE7QUFDUjtBQUVBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0E7RUFDSSxzQkFBQTtBQUVKO0FBQUE7RUFDSSxtQkFBQTtBQUdKIiwiZmlsZSI6ImJsb2NrLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwODJDODtcclxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWFkZXIge1xyXG4gICAgICAgIC5iYXJyYSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLnR5cGUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMjcuNXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTFweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgyQzg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyLjVweDtcclxuICAgICAgICAgICAgICAgIC8vIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgIGZpbGw6ICMwMDgyQzg7XHJcbiAgICAgICAgICAgICAgICBzdHJva2U6ICMwMDgyQzg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBsaWdodGVuKCRjb2xvcjogIzAwODJDOCwgJGFtb3VudDogMTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50b29sLW1lbnUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwODJDODtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDZweCAwICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDZweCAwICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50b29sLWJhciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDUwcHggNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaGlkZGVuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwODJDODtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBhZGRpbmc6IDVweCAyLjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgc3ZnIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIGZpbGw6ICMwMDgyQzg7XHJcbiAgICAgICAgc3Ryb2tlOiAjMDA4MkM4O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRjb2xvcjogIzAwODJDOCwgJGFtb3VudDogMTApO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgyYzg3ZTtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBmaWxsOiBsaWdodGVuKCRjb2xvcjogIzAwODJDOCwgJGFtb3VudDogMTApO1xyXG4gICAgICAgICAgICBzdHJva2U6IGxpZ2h0ZW4oJGNvbG9yOiAjMDA4MkM4LCAkYW1vdW50OiAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZvb3RlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjN2M3YzdjO1xyXG4gICAgfVxyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi52ZXJ0aWNhbCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5ob3Jpem9udGFsIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 7043:
/*!*****************************************************************!*\
  !*** ./src/app/components/code-editor/code-editor.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeEditorComponent": () => (/* binding */ CodeEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-monaco-editor */ 6218);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);



class CodeEditorComponent {
    constructor() {
        this.language = 'javascript';
        this.contentFile = '';
        this.editorOptions = {
            theme: 'vs-dark',
            language: this.language,
            roundedSelection: true,
            automaticLayout: 'true',
            glyphMargin: true
        };
    }
    ngOnInit() {
        this.editorOptions = {
            theme: 'vs-dark',
            language: this.language,
            roundedSelection: true,
            automaticLayout: 'true',
            glyphMargin: true
        };
    }
}
CodeEditorComponent.ɵfac = function CodeEditorComponent_Factory(t) { return new (t || CodeEditorComponent)(); };
CodeEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeEditorComponent, selectors: [["app-code-editor"]], inputs: { language: "language", contentFile: "contentFile" }, decls: 2, vars: 2, consts: [[1, "my-code-editor"], [1, "editor", 3, "options", "ngModel", "ngModelChange"]], template: function CodeEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-monaco-editor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CodeEditorComponent_Template_ngx_monaco_editor_ngModelChange_1_listener($event) { return ctx.contentFile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.editorOptions)("ngModel", ctx.contentFile);
    } }, directives: [ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_1__.EditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], styles: [".my-code-editor[_ngcontent-%COMP%] {\n  flex-grow: 9;\n  height: calc(100vh - 35px);\n  position: relative;\n}\n.my-code-editor[_ngcontent-%COMP%]   .editor-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.my-code-editor[_ngcontent-%COMP%]   .editor[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 225px;\n  height: 100%;\n}\n.my-code-editor[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow: auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 20px;\n}\n.container[_ngcontent-%COMP%] {\n  flex-direction: row;\n  display: flex;\n  flex-wrap: nowrap;\n  height: calc(100vh - 38px);\n}\n.container[_ngcontent-%COMP%]   .tree[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n  flex-grow: 1;\n  background-color: #1e1e1e;\n  color: whitesmoke;\n  padding: 5px;\n  overflow: auto;\n}\n.tool-bar[_ngcontent-%COMP%] {\n  padding: 5px;\n  background-color: #1e1e1e;\n  border-bottom: 3px solid #383838;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRVI7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBRVI7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFFSjtBQURJO0VBQ0ksMEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBR1I7QUFBQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBR0oiLCJmaWxlIjoiY29kZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY29kZS1lZGl0b3Ige1xyXG4gICAgZmxleC1ncm93OiA5O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzVweCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuZWRpdG9yLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmVkaXRvciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMjI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnJlc3VsdCB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzhweCk7XHJcbiAgICAudHJlZXtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuLnRvb2wtYmFye1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBsaWdodGVuKCRjb2xvcjogIzFlMWUxZSwgJGFtb3VudDogMTApO1xyXG59Il19 */"] });


/***/ }),

/***/ 2778:
/*!***************************************************************************!*\
  !*** ./src/app/components/create-character/create-character.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCharacterComponent": () => (/* binding */ CreateCharacterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../edit-skills/edit-skills.component */ 2261);
/* harmony import */ var _edit_bundles_edit_bundles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-bundles/edit-bundles.component */ 9390);
/* harmony import */ var _edit_character_info_edit_character_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-character-info/edit-character-info.component */ 8765);






function CreateCharacterComponent_ng_container_0_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateCharacterComponent_ng_container_0_div_5_div_3_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const r_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r11.Select(r_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Seleziona");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](r_r10.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", r_r10.Icon, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", r_r10.Description, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function CreateCharacterComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Fase 1: Razza");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CreateCharacterComponent_ng_container_0_div_5_div_3_Template, 7, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.races);
} }
function CreateCharacterComponent_ng_container_0_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateCharacterComponent_ng_container_0_div_6_div_3_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const r_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r15.Select(r_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Seleziona");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](r_r14.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", r_r14.Icon, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", r_r14.Description, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function CreateCharacterComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Fase 2: Classe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CreateCharacterComponent_ng_container_0_div_6_div_3_Template, 7, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.classes);
} }
function CreateCharacterComponent_ng_container_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-edit-skills", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChanged", function CreateCharacterComponent_ng_container_0_div_7_Template_app_edit_skills_valueChanged_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r17.AbilitiesChanged($event); })("next", function CreateCharacterComponent_ng_container_0_div_7_Template_app_edit_skills_next_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r19.Next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Fase 3: Caratteristiche (Punteggio massimo: ", ctx_r3.abilities[0].Max, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("skills", ctx_r3.abilities);
} }
function CreateCharacterComponent_ng_container_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-edit-skills", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChanged", function CreateCharacterComponent_ng_container_0_div_8_Template_app_edit_skills_valueChanged_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.SkillsChanged($event); })("next", function CreateCharacterComponent_ng_container_0_div_8_Template_app_edit_skills_next_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r22.Next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Fase 4: Abilit\u00E0 (Punteggio massimo: ", ctx_r4.skills[0].Max, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("skills", ctx_r4.skills);
} }
function CreateCharacterComponent_ng_container_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Fase 5: Bundles");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-edit-bundles", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChanged", function CreateCharacterComponent_ng_container_0_div_9_Template_app_edit_bundles_valueChanged_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r23.BundlesChanged($event); })("next", function CreateCharacterComponent_ng_container_0_div_9_Template_app_edit_bundles_next_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r25.Next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("bundles", ctx_r5.bundles);
} }
function CreateCharacterComponent_ng_container_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Fase 6: Ritocchi finali");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-edit-character-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateCharacterComponent_ng_container_0_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateCharacterComponent_ng_container_0_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r26.Back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Indietro");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CreateCharacterComponent_ng_container_0_h4_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.error);
} }
function CreateCharacterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CreateCharacterComponent_ng_container_0_div_5_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CreateCharacterComponent_ng_container_0_div_6_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CreateCharacterComponent_ng_container_0_div_7_Template, 4, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CreateCharacterComponent_ng_container_0_div_8_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, CreateCharacterComponent_ng_container_0_div_9_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, CreateCharacterComponent_ng_container_0_div_10_Template, 4, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CreateCharacterComponent_ng_container_0_button_12_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateCharacterComponent_ng_container_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.CancelCreation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Annulla");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CreateCharacterComponent_ng_container_0_h4_15_Template, 2, 1, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Punti da spendere: ", ctx_r0.points, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx_r0.stepCreation);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.stepCreation > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.error != "");
} }
class CreateCharacterComponent {
    constructor() {
        this.stepChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.points = 3000;
        this.scheda = {};
    }
    ngOnInit() {
        this.error = "";
        this.scheda["abilities"] = new Array();
        this.scheda["skills"] = new Array();
        this.scheda["bundles"] = new Array();
    }
    AbilitiesChanged(r) {
        this.scheda["abilities"] = new Array();
        r.forEach((a) => {
            this.scheda["abilities"].push(a);
        });
        this.CalculatePoints();
    }
    SkillsChanged(r) {
        this.scheda["skills"] = new Array();
        r.forEach((a) => {
            this.scheda["skills"].push(a);
        });
        this.CalculatePoints();
    }
    BundlesChanged(r) {
        this.scheda["bundles"] = new Array();
        r.forEach((a) => {
            this.scheda["bundles"].push(a);
        });
        this.CalculatePoints();
    }
    CalculatePoints() {
        this.error = "";
        this.points = 3500;
        this.scheda["abilities"].forEach((a) => {
            if ((a.Value < a.Element.Min) || (a.Value > a.Element.Max)) {
                this.error += a.Element.Name + " deve essere compreso tra " + a.Element.Min.toString() + " e " + a.Element.Max.toString() + ", ";
            }
            this.points -= a.Value * a.Value * a.Element.Cost;
        });
        this.scheda["skills"].forEach((a) => {
            if ((a.Value < a.Element.Min) || (a.Value > a.Element.Max)) {
                this.error += a.Element.Name + " deve essere compreso tra " + a.Element.Min.toString() + " e " + a.Element.Max.toString() + ", ";
            }
            this.points -= a.Value * a.Value * a.Element.Cost;
        });
        this.scheda["bundles"].forEach((a) => {
            if (a.Value) {
                this.points -= a.Element.Cost;
            }
        });
        if (this.points < 0) {
            this.error += "Troppi punti spesi!, ";
        }
    }
    Back() {
        this.stepCreation--;
        this.stepChanged.emit(this.stepCreation);
    }
    Select(r) {
        this.scheda[r.Name] = r;
        this.Next();
    }
    Next() {
        this.stepCreation++;
        this.stepChanged.emit(this.stepCreation);
    }
    CancelCreation() {
        this.stepCreation = -1;
        this.stepChanged.emit(this.stepCreation);
    }
}
CreateCharacterComponent.ɵfac = function CreateCharacterComponent_Factory(t) { return new (t || CreateCharacterComponent)(); };
CreateCharacterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateCharacterComponent, selectors: [["app-create-character"]], inputs: { races: "races", classes: "classes", abilities: "abilities", skills: "skills", bundles: "bundles", stepCreation: "stepCreation" }, outputs: { stepChanged: "stepChanged" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngSwitch"], ["class", "scrollable-div", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [2, "text-align", "right", "margin-top", "5px"], ["type", "button", "class", "btn mt-1", 3, "click", 4, "ngIf"], [1, "btn", "mt-1", "ml-1", 3, "click"], ["class", "unselectable mt-1 error-message", 4, "ngIf"], [1, "scrollable-div"], [4, "ngFor", "ngForOf"], [3, "src"], [3, "innerHTML"], [1, "btn", 3, "click"], [3, "skills", "valueChanged", "next"], [3, "bundles", "valueChanged", "next"], ["type", "button", 1, "btn", "mt-1", 3, "click"], [1, "unselectable", "mt-1", "error-message"]], template: function CreateCharacterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CreateCharacterComponent_ng_container_0_Template, 16, 10, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.stepCreation > -1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_0__.EditSkillsComponent, _edit_bundles_edit_bundles_component__WEBPACK_IMPORTED_MODULE_1__.EditBundlesComponent, _edit_character_info_edit_character_info_component__WEBPACK_IMPORTED_MODULE_2__.EditCharacterInfoComponent], styles: [".scrollable-div[_ngcontent-%COMP%] {\n  max-height: 500px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jaGFyYWN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJjcmVhdGUtY2hhcmFjdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGFibGUtZGl2IHtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3048:
/*!*****************************************************************!*\
  !*** ./src/app/components/custom-view/custom-view.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomViewComponent": () => (/* binding */ CustomViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function CustomViewComponent_div_0_div_1_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "h1", 6);
} if (rf & 2) {
    const c_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", c_r2.Content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function CustomViewComponent_div_0_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "button", 6);
} if (rf & 2) {
    const c_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", c_r2.Content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function CustomViewComponent_div_0_div_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 6);
} if (rf & 2) {
    const c_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", c_r2.Content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function CustomViewComponent_div_0_div_1_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const c_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", c_r2.Content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CustomViewComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CustomViewComponent_div_0_div_1_h1_2_Template, 1, 1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CustomViewComponent_div_0_div_1_button_3_Template, 1, 1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomViewComponent_div_0_div_1_p_4_Template, 1, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CustomViewComponent_div_0_div_1_img_5_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", c_r2.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "image");
} }
function CustomViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CustomViewComponent_div_0_div_1_Template, 6, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.element.Childrens);
} }
class CustomViewComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }
    ngOnInit() {
        //Get custom views
        let prefix = "";
        console.log(this.router.url);
        if (!this.router.url.startsWith("/be")) {
            prefix = "fe/";
        }
        // switch(this.router.url) {
        //   case "/be/home":
        //     break;
        //   case "/home":
        //     break;
        // }
        this.service.Get("component", "getcomponent?url=" + prefix + this.router.url.substring(1)).subscribe((result) => {
            this.element = this.service.FormatResponse(result).Data[0];
            console.log(this.element);
        }, (error) => {
        });
    }
}
CustomViewComponent.ɵfac = function CustomViewComponent_Factory(t) { return new (t || CustomViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_0__.CommonsService)); };
CustomViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomViewComponent, selectors: [["app-custom-view"]], decls: 1, vars: 1, consts: [["class", "content", 4, "ngIf"], [1, "content"], [4, "ngFor", "ngForOf"], [3, "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], ["height", "100", 3, "src", 4, "ngSwitchCase"], [3, "innerHTML"], ["height", "100", 3, "src"]], template: function CustomViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CustomViewComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.element != null && ctx.element.Childrens != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase], styles: [".content[_ngcontent-%COMP%] {\n  max-height: 99vh;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiY3VzdG9tLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA5OXZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9509:
/*!*******************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogComponent": () => (/* binding */ DialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function DialogComponent__svg_svg_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ellipse", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "g", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DialogComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Are you sure you want to delete it?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DialogComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DialogComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.DeleteClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class DialogComponent {
    constructor() {
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Null;
        this.title = "";
        this.okClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.cancelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.deleteClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
    }
    OkClick() {
        this.okClick.emit();
    }
    DeleteClick() {
        this.deleteClick.emit();
    }
    CancelClick() {
        this.cancelClick.emit();
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(); };
DialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], inputs: { dialogType: "dialogType", title: "title" }, outputs: { okClick: "okClick", cancelClick: "cancelClick", deleteClick: "deleteClick" }, ngContentSelectors: _c0, decls: 13, vars: 5, consts: [[1, "tendina"], [1, "body", 2, "border", "1px solid #ddd"], [1, "unselectable"], [1, "content"], [1, "layout", "layout-err", "unselectable"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 800 600", "stroke-linejoin", "round", 4, "ngIf"], ["class", "text ml-1", 4, "ngIf"], ["class", "layout", 4, "ngIf"], [2, "text-align", "right"], ["type", "button", "class", "btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-error", "ml-1", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 800 600", "stroke-linejoin", "round"], ["transform", "matrix(0.995025,0,0,1.03627,-15.9204,-6.73575)"], ["cx", "418", "cy", "296", "rx", "201", "ry", "193", 2, "fill", "#ff000045", "stroke", "red", "stroke-width", "20px"], ["transform", "matrix(1,0,0,1,58,58)"], ["x", "281px", "y", "365px", 2, "font-weight", "700", "font-size", "375px", "fill", "red"], [1, "text", "ml-1"], [1, "layout"], ["type", "button", 1, "btn", 3, "click"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DialogComponent__svg_svg_6_Template, 6, 0, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DialogComponent_span_7_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DialogComponent_div_8_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DialogComponent_button_10_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_11_listener() { return ctx.CancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dialogType == 2 || ctx.dialogType == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dialogType == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dialogType != 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dialogType == 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [".layout[_ngcontent-%COMP%] {\n  min-width: 560px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dCB7XHJcbiAgICBtaW4td2lkdGg6IDU2MHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 9390:
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-bundles/edit-bundles.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditBundlesComponent": () => (/* binding */ EditBundlesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_classes_sheet_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/sheet-element */ 116);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);






function EditBundlesComponent_app_form_control_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-form-control", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChanged", function EditBundlesComponent_app_form_control_1_Template_app_form_control_onChanged_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.ValueChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", r_r1.Name + " (" + r_r1.ReferenceSheetElement.Name + ")")("controlName", r_r1.ID.toString())("controlType", 6)("frmGroup", ctx_r0.frmGroup);
} }
class EditBundlesComponent {
    constructor(fb) {
        this.fb = fb;
        this.valueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
    }
    createSignupForm() {
        let vett = {};
        this.bundles.forEach((a) => {
            vett[a.ID.toString()] = [a.Min];
        });
        return this.fb.group(vett);
    }
    ValueChanged() {
        let values = new Array();
        this.bundles.forEach((a) => {
            let value = new src_app_classes_sheet_element__WEBPACK_IMPORTED_MODULE_0__.SheetElementValue();
            value.Element = a;
            value.Value = this.frmGroup.controls[a.ID.toString()].value;
            values.push(value);
        });
        this.valueChanged.emit(values);
    }
    onSubmit() {
        this.ValueChanged();
        this.next.emit();
    }
}
EditBundlesComponent.ɵfac = function EditBundlesComponent_Factory(t) { return new (t || EditBundlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
EditBundlesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditBundlesComponent, selectors: [["app-edit-bundles"]], inputs: { bundles: "bundles" }, outputs: { valueChanged: "valueChanged", next: "next" }, decls: 5, vars: 3, consts: [["method", "post", 1, "grid-skills", 3, "formGroup", "ngSubmit"], ["class", "ml-1 mt-1", 3, "label", "controlName", "controlType", "frmGroup", "onChanged", 4, "ngFor", "ngForOf"], [1, "mt-1", "buttons"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"], [1, "ml-1", "mt-1", 3, "label", "controlName", "controlType", "frmGroup", "onChanged"]], template: function EditBundlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditBundlesComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditBundlesComponent_app_form_control_1_Template, 1, 4, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bundles);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__.FormControlComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWJ1bmRsZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8765:
/*!*********************************************************************************!*\
  !*** ./src/app/components/edit-character-info/edit-character-info.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditCharacterInfoComponent": () => (/* binding */ EditCharacterInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);





class EditCharacterInfoComponent {
    constructor(fb) {
        this.fb = fb;
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
    }
    createSignupForm() {
        let vett = {};
        vett['name'] = ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])];
        vett['image'] = [null];
        vett['prestavolto'] = ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])];
        vett['background'] = ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])];
        var resullt = this.fb.group(vett);
        return resullt;
    }
    onFileChanged($event) {
        this.userFile = $event;
    }
    onSubmit() {
        let formData = new FormData();
        if (this.userFile != null) {
            formData.append('myFile', this.userFile, this.userFile.name);
            formData.append('HasImage', (true).toString());
        }
        formData.append('Name', this.frmGroup.controls['name'].value);
        formData.append('Icon', this.frmGroup.controls['image'].value);
        formData.append('Description', this.frmGroup.controls['description'].value);
        formData.append('Price', this.frmGroup.controls['price'].value);
        formData.append('Type', this.frmGroup.controls['type'].value);
        this.saved.emit(formData);
    }
}
EditCharacterInfoComponent.ɵfac = function EditCharacterInfoComponent_Factory(t) { return new (t || EditCharacterInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
EditCharacterInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditCharacterInfoComponent, selectors: [["app-edit-character-info"]], outputs: { saved: "saved" }, decls: 8, vars: 16, consts: [["method", "post", 1, "grid-skills", 3, "formGroup", "ngSubmit"], [3, "label", "controlName", "frmGroup"], [3, "label", "controlName", "controlType", "frmGroup"], [3, "label", "controlName", "controlType", "frmGroup", "onFileChanged"], [1, "mt-1", "buttons"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"]], template: function EditCharacterInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditCharacterInfoComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onFileChanged", function EditCharacterInfoComponent_Template_app_form_control_onFileChanged_4_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "* Name")("controlName", "name")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "* Prestavolto")("controlName", "prestavolto")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "* Background")("controlName", "background")("controlType", 3)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "* Image")("controlName", "image")("controlType", 8)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_0__.FormControlComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNoYXJhY3Rlci1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8600:
/*!***********************************************************************!*\
  !*** ./src/app/components/edit-component/edit-component.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditComponentComponent": () => (/* binding */ EditComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_classes_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/route */ 5921);
/* harmony import */ var src_app_classes_site_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/site-component */ 9537);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);








function EditComponentComponent_label_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class EditComponentComponent {
    constructor(fb) {
        this.fb = fb;
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
    }
    createSignupForm() {
        let vett = {};
        if (this.selectedComponent == null) {
            this.selectedComponent = new src_app_classes_site_component__WEBPACK_IMPORTED_MODULE_1__.SiteComponent();
            this.selectedComponent.Name = "";
            this.selectedComponent.Route = new src_app_classes_route__WEBPACK_IMPORTED_MODULE_0__.Route();
            this.selectedComponent.Content = "";
        }
        vett['name'] = [this.selectedComponent.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])];
        vett['route'] = [this.selectedComponent.Route.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])];
        vett['content'] = [this.selectedComponent.Content, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])];
        var resullt = this.fb.group(vett);
        return resullt;
    }
    onSubmit() {
        this.selectedComponent.Name = this.frmGroup.controls['name'].value;
        this.selectedComponent.Route.ID = this.frmGroup.controls['route'].value;
        this.selectedComponent.Content = this.frmGroup.controls['content'].value;
        this.saved.emit(this.selectedComponent);
    }
}
EditComponentComponent.ɵfac = function EditComponentComponent_Factory(t) { return new (t || EditComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
EditComponentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditComponentComponent, selectors: [["app-edit-component"]], inputs: { selectedComponent: "selectedComponent", routes: "routes", error: "error" }, outputs: { saved: "saved" }, decls: 9, vars: 16, consts: [["method", "post", 1, "grid-1", 3, "formGroup", "ngSubmit"], [3, "label", "controlName", "frmGroup"], [3, "label", "controlName", "controlType", "dataList", "descField", "frmGroup"], [3, "label", "controlName", "controlType", "frmGroup"], [1, "unselectable", "mt-1"], ["class", "unselectable mt-1 error-message", 4, "ngIf"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"], [1, "unselectable", "mt-1", "error-message"]], template: function EditComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditComponentComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "* Mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, EditComponentComponent_label_6_Template, 2, 1, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "* Name")("controlName", "name")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "* Route")("controlName", "route")("controlType", 2)("dataList", ctx.routes)("descField", "Path")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "* Contet")("controlName", "content")("controlType", 3)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error != "" && ctx.error != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_2__.FormControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3717:
/*!*************************************************************************!*\
  !*** ./src/app/components/edit-equip-type/edit-equip-type.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditEquipTypeComponent": () => (/* binding */ EditEquipTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_classes_equip_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/equip-type */ 2754);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);







function EditEquipTypeComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class EditEquipTypeComponent {
    constructor(fb) {
        this.fb = fb;
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
    }
    createSignupForm() {
        let vett = {};
        if (this.selectedEquipType == null) {
            this.selectedEquipType = new src_app_classes_equip_type__WEBPACK_IMPORTED_MODULE_0__.EquipType();
            this.selectedEquipType.Name = '';
        }
        vett['name'] = [this.selectedEquipType.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        var resullt = this.fb.group(vett);
        return resullt;
    }
    onSubmit() {
        this.selectedEquipType.Name = this.frmGroup.controls['name'].value;
        this.saved.emit(this.selectedEquipType);
    }
}
EditEquipTypeComponent.ɵfac = function EditEquipTypeComponent_Factory(t) { return new (t || EditEquipTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
EditEquipTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditEquipTypeComponent, selectors: [["app-edit-equip-type"]], inputs: { selectedEquipType: "selectedEquipType", error: "error" }, outputs: { saved: "saved" }, decls: 7, vars: 6, consts: [["method", "post", 1, "grid-1", 3, "formGroup", "ngSubmit"], [3, "label", "controlName", "frmGroup"], [1, "unselectable", "mt-1"], ["class", "unselectable mt-1 error-message", 4, "ngIf"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"], [1, "unselectable", "mt-1", "error-message"]], template: function EditEquipTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditEquipTypeComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "* Mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EditEquipTypeComponent_label_4_Template, 2, 1, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* Name")("controlName", "name")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error != "" && ctx.error != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__.FormControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWVxdWlwLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5631:
/*!***************************************************************!*\
  !*** ./src/app/components/edit-equip/edit-equip.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditEquipComponent": () => (/* binding */ EditEquipComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_classes_equip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/equip */ 7307);
/* harmony import */ var src_app_classes_equip_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/equip-type */ 2754);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);








function EditEquipComponent_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class EditEquipComponent {
    constructor(fb) {
        this.fb = fb;
        this.sizes = [
            { "ID": 0, "Size": "NoSize" },
            { "ID": 1, "Size": "Small" },
            { "ID": 2, "Size": "Medium" },
            { "ID": 3, "Size": "Big" },
            { "ID": 4, "Size": "Huge" },
            { "ID": 5, "Size": "Small (Veichle)" },
            { "ID": 6, "Size": "Medium (Veichle)" },
            { "ID": 7, "Size": "Big (Veichle)" },
            { "ID": 8, "Size": "Small (Ship)" },
            { "ID": 9, "Size": "Medium (Ship)" },
            { "ID": 10, "Size": "Big (Ship)" }
        ];
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
    }
    createSignupForm() {
        let vett = {};
        if (this.selectedEquip == null) {
            this.selectedEquip = new src_app_classes_equip__WEBPACK_IMPORTED_MODULE_0__.Equip();
            this.selectedEquip.Name = '';
            this.selectedEquip.Icon = '';
            this.selectedEquip.Description = '';
            this.selectedEquip.Price = 0;
            this.selectedEquip.Size = 0;
            this.selectedEquip.Type = new src_app_classes_equip_type__WEBPACK_IMPORTED_MODULE_1__.EquipType();
            this.selectedEquip.Type.ID = 0;
        }
        vett['name'] = [this.selectedEquip.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])];
        vett['image'] = [this.selectedEquip.Icon];
        vett['description'] = [this.selectedEquip.Description, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])];
        vett['price'] = [this.selectedEquip.Price, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])];
        vett['size'] = [this.selectedEquip.Size, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])];
        vett['type'] = [this.selectedEquip.Type.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])];
        var resullt = this.fb.group(vett);
        return resullt;
    }
    onFileChanged($event) {
        this.userFile = $event;
    }
    onSubmit() {
        let formData = new FormData();
        if (this.userFile != null) {
            formData.append('myFile', this.userFile, this.userFile.name);
            formData.append('HasImage', (true).toString());
        }
        formData.append('Name', this.frmGroup.controls['name'].value);
        formData.append('Icon', this.frmGroup.controls['image'].value);
        formData.append('Description', this.frmGroup.controls['description'].value);
        formData.append('Price', this.frmGroup.controls['price'].value);
        formData.append('Type', this.frmGroup.controls['type'].value);
        this.saved.emit(formData);
    }
}
EditEquipComponent.ɵfac = function EditEquipComponent_Factory(t) { return new (t || EditEquipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
EditEquipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditEquipComponent, selectors: [["app-edit-equip"]], inputs: { selectedEquip: "selectedEquip", equipTypes: "equipTypes", error: "error" }, outputs: { saved: "saved" }, decls: 12, vars: 30, consts: [["method", "post", 1, "grid-1", 3, "formGroup", "ngSubmit"], [3, "label", "controlName", "frmGroup"], [3, "label", "controlName", "controlType", "frmGroup", "onFileChanged"], [3, "label", "controlName", "controlType", "frmGroup"], [3, "label", "controlName", "controlType", "dataList", "descField", "frmGroup"], [1, "unselectable", "mt-1"], ["class", "unselectable mt-1 error-message", 4, "ngIf"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"], [1, "unselectable", "mt-1", "error-message"]], template: function EditEquipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditEquipComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "app-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onFileChanged", function EditEquipComponent_Template_app_form_control_onFileChanged_2_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "* Mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EditEquipComponent_label_9_Template, 2, 1, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "* Name")("controlName", "name")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "* Image")("controlName", "image")("controlType", 8)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "* Description")("controlName", "description")("controlType", 3)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "* Price")("controlName", "price")("controlType", 1)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "* Size")("controlName", "size")("controlType", 2)("dataList", ctx.sizes)("descField", "Size")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "* Type")("controlName", "type")("controlType", 2)("dataList", ctx.equipTypes)("descField", "Name")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error != "" && ctx.error != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_2__.FormControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWVxdWlwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3268:
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-location/edit-location.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditLocationComponent": () => (/* binding */ EditLocationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_classes_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/location */ 9834);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);







function EditLocationComponent_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class EditLocationComponent {
    constructor(fb) {
        this.fb = fb;
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
    }
    createSignupForm() {
        let vett = {};
        if (this.selectedLocation == null) {
            this.selectedLocation = new src_app_classes_location__WEBPACK_IMPORTED_MODULE_0__.Location();
            this.selectedLocation.Name = '';
            this.selectedLocation.Description = '';
            this.selectedLocation.Image = '';
            this.selectedLocation.X = 0;
            this.selectedLocation.Y = 0;
        }
        vett['name'] = [this.selectedLocation.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        vett['image'] = [this.selectedLocation.Image, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        vett['description'] = [this.selectedLocation.Description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        vett['x'] = [this.selectedLocation.X, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        vett['y'] = [this.selectedLocation.Y, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        vett['parent'] = [this.selectedLocation.IDParent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        var resullt = this.fb.group(vett);
        return resullt;
    }
    onFileChanged($event) {
        this.userFile = $event;
    }
    onSubmit() {
        let formData = new FormData();
        if (this.userFile != null) {
            formData.append('myFile', this.userFile, this.userFile.name);
            formData.append('HasImage', (true).toString());
        }
        formData.append('Name', this.frmGroup.controls['name'].value);
        formData.append('Description', this.frmGroup.controls['description'].value);
        formData.append('Image', this.frmGroup.controls['image'].value);
        formData.append('X', this.frmGroup.controls['x'].value);
        formData.append('Y', this.frmGroup.controls['y'].value);
        this.saved.emit(formData);
    }
}
EditLocationComponent.ɵfac = function EditLocationComponent_Factory(t) { return new (t || EditLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
EditLocationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditLocationComponent, selectors: [["app-edit-location"]], inputs: { selectedLocation: "selectedLocation", parents: "parents", error: "error" }, outputs: { saved: "saved" }, decls: 12, vars: 28, consts: [["method", "post", 1, "grid-1", 3, "formGroup", "ngSubmit"], [3, "label", "controlName", "frmGroup"], [3, "label", "controlName", "controlType", "frmGroup"], [3, "label", "controlName", "controlType", "frmGroup", "onFileChanged"], [3, "label", "controlName", "controlType", "dataList", "descField", "frmGroup"], [1, "unselectable", "mt-1"], ["class", "unselectable mt-1 error-message", 4, "ngIf"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"], [1, "unselectable", "mt-1", "error-message"]], template: function EditLocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditLocationComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onFileChanged", function EditLocationComponent_Template_app_form_control_onFileChanged_3_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "* Mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EditLocationComponent_label_9_Template, 2, 1, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* Name")("controlName", "name")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* Description")("controlName", "description")("controlType", 3)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* Image")("controlName", "image")("controlType", 8)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* X")("controlName", "x")("controlType", 1)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* Y")("controlName", "x")("controlType", 1)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* Parent")("controlName", "parent")("controlType", 2)("dataList", ctx.parents)("descField", "Name")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error != "" && ctx.error != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__.FormControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2666:
/*!*************************************************************!*\
  !*** ./src/app/components/edit-menu/edit-menu.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditMenuComponent": () => (/* binding */ EditMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_classes_menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/menu-item */ 7075);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);







function EditMenuComponent_label_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class EditMenuComponent {
    constructor(fb) {
        this.fb = fb;
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
    }
    createSignupForm() {
        let vett = {};
        if (this.selectedMenu == null) {
            this.selectedMenu = new src_app_classes_menu_item__WEBPACK_IMPORTED_MODULE_0__.MenuItem();
            this.selectedMenu.MenuName = '';
            this.selectedMenu.Name = '';
            this.selectedMenu.MenuOrder = 0;
            this.selectedMenu.Parent = -1;
            this.selectedMenu.IDRoute = -1;
        }
        vett['menuname'] = [this.selectedMenu.MenuName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        vett['name'] = [this.selectedMenu.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        vett['menuorder'] = [this.selectedMenu.MenuOrder, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(0)])];
        vett['parent'] = [this.selectedMenu.Parent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(-1)])];
        vett['route'] = [this.selectedMenu.IDRoute, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        var resullt = this.fb.group(vett);
        return resullt;
    }
    onSubmit() {
        this.selectedMenu.MenuName = this.frmGroup.controls['menuname'].value;
        this.selectedMenu.Name = this.frmGroup.controls['name'].value;
        this.selectedMenu.MenuOrder = this.frmGroup.controls['menuorder'].value;
        this.selectedMenu.Parent = parseInt(this.frmGroup.controls['parent'].value);
        this.selectedMenu.IDRoute = parseInt(this.frmGroup.controls['route'].value);
        this.saved.emit(this.selectedMenu);
    }
}
EditMenuComponent.ɵfac = function EditMenuComponent_Factory(t) { return new (t || EditMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
EditMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditMenuComponent, selectors: [["app-edit-menu"]], inputs: { selectedMenu: "selectedMenu", menu: "menu", routes: "routes", error: "error" }, outputs: { saved: "saved" }, decls: 11, vars: 25, consts: [["method", "post", 1, "grid-1", 3, "formGroup", "ngSubmit"], [3, "label", "controlName", "frmGroup"], [3, "label", "controlName", "controlType", "frmGroup"], [3, "label", "controlName", "controlType", "dataList", "descField", "frmGroup"], [1, "unselectable", "mt-1"], ["class", "unselectable mt-1 error-message", 4, "ngIf"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"], [1, "unselectable", "mt-1", "error-message"]], template: function EditMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditMenuComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-form-control", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "* Mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EditMenuComponent_label_8_Template, 2, 1, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* MenuName")("controlName", "menuname")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* Name")("controlName", "name")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* Order")("controlName", "menuorder")("controlType", 1)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* Parent")("controlName", "parent")("controlType", 2)("dataList", ctx.menu)("descField", "Name")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* Route")("controlName", "route")("controlType", 2)("dataList", ctx.routes)("descField", "Path")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error != "" && ctx.error != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__.FormControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 809:
/*!***************************************************************!*\
  !*** ./src/app/components/edit-route/edit-route.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditRouteComponent": () => (/* binding */ EditRouteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_classes_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/route */ 5921);
/* harmony import */ var src_app_classes_route_permission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/route-permission */ 1085);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);








function EditRouteComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-form-control", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", p_r2.UserType.Description)("controlName", p_r2.IDUserType.toString())("controlType", 6)("frmGroup", ctx_r0.frmGroup);
} }
function EditRouteComponent_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.error);
} }
class EditRouteComponent {
    constructor(fb) {
        this.fb = fb;
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
    }
    createSignupForm() {
        let vett = {};
        if (this.selectedRoute == null) {
            this.selectedRoute = new src_app_classes_route__WEBPACK_IMPORTED_MODULE_0__.Route();
            this.selectedRoute.Package = '';
            this.selectedRoute.Func = '';
            this.selectedRoute.Type = '';
            this.selectedRoute.Methods = '';
            this.selectedRoute.Permissions = new Array();
            for (var i = 0; i < this.userTypes.length; i++) {
                let routePermission = new src_app_classes_route_permission__WEBPACK_IMPORTED_MODULE_1__.RoutePermission();
                routePermission.IDUserType = this.userTypes[i].ID;
                routePermission.UserType = this.userTypes[i];
                this.selectedRoute.Permissions.push(routePermission);
            }
        }
        vett['package'] = [this.selectedRoute.Package, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])];
        vett['func'] = [this.selectedRoute.Func, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])];
        vett['type'] = [this.selectedRoute.Type, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])];
        vett['method'] = [this.selectedRoute.Methods, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])];
        for (var i = 0; i < this.selectedRoute.Permissions.length; i++) {
            vett[this.selectedRoute.Permissions[i].IDUserType] = [this.selectedRoute.Permissions[i].Enabled];
        }
        var resullt = this.fb.group(vett);
        return resullt;
    }
    onSubmit() {
        this.selectedRoute.Package = this.frmGroup.controls['package'].value;
        this.selectedRoute.Func = this.frmGroup.controls['func'].value;
        this.selectedRoute.Type = this.frmGroup.controls['type'].value;
        this.selectedRoute.Methods = this.frmGroup.controls['method'].value;
        for (var i = 0; i < this.selectedRoute.Permissions.length; i++) {
            this.selectedRoute.Permissions[i].Enabled = this.frmGroup.controls[this.selectedRoute.Permissions[i].IDUserType].value;
        }
        this.saved.emit(this.selectedRoute);
    }
}
EditRouteComponent.ɵfac = function EditRouteComponent_Factory(t) { return new (t || EditRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
EditRouteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditRouteComponent, selectors: [["app-edit-route"]], inputs: { selectedRoute: "selectedRoute", userTypes: "userTypes", error: "error" }, outputs: { saved: "saved" }, decls: 12, vars: 16, consts: [["method", "post", 1, "grid-1", 3, "formGroup", "ngSubmit"], [3, "label", "controlName", "frmGroup"], [1, "grid-3", "mt-1"], ["class", "mt-1", 4, "ngFor", "ngForOf"], [1, "unselectable", "mt-1"], ["class", "unselectable mt-1 error-message", 4, "ngIf"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"], [1, "mt-1"], [3, "label", "controlName", "controlType", "frmGroup"], [1, "unselectable", "mt-1", "error-message"]], template: function EditRouteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditRouteComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, EditRouteComponent_div_6_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "* Mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EditRouteComponent_label_9_Template, 2, 1, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "* Package")("controlName", "package")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "* Func")("controlName", "func")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "* Type")("controlName", "type")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("label", "* Method")("controlName", "method")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selectedRoute.Permissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error != "" && ctx.error != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_2__.FormControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXJvdXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5550:
/*!*******************************************************************************!*\
  !*** ./src/app/components/edit-sheet-element/edit-sheet-element.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSheetElementComponent": () => (/* binding */ EditSheetElementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_classes_sheet_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/sheet-element */ 116);
/* harmony import */ var src_app_classes_sheet_element_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/sheet-element-type */ 6343);
/* harmony import */ var _expander_expander_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expander/expander.component */ 6458);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);









function EditSheetElementComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-form-control", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onFileChanged", function EditSheetElementComponent_div_8_Template_app_form_control_onFileChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.onFileChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "* Image")("controlName", "image")("controlType", 8)("frmGroup", ctx_r0.frmGroup);
} }
function EditSheetElementComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "* Min")("controlName", "min")("controlType", 1)("frmGroup", ctx_r1.frmGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "* Max")("controlName", "max")("controlType", 1)("frmGroup", ctx_r1.frmGroup);
} }
function EditSheetElementComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-form-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "* Cost")("controlName", "cost")("controlType", 1)("frmGroup", ctx_r2.frmGroup);
} }
function EditSheetElementComponent_div_11_optgroup_4_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", r_r11.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r11.Name);
} }
function EditSheetElementComponent_div_11_optgroup_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "optgroup", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditSheetElementComponent_div_11_optgroup_4_option_1_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", t_r9.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", t_r9.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r8.elements[t_r9.Name].Rows);
} }
function EditSheetElementComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Reference Sheet Element");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function EditSheetElementComponent_div_11_Template_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.Selected1(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, EditSheetElementComponent_div_11_optgroup_4_Template, 2, 3, "optgroup", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.elementTypes);
} }
function EditSheetElementComponent_app_expander_12_optgroup_5_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", r_r18.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r18.Name);
} }
function EditSheetElementComponent_app_expander_12_optgroup_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "optgroup", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditSheetElementComponent_app_expander_12_optgroup_5_option_1_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r16 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", t_r16.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", t_r16.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r14.elements[t_r16.Name].Rows);
} }
function EditSheetElementComponent_app_expander_12_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", r_r19.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r19.Name);
} }
function EditSheetElementComponent_app_expander_12_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-expander", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Abilitated for:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function EditSheetElementComponent_app_expander_12_Template_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.Selected1(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, EditSheetElementComponent_app_expander_12_optgroup_5_Template, 2, 3, "optgroup", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditSheetElementComponent_app_expander_12_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.Move(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, ">>");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EditSheetElementComponent_app_expander_12_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.Move(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "<<");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function EditSheetElementComponent_app_expander_12_Template_select_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r24.Selected1(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, EditSheetElementComponent_app_expander_12_option_12_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.elementTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.selectedSheetElement.AbilitatedForSheetElement);
} }
function EditSheetElementComponent_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.error);
} }
class EditSheetElementComponent {
    constructor(fb) {
        this.fb = fb;
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
    }
    createSignupForm() {
        let vett = {};
        if (this.selectedSheetElement == null) {
            this.selectedSheetElement = new src_app_classes_sheet_element__WEBPACK_IMPORTED_MODULE_0__.SheetElement();
            this.selectedSheetElement.Name = "";
            this.selectedSheetElement.Min = 0;
            this.selectedSheetElement.Max = 0;
            this.selectedSheetElement.Cost = 0;
            this.selectedSheetElement.IDType = 0;
            this.selectedSheetElement.SheetElementType = new src_app_classes_sheet_element_type__WEBPACK_IMPORTED_MODULE_1__.SheetElementType();
            this.selectedSheetElement.SheetElementType.Name = "";
            this.selectedSheetElement.ID = 0;
            this.selectedSheetElement.ReferenceSheetElement = new src_app_classes_sheet_element__WEBPACK_IMPORTED_MODULE_0__.SheetElement();
            this.selectedSheetElement.ReferenceSheetElement.ID = -1;
        }
        vett['name'] = [this.selectedSheetElement.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])];
        vett['description'] = [this.selectedSheetElement.Description, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])];
        vett['min'] = [this.selectedSheetElement.Min, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(0)])];
        vett['max'] = [this.selectedSheetElement.Max, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(0)])];
        vett['cost'] = [this.selectedSheetElement.Cost, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(0)])];
        vett['type'] = [this.selectedSheetElement.IDType, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])];
        vett['image'] = [this.selectedSheetElement.Icon, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])];
        vett['referenceSheetElement'] = [this.selectedSheetElement.ReferenceSheetElement.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])];
        vett['parent1'] = [null];
        vett['parent2'] = [null];
        var resullt = this.fb.group(vett);
        return resullt;
    }
    onSubmit() {
        let formData = new FormData();
        if (this.userFile != null) {
            formData.append('myFile', this.userFile, this.userFile.name);
            formData.append('HasImage', (true).toString());
        }
        formData.append('Name', this.frmGroup.controls['name'].value);
        formData.append('Description', this.frmGroup.controls['description'].value);
        formData.append('Min', this.frmGroup.controls['min'].value);
        formData.append('Max', this.frmGroup.controls['max'].value);
        formData.append('Cost', this.frmGroup.controls['cost'].value);
        formData.append('IDType', this.frmGroup.controls['type'].value);
        formData.append('ID', this.selectedSheetElement.ID.toString());
        if (this.selectedElements.IDReferenceSheetElement == null) {
            formData.append('IDReferenceSheetElement', "-1");
        }
        else {
            formData.append('IDReferenceSheetElement', this.selectedElements.IDReferenceSheetElement);
        }
        this.saved.emit(formData);
    }
    Move(left) {
        if (!left) {
            this.selectedElements[this.selectedRecordParent1.SheetElementType.Name].Rows.push(this.selectedRecordParent1);
        }
        else {
            let index = this.selectedElements[this.selectedRecordParent2.SheetElementType.Name].Rows.indexOf(this.selectedRecordParent2);
            this.selectedElements[this.selectedRecordParent2.SheetElementType.Name].Rows.splice(index, 1);
        }
    }
    onFileChanged($event) {
        this.userFile = $event;
    }
    Selected1(parent1) {
        if (parent1) {
            this.elementTypes.forEach((t) => {
                if (this.elements[t.Name].Rows == null)
                    return;
                this.elements[t.Name].Rows.forEach((e) => {
                    if (e.ID == this.frmGroup.controls['parent1'].value) {
                        this.selectedRecordParent1 = e;
                    }
                });
            });
        }
        else {
            this.elementTypes.forEach((t) => {
                if (this.selectedElements[t.Name].Rows == null)
                    return;
                this.selectedElements[t.Name].Rows.forEach((e) => {
                    if (e.ID == this.frmGroup.controls['parent2'].value) {
                        this.selectedRecordParent2 = e;
                    }
                });
            });
        }
    }
}
EditSheetElementComponent.ɵfac = function EditSheetElementComponent_Factory(t) { return new (t || EditSheetElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
EditSheetElementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditSheetElementComponent, selectors: [["app-edit-sheet-element"]], inputs: { selectedSheetElement: "selectedSheetElement", elementTypes: "elementTypes", elements: "elements", selectedElements: "selectedElements", error: "error" }, outputs: { saved: "saved" }, decls: 18, vars: 22, consts: [["method", "post", 1, "grid-1", 3, "formGroup", "ngSubmit"], [3, "IsExpanded"], ["header", ""], [1, "grid-1"], [3, "label", "controlName", "controlType", "dataList", "descField", "frmGroup"], [3, "label", "controlName", "frmGroup"], [3, "label", "controlName", "controlType", "frmGroup"], [4, "ngIf"], ["class", "mt-1 grid-1", 4, "ngIf"], ["class", "mt-1", 4, "ngIf"], [1, "unselectable", "mt-1"], ["class", "unselectable mt-1 error-message", 4, "ngIf"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"], [3, "label", "controlName", "controlType", "frmGroup", "onFileChanged"], [1, "mt-1", "grid-1"], [1, "ml-1", 3, "label", "controlName", "controlType", "frmGroup"], ["for", "referenceSheetElement"], ["id", "referenceSheetElement", "formControlName", "referenceSheetElement", 1, "form-control", 3, "change"], [3, "id", "label", 4, "ngFor", "ngForOf"], [3, "id", "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "mt-1"], [1, "mt-1", "abilitated"], ["size", "10", "formControlName", "parent1", 1, "form-control", "h-100", 3, "change"], [1, "ml-1", 2, "display", "grid"], ["type", "button", 1, "btn", 3, "click"], ["type", "button", 1, "btn", "mt-1", 3, "click"], ["size", "10", "formControlName", "parent2", 1, "form-control", "h-100", "ml-1", 3, "change"], [1, "unselectable", "mt-1", "error-message"]], template: function EditSheetElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function EditSheetElementComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-expander", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Campi base");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-form-control", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, EditSheetElementComponent_div_8_Template, 2, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, EditSheetElementComponent_div_9_Template, 3, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, EditSheetElementComponent_div_10_Template, 2, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, EditSheetElementComponent_div_11_Template, 5, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, EditSheetElementComponent_app_expander_12_Template, 13, 2, "app-expander", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "* Mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, EditSheetElementComponent_label_15_Template, 2, 1, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("IsExpanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "* Type")("controlName", "type")("controlType", 2)("dataList", ctx.elementTypes)("descField", "Name")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "* Name")("controlName", "name")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", "* Description")("controlName", "description")("controlType", 3)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.frmGroup.controls["type"].value == 6 || ctx.frmGroup.controls["type"].value == 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.frmGroup.controls["type"].value == 1 || ctx.frmGroup.controls["type"].value == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.frmGroup.controls["type"].value == 1 || ctx.frmGroup.controls["type"].value == 2 || ctx.frmGroup.controls["type"].value == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.frmGroup.controls["type"].value == 2 || ctx.frmGroup.controls["type"].value == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.frmGroup.controls["type"].value == 3 || ctx.frmGroup.controls["type"].value == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.error != "" && ctx.error != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _expander_expander_component__WEBPACK_IMPORTED_MODULE_2__.ExpanderComponent, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_3__.FormControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]], styles: [".abilitated[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 30px 1fr;\n}\n.abilitated[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc2hlZXQtZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQ0FBQTtBQUNKO0FBQUk7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FBRVIiLCJmaWxlIjoiZWRpdC1zaGVldC1lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFiaWxpdGF0ZWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDMwcHggMWZyO1xyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 2261:
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-skills/edit-skills.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSkillsComponent": () => (/* binding */ EditSkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_classes_sheet_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/sheet-element */ 116);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);







function EditSkillsComponent_app_form_control_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-form-control", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChanged", function EditSkillsComponent_app_form_control_1_Template_app_form_control_onChanged_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.ValueChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", r_r1.Name)("controlName", r_r1.ID.toString())("controlType", 1)("frmGroup", ctx_r0.frmGroup);
} }
class EditSkillsComponent {
    constructor(fb) {
        this.fb = fb;
        this.valueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
    }
    createSignupForm() {
        let vett = {};
        this.skills.forEach((a) => {
            vett[a.ID.toString()] = [a.Min, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(a.Min), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(a.Max)])];
        });
        return this.fb.group(vett);
    }
    ValueChanged() {
        let values = new Array();
        this.skills.forEach((a) => {
            let value = new src_app_classes_sheet_element__WEBPACK_IMPORTED_MODULE_0__.SheetElementValue();
            value.Element = a;
            value.Value = this.frmGroup.controls[a.ID.toString()].value;
            values.push(value);
        });
        this.valueChanged.emit(values);
    }
    onSubmit() {
        this.ValueChanged();
        this.next.emit();
    }
}
EditSkillsComponent.ɵfac = function EditSkillsComponent_Factory(t) { return new (t || EditSkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
EditSkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditSkillsComponent, selectors: [["app-edit-skills"]], inputs: { skills: "skills" }, outputs: { valueChanged: "valueChanged", next: "next" }, decls: 5, vars: 3, consts: [["method", "post", 1, "grid-1", 3, "formGroup", "ngSubmit"], ["class", "ml-1", 3, "label", "controlName", "controlType", "frmGroup", "onChanged", 4, "ngFor", "ngForOf"], [1, "mt-1"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"], [1, "ml-1", 3, "label", "controlName", "controlType", "frmGroup", "onChanged"]], template: function EditSkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditSkillsComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditSkillsComponent_app_form_control_1_Template, 1, 4, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__.FormControlComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNraWxscy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6871:
/*!***************************************************************!*\
  !*** ./src/app/components/edit-topic/edit-topic.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTopicComponent": () => (/* binding */ EditTopicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_classes_topic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/topic */ 6750);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);







function EditTopicComponent_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class EditTopicComponent {
    constructor(fb) {
        this.fb = fb;
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
    }
    createSignupForm() {
        let vett = {};
        if (this.selectedTopic == null) {
            this.selectedTopic = new src_app_classes_topic__WEBPACK_IMPORTED_MODULE_0__.Topic();
            this.selectedTopic.Title = '';
            this.selectedTopic.Icon = '';
        }
        vett['title'] = [this.selectedTopic.Title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        vett['image'] = [this.selectedTopic.Icon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        var resullt = this.fb.group(vett);
        return resullt;
    }
    onFileChanged($event) {
        this.userFile = $event;
    }
    onSubmit() {
        let formData = new FormData();
        if (this.userFile != null) {
            formData.append('myFile', this.userFile, this.userFile.name);
            formData.append('HasImage', (true).toString());
        }
        formData.append('Title', this.frmGroup.controls['title'].value);
        formData.append('Icon', this.frmGroup.controls['image'].value);
        this.saved.emit(formData);
    }
}
EditTopicComponent.ɵfac = function EditTopicComponent_Factory(t) { return new (t || EditTopicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
EditTopicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditTopicComponent, selectors: [["app-edit-topic"]], inputs: { selectedTopic: "selectedTopic", error: "error" }, outputs: { saved: "saved" }, decls: 8, vars: 10, consts: [["method", "post", 1, "grid-1", 3, "formGroup", "ngSubmit"], [3, "label", "controlName", "frmGroup"], [3, "label", "controlName", "controlType", "frmGroup", "onFileChanged"], [1, "unselectable", "mt-1"], ["class", "unselectable mt-1 error-message", 4, "ngIf"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"], [1, "unselectable", "mt-1", "error-message"]], template: function EditTopicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditTopicComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-form-control", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onFileChanged", function EditTopicComponent_Template_app_form_control_onFileChanged_2_listener($event) { return ctx.onFileChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "* Mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditTopicComponent_label_5_Template, 2, 1, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* Title")("controlName", "title")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* Image")("controlName", "image")("controlType", 8)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error != "" && ctx.error != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__.FormControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXRvcGljLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9877:
/*!***********************************************************************!*\
  !*** ./src/app/components/edit-user-type/edit-user-type.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserTypeComponent": () => (/* binding */ EditUserTypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_classes_user_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/user-type */ 5258);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);







function EditUserTypeComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class EditUserTypeComponent {
    constructor(fb) {
        this.fb = fb;
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
    }
    createSignupForm() {
        let vett = {};
        if (this.selectedUsertype == null) {
            vett['usertype'] = ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        }
        else {
            vett['usertype'] = [this.selectedUsertype, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])];
        }
        var resullt = this.fb.group(vett);
        return resullt;
    }
    onSubmit() {
        let u = new src_app_classes_user_type__WEBPACK_IMPORTED_MODULE_0__.UserType();
        u.Description = this.frmGroup.controls['usertype'].value;
        this.saved.emit(u);
    }
}
EditUserTypeComponent.ɵfac = function EditUserTypeComponent_Factory(t) { return new (t || EditUserTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
EditUserTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditUserTypeComponent, selectors: [["app-edit-user-type"]], inputs: { selectedUsertype: "selectedUsertype", error: "error" }, outputs: { saved: "saved" }, decls: 7, vars: 6, consts: [["method", "post", 1, "grid-1", 3, "formGroup", "ngSubmit"], [3, "label", "controlName", "frmGroup"], [1, "unselectable", "mt-1"], ["class", "unselectable mt-1 error-message", 4, "ngIf"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"], [1, "unselectable", "mt-1", "error-message"]], template: function EditUserTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EditUserTypeComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "* Mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EditUserTypeComponent_label_4_Template, 2, 1, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", "* Usertype Name")("controlName", "usertype")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error != "" && ctx.error != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_1__.FormControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVzZXItdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7887:
/*!*************************************************************!*\
  !*** ./src/app/components/edit-user/edit-user.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserComponent": () => (/* binding */ EditUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-control/form-control.component */ 7175);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);






function EditUserComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class EditUserComponent {
    constructor(fb) {
        this.fb = fb;
        this.saved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
    }
    createSignupForm() {
        let vett = {};
        if (this.selectedUsertype == null) {
            vett['usertype'] = ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])];
        }
        else {
            vett['usertype'] = [this.selectedUsertype.UserType.ID, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])];
        }
        var resullt = this.fb.group(vett);
        return resullt;
    }
    onSubmit() {
        this.selectedUsertype.IDUserType = parseInt(this.frmGroup.controls['usertype'].value);
        this.saved.emit(this.selectedUsertype);
    }
}
EditUserComponent.ɵfac = function EditUserComponent_Factory(t) { return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
EditUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditUserComponent, selectors: [["app-edit-user"]], inputs: { selectedUsertype: "selectedUsertype", error: "error", userTypes: "userTypes" }, outputs: { saved: "saved" }, decls: 7, vars: 9, consts: [["method", "post", 1, "grid-1", 3, "formGroup", "ngSubmit"], [3, "label", "controlName", "controlType", "dataList", "descField", "frmGroup"], [1, "unselectable", "mt-1"], ["class", "unselectable mt-1 error-message", 4, "ngIf"], ["type", "submit", 1, "btn", "unselectable", "override-dialog", 3, "disabled"], [1, "unselectable", "mt-1", "error-message"]], template: function EditUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditUserComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "* Mandatory fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EditUserComponent_label_4_Template, 2, 1, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "* Usertype")("controlName", "usertype")("controlType", 2)("dataList", ctx.userTypes)("descField", "Description")("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error != "" && ctx.error != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_0__.FormControlComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6458:
/*!***********************************************************!*\
  !*** ./src/app/components/expander/expander.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpanderComponent": () => (/* binding */ ExpanderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function ExpanderComponent_ng_content_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1, ["*ngIf", "IsExpanded"]);
} }
const _c0 = [[["", "header", ""]], "*"];
const _c1 = function (a0, a1) { return { "expander": a0, "expander-expanded": a1 }; };
const _c2 = ["[header]", "*"];
class ExpanderComponent {
    constructor() { }
    ngOnInit() {
    }
    Expanded() {
        this.IsExpanded = !this.IsExpanded;
    }
}
ExpanderComponent.ɵfac = function ExpanderComponent_Factory(t) { return new (t || ExpanderComponent)(); };
ExpanderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpanderComponent, selectors: [["app-expander"]], inputs: { IsExpanded: "IsExpanded" }, ngContentSelectors: _c2, decls: 7, vars: 5, consts: [[1, "header", 3, "click"], [3, "ngClass"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "viewBox", "0 0 451.846 451.847"], ["d", "M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"], [4, "ngIf"]], template: function ExpanderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpanderComponent_Template_div_click_1_listener() { return ctx.Expanded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExpanderComponent_ng_content_6_Template, 1, 0, "ng-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, !ctx.IsExpanded, ctx.IsExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IsExpanded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25px 1fr;\n  line-height: 25px;\n}\n\n.expander[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .expander-expanded[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .bool[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 25px;\n  fill: white;\n  cursor: pointer;\n}\n\n.expander[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .expander-expanded[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in-out;\n}\n\n.expander[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover, .expander-expanded[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n  fill: orange;\n}\n\n.expander-expanded[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGFuZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNSOztBQUdJO0VBQ0ksc0NBQUE7QUFBUjs7QUFDUTtFQUNJLFlBQUE7QUFDWjs7QUFJSTtFQUNJLHdCQUFBO0FBRFIiLCJmaWxlIjoiZXhwYW5kZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmV4cGFuZGVyLCAuZXhwYW5kZXItZXhwYW5kZWQsIC5ib29sIHtcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG4uZXhwYW5kZXIsIC5leHBhbmRlci1leHBhbmRlZCB7XHJcbiAgICBzdmcge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGZpbGw6IG9yYW5nZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmV4cGFuZGVyLWV4cGFuZGVkIHtcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 7175:
/*!*******************************************************************!*\
  !*** ./src/app/components/form-control/form-control.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormControlComponent": () => (/* binding */ FormControlComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_classes_form_control_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/form-control-type */ 6623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/angular-editor */ 8888);
/* harmony import */ var _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../code-editor/code-editor.component */ 7043);







function FormControlComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("for", ctx_r0.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.label);
} }
function FormControlComponent_ng_container_2_datalist_2_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", m_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](m_r13);
} }
function FormControlComponent_ng_container_2_datalist_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "datalist", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormControlComponent_ng_container_2_datalist_2_option_1_Template, 2, 2, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r11.dataList);
} }
const _c0 = function (a1, a2) { return { "form-control": true, "is-invalid": a1, "is-valid": a2 }; };
function FormControlComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FormControlComponent_ng_container_2_datalist_2_Template, 2, 1, "datalist", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r1.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](4, _c0, ctx_r1.frmGroup.controls[ctx_r1.controlName].invalid && !ctx_r1.frmGroup.controls[ctx_r1.controlName].pristine, !ctx_r1.frmGroup.controls[ctx_r1.controlName].invalid && !ctx_r1.frmGroup.controls[ctx_r1.controlName].pristine));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.dataList != null);
} }
function FormControlComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r2.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("formControlName", ctx_r2.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx_r2.frmGroup.controls[ctx_r2.controlName].invalid && !ctx_r2.frmGroup.controls[ctx_r2.controlName].pristine, !ctx_r2.frmGroup.controls[ctx_r2.controlName].invalid && !ctx_r2.frmGroup.controls[ctx_r2.controlName].pristine));
} }
function FormControlComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FormControlComponent_ng_container_4_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.OnChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r3.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("min", ctx_r3.Min);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("max", ctx_r3.Max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("formControlName", ctx_r3.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c0, ctx_r3.frmGroup.controls[ctx_r3.controlName].invalid && !ctx_r3.frmGroup.controls[ctx_r3.controlName].pristine, !ctx_r3.frmGroup.controls[ctx_r3.controlName].invalid && !ctx_r3.frmGroup.controls[ctx_r3.controlName].pristine));
} }
function FormControlComponent_ng_container_5_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", d_r17.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](d_r17[ctx_r16.descField]);
} }
const _c1 = function (a1, a2, a3) { return { "form-control": true, "is-invalid": a1, "is-valid": a2, "h-100": a3 }; };
function FormControlComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FormControlComponent_ng_container_5_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.OnChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FormControlComponent_ng_container_5_option_2_Template, 2, 2, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r4.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("size", ctx_r4.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("formControlName", ctx_r4.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](5, _c1, ctx_r4.frmGroup.controls[ctx_r4.controlName].invalid && !ctx_r4.frmGroup.controls[ctx_r4.controlName].pristine, !ctx_r4.frmGroup.controls[ctx_r4.controlName].invalid && !ctx_r4.frmGroup.controls[ctx_r4.controlName].pristine, ctx_r4.size > 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.dataList);
} }
function FormControlComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "angular-editor", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r5.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("formControlName", ctx_r5.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx_r5.editorConfig);
} }
function FormControlComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r6.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("formControlName", ctx_r6.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx_r6.frmGroup.controls[ctx_r6.controlName].invalid && !ctx_r6.frmGroup.controls[ctx_r6.controlName].pristine, !ctx_r6.frmGroup.controls[ctx_r6.controlName].invalid && !ctx_r6.frmGroup.controls[ctx_r6.controlName].pristine));
} }
function FormControlComponent_ng_container_8__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormControlComponent_ng_container_8__svg_svg_3_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r22.SetPasswordVisible(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormControlComponent_ng_container_8__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormControlComponent_ng_container_8__svg_svg_4_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r24.SetPasswordVisible(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormControlComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FormControlComponent_ng_container_8__svg_svg_3_Template, 2, 0, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FormControlComponent_ng_container_8__svg_svg_4_Template, 3, 0, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r7.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("formControlName", ctx_r7.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("type", ctx_r7.passType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c0, ctx_r7.frmGroup.controls["password"].invalid && !ctx_r7.frmGroup.controls["password"].pristine, !ctx_r7.frmGroup.controls["password"].invalid && !ctx_r7.frmGroup.controls["password"].pristine));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r7.passVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.passVisible);
} }
function FormControlComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FormControlComponent_ng_container_9_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.OnChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", ctx_r8.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("formControlName", ctx_r8.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c0, ctx_r8.frmGroup.controls[ctx_r8.controlName].invalid && !ctx_r8.frmGroup.controls[ctx_r8.controlName].pristine, !ctx_r8.frmGroup.controls[ctx_r8.controlName].invalid && !ctx_r8.frmGroup.controls[ctx_r8.controlName].pristine));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("for", ctx_r8.controlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.label);
} }
function FormControlComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FormControlComponent_ng_container_10_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.onFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx_r9.frmGroup.controls[ctx_r9.controlName].invalid && !ctx_r9.frmGroup.controls[ctx_r9.controlName].pristine, !ctx_r9.frmGroup.controls[ctx_r9.controlName].invalid && !ctx_r9.frmGroup.controls[ctx_r9.controlName].pristine));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.frmGroup.controls["image"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r9.imageSrc || ctx_r9.frmGroup.controls["image"].value || "http://via.placeholder.com/100x100", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function FormControlComponent_app_code_editor_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-code-editor");
} }
class FormControlComponent {
    constructor() {
        this.controlType = src_app_classes_form_control_type__WEBPACK_IMPORTED_MODULE_0__.FormControlType.Input;
        this.Min = 0;
        this.size = 1;
        this.visiblePassChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onFileChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.passType = "password";
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '100px',
            maxHeight: '300px',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter description here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            // uploadUrl: 'v1/image',
            // uploadWithCredentials: false,
            sanitize: true,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [
                // ['bold', 'italic'],
                // ['fontSize']
                [
                    'insertImage',
                    'insertVideo',
                    'strikeThrough',
                    'subscript',
                    'superscript',
                    'justifyLeft',
                    'justifyCenter',
                    'justifyFull',
                    'font',
                    'fontSize',
                    'justifyRight',
                    'toggleEditorMode'
                ]
            ]
        };
    }
    ngOnInit() {
    }
    SetPasswordVisible() {
        this.passVisible = !this.passVisible;
        if (this.passVisible) {
            this.passType = "text";
        }
        else {
            this.passType = "password";
        }
        this.visiblePassChanged.emit(this.passVisible);
    }
    OnChanged($event) {
        this.onChanged.emit(this.controlName);
    }
    onFileChange(event) {
        this.userFile = event.target.files[0];
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.imageSrc = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        this.frmGroup.controls['image'].setValue(this.userFile.name);
        this.onFileChanged.emit(this.userFile);
    }
}
FormControlComponent.ɵfac = function FormControlComponent_Factory(t) { return new (t || FormControlComponent)(); };
FormControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FormControlComponent, selectors: [["app-form-control"]], inputs: { controlName: "controlName", frmGroup: "frmGroup", controlType: "controlType", Min: "Min", Max: "Max", label: "label", descField: "descField", dataList: "dataList", dataList2: "dataList2", size: "size" }, outputs: { visiblePassChanged: "visiblePassChanged", onChanged: "onChanged", onFileChanged: "onFileChanged" }, decls: 12, vars: 12, consts: [[1, "grid-1", 3, "formGroup"], ["class", "unselectable mt-1", 3, "for", 4, "ngIf"], [4, "ngIf"], [1, "unselectable", "mt-1", 3, "for"], ["list", "listData", 3, "id", "ngClass", "formControlName"], ["id", "listData", 4, "ngIf"], ["id", "listData"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "id", "ngClass", "formControlName"], ["type", "number", 3, "id", "min", "max", "ngClass", "formControlName", "change"], [3, "id", "ngClass", "size", "formControlName", "change"], [3, "id", "formControlName", "config"], ["type", "mail", 3, "id", "ngClass", "formControlName"], [1, "cont-password"], [3, "id", "ngClass", "formControlName", "type"], ["xmlns", "http://www.w3.org/2000/svg", "class", "btn-show-password", "viewBox", "0 0 576 512", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "class", "btn-show-password", "viewBox", "0 0 576 512", "stroke-linejoin", "round", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", 1, "btn-show-password", 3, "click"], ["d", "M569.4 231.6C513 135.9 407.8 72 288 72 168.1 72 63 136 6.6 231.6a48 48 0 0 0 0 48.7C63 376.1 168.2 440 288 440c119.9 0 225-64 281.4-159.6a48 48 0 0 0 0-48.7zM288 392c-102.6 0-192.1-54.7-240-136 44.2-74.9 123.7-127.3 216.2-135C274 131.1 280 144.8 280 160c0 30.9-25.1 56-56 56s-56-25.1-56-56l0 0C157.8 179 152 200.8 152 224c0 75.1 60.9 136 136 136s136-60.9 136-136c0-31-10.4-59.6-27.9-82.5C451.7 164.6 498 205.1 528 256c-47.9 81.3-137.4 136-240 136z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", "stroke-linejoin", "round", 1, "btn-show-password", 3, "click"], ["d", "M569.4 231.6C513 135.9 407.8 72 288 72 168.1 72 63 136 6.6 231.6 -2.2 246.6-2.2 265.4 6.6 280.4 63 376.1 168.2 440 288 440 407.9 440 513 376 569.4 280.4 578.2 265.4 578.2 246.6 569.4 231.6ZM288 392C185.4 392 95.9 337.3 48 256 92.2 181.1 171.7 128.7 264.2 121 274 131.1 280 144.8 280 160 280 190.9 254.9 216 224 216 193.1 216 168 190.9 168 160L168 160C157.8 179 152 200.8 152 224 152 299.1 212.9 360 288 360 363.1 360 424 299.1 424 224 424 193 413.6 164.4 396.1 141.5 451.7 164.6 498 205.1 528 256 480.1 337.3 390.6 392 288 392Z"], ["d", "M48 392C49.5 390.6 508 87 508 87", 1, "line"], [1, "switch"], ["type", "checkbox", 3, "id", "ngClass", "formControlName", "change"], [1, "slider", "round"], [2, "display", "grid", "grid-template-columns", "1fr 100px"], ["type", "hidden", "formControlName", "image", 3, "ngClass"], ["id", "image", "type", "file", 3, "change"], [1, "lblImage"], ["id", "previewIcon", "alt", "Your image", 1, "ml-1", 3, "src"]], template: function FormControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormControlComponent_label_1_Template, 2, 2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FormControlComponent_ng_container_2_Template, 3, 7, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FormControlComponent_ng_container_3_Template, 2, 6, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FormControlComponent_ng_container_4_Template, 2, 8, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FormControlComponent_ng_container_5_Template, 3, 9, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, FormControlComponent_ng_container_6_Template, 2, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FormControlComponent_ng_container_7_Template, 2, 6, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FormControlComponent_ng_container_8_Template, 5, 9, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FormControlComponent_ng_container_9_Template, 7, 8, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FormControlComponent_ng_container_10_Template, 9, 6, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, FormControlComponent_app_code_editor_11_Template, 1, 0, "app-code-editor", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.controlType != 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.controlType == 0 && ctx.dataList != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.controlType == 0 && ctx.dataList == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.controlType == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.controlType == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.controlType == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.controlType == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.controlType == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.controlType == 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.controlType == 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.controlType == 7);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__.AngularEditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_1__.CodeEditorComponent], styles: [".cont-password[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 45px;\n}\n.cont-password[_ngcontent-%COMP%]   .btn-show-password[_ngcontent-%COMP%] {\n  height: 32px;\n  margin-left: 5px;\n  fill: #989898;\n  cursor: pointer;\n}\n.cont-password[_ngcontent-%COMP%]   .btn-show-password[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 30px;\n  stroke: #989898;\n}\n.cont-password[_ngcontent-%COMP%]   .btn-show-password[_ngcontent-%COMP%]:hover {\n  fill: #ff3636bb;\n}\n.cont-password[_ngcontent-%COMP%]   .btn-show-password[_ngcontent-%COMP%]:hover   .line[_ngcontent-%COMP%] {\n  stroke: #ff3636bb;\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 42px;\n  height: 25px;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #777777;\n  transition: 0.4s;\n  border-radius: 15px;\n}\n.switch[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 17px;\n  width: 17px;\n  left: 4px;\n  bottom: 4px;\n  background-color: #444444;\n  transition: 0.4s;\n  border-radius: 15px;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #06ab14;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #06ab14;\n}\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(17px);\n}\n#previewIcon[_ngcontent-%COMP%] {\n  max-width: 100px;\n  max-height: 100px;\n}\n.lblImage[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 400px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSwrQkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUVSO0FBRFE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBR1o7QUFEUTtFQUNJLGVBQUE7QUFHWjtBQUZZO0VBQ0ksaUJBQUE7QUFJaEI7QUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDSSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0FBR1o7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFBSTtFQUNJLDJCQUFBO0FBRVI7QUFBSTtFQUdJLDJCQUFBO0FBRVI7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUNBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRUoiLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnQtcGFzc3dvcmR7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNDVweDtcclxuICAgIC5idG4tc2hvdy1wYXNzd29yZCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgZmlsbDogIzk4OTg5ODtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLmxpbmV7XHJcbiAgICAgICAgICAgIGZpbGw6bm9uZTtcclxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOjMwcHg7XHJcbiAgICAgICAgICAgIHN0cm9rZTojOTg5ODk4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZmlsbDogI2ZmMzYzNmJiO1xyXG4gICAgICAgICAgICAubGluZXtcclxuICAgICAgICAgICAgICAgIHN0cm9rZTojZmYzNjM2YmI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBpbnB1dCB7IFxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLnNsaWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3I6ICMxZTFlMWUsICRhbW91bnQ6IDM1KTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3I6ICMxZTFlMWUsICRhbW91bnQ6IDE1KTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2YWIxNDtcclxuICAgIH1cclxuICAgIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAjMDZhYjE0O1xyXG4gICAgfVxyXG4gICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxN3B4KTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE3cHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxN3B4KTtcclxuICAgIH1cclxufVxyXG5cclxuI3ByZXZpZXdJY29uIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG4ubGJsSW1hZ2Uge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5819:
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);




function MenuComponent_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", m_r1.Route.Path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r1.Name);
} }
const _c0 = function (a0, a1) { return { "menu-header": a0, "menu-header-expanded": a1 }; };
const _c1 = function (a0, a1) { return { "icon-menu": a0, "icon-menu-expanded": a1 }; };
function MenuComponent_li_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_1_ng_container_2_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const m_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggle(m_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-menu", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const m_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, !m_r1.IsExpanded, m_r1.IsExpanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, !m_r1.IsExpanded, m_r1.IsExpanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r1.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", m_r1.IsExpanded ? "open" : "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", m_r1.Childrens);
} }
function MenuComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_li_1_a_1_Template, 2, 2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_li_1_ng_container_2_Template, 6, 11, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r1.Childrens == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r1.Childrens != null);
} }
class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
    toggle(item) {
        item.IsExpanded = !item.IsExpanded;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], inputs: { menu: "menu" }, decls: 2, vars: 1, consts: [[1, "menu"], [4, "ngFor", "ngForOf"], ["class", "menu-header", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["routerLinkActive", "active", 1, "menu-header", 3, "routerLink"], [3, "ngClass", "click"], [3, "ngClass"], [3, "menu"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_li_1_Template, 3, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, MenuComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)("openClose", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)("open", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ minHeight: "auto", opacity: 1 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)("closed", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({ height: "0px", opacity: 0, overflow: "hidden" })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)("* => closed", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)("0.5s")]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)("* => open", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)("0.5s")])
            ])
        ] } });


/***/ }),

/***/ 3385:
/*!*************************************************!*\
  !*** ./src/app/components/tab/tab.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabComponent": () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tabs/tabs.component */ 9450);


const _c0 = ["*"];
class TabComponent {
    constructor(tabs) {
        this.active = false;
        tabs.addTab(this);
    }
    ngOnInit() {
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_0__.TabsComponent)); };
TabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TabComponent, selectors: [["app-tab"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "hidden"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.active);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9767:
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComponent": () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/data-table */ 7326);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function TableComponent_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "li", 5);
} }
function TableComponent_ul_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_ul_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "li", 5);
} }
function TableComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TableComponent_ul_1_li_1_Template, 1, 0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_ul_1_li_2_Template, 2, 0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_ul_1_li_3_Template, 1, 0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.table.ChildrenRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.table.Columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.table.EditButton || ctx_r0.table.DeleteButton);
} }
function TableComponent_table_2_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_table_2_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r11.Description);
} }
function TableComponent_table_2_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "expander": a0, "expander-expanded": a1 }; };
function TableComponent_table_2_ng_container_7_td_2_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_table_2_ng_container_7_td_2_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const r_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.Expanded(r_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](1, _c0, !r_r12.IsExpanded, r_r12.IsExpanded));
} }
function TableComponent_table_2_ng_container_7_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TableComponent_table_2_ng_container_7_td_2_span_1_Template, 3, 4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", r_r12.Childrens != null && r_r12.Childrens.length > 0);
} }
function TableComponent_table_2_ng_container_7_td_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const r_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r24.GetPropretyValue(r_r12, c_r23.Name), "dd-MM-yyyy - HH:mm:ss"));
} }
function TableComponent_table_2_ng_container_7_td_3_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 18);
} if (rf & 2) {
    const c_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const r_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r25.GetPropretyValue(r_r12, c_r23.Name), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TableComponent_table_2_ng_container_7_td_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 19);
} if (rf & 2) {
    const c_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const r_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r26.GetPropretyValue(r_r12, c_r23.Name), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function TableComponent_table_2_ng_container_7_td_3_span_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_table_2_ng_container_7_td_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TableComponent_table_2_ng_container_7_td_3_span_5_span_1_Template, 3, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const r_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.GetPropretyValue(r_r12, c_r23.Name));
} }
function TableComponent_table_2_ng_container_7_td_3_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const r_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r28.GetPropretyValue(r_r12, c_r23.Name));
} }
function TableComponent_table_2_ng_container_7_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_table_2_ng_container_7_td_3_span_2_Template, 3, 4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_table_2_ng_container_7_td_3_img_3_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TableComponent_table_2_ng_container_7_td_3_span_4_Template, 1, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TableComponent_table_2_ng_container_7_td_3_span_5_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TableComponent_table_2_ng_container_7_td_3_span_6_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", c_r23.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "bool");
} }
function TableComponent_table_2_ng_container_7_td_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_table_2_ng_container_7_td_4_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const r_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r42.Edit(r_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_table_2_ng_container_7_td_4_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_table_2_ng_container_7_td_4_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const r_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r45.Delete(r_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_table_2_ng_container_7_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TableComponent_table_2_ng_container_7_td_4_button_1_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_table_2_ng_container_7_td_4_button_2_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.table.EditButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.table.DeleteButton);
} }
function TableComponent_table_2_ng_container_7_ng_container_5_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("edited", function TableComponent_table_2_ng_container_7_ng_container_5_td_2_Template_app_table_edited_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r50.Edit($event); })("deleted", function TableComponent_table_2_ng_container_7_ng_container_5_td_2_Template_app_table_deleted_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r52.Delete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("colspan", ctx_r48.table.Columns.length + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("table", ctx_r48.tableChildren);
} }
function TableComponent_table_2_ng_container_7_ng_container_5_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("edited", function TableComponent_table_2_ng_container_7_ng_container_5_td_3_Template_app_table_edited_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r53.Edit($event); })("deleted", function TableComponent_table_2_ng_container_7_ng_container_5_td_3_Template_app_table_deleted_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r55.Delete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("colspan", ctx_r49.table.Columns.length + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("table", ctx_r49.tableChildren);
} }
function TableComponent_table_2_ng_container_7_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_table_2_ng_container_7_ng_container_5_td_2_Template, 2, 2, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_table_2_ng_container_7_ng_container_5_td_3_Template, 2, 2, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.table.EditButton || ctx_r16.table.DeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r16.table.EditButton && !ctx_r16.table.DeleteButton);
} }
const _c1 = function (a0) { return { "selected": a0 }; };
function TableComponent_table_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_table_2_ng_container_7_Template_tr_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); const r_r12 = restoredCtx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r56.SelectedRow(r_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_table_2_ng_container_7_td_2_Template, 2, 1, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_table_2_ng_container_7_td_3_Template, 7, 5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TableComponent_table_2_ng_container_7_td_4_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TableComponent_table_2_ng_container_7_ng_container_5_Template, 4, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const r_r12 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, r_r12.Selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.table.ChildrenRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.table.Columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.table.EditButton || ctx_r10.table.DeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.table.ChildrenRows && r_r12.IsExpanded);
} }
function TableComponent_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_table_2_th_3_Template, 2, 0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TableComponent_table_2_th_4_Template, 2, 1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TableComponent_table_2_th_5_Template, 2, 0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TableComponent_table_2_ng_container_7_Template, 6, 7, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.table.ChildrenRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.table.Columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.table.EditButton || ctx_r1.table.DeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.table.Rows);
} }
function TableComponent_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_div_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r60.Add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r58.table.AddButtonText);
} }
function TableComponent_div_3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_div_3_button_2_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const p_r62 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r63.NextPage(p_r62.Text); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", p_r62.Active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r62.Text);
} }
function TableComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TableComponent_div_3_button_1_Template, 2, 1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_div_3_button_2_Template, 2, 2, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.table.AddButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.table.Pagination);
} }
class TableComponent {
    constructor() {
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.added = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.pagechanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.rowselected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.IsExpanded = false;
    }
    ngOnInit() {
    }
    Edit(record) {
        this.edited.emit(record);
    }
    Delete(record) {
        this.deleted.emit(record);
    }
    Add() {
        this.added.emit();
    }
    Expanded($event) {
        this.IsExpanded = !this.IsExpanded;
        $event.IsExpanded = !$event.IsExpanded;
        this.tableChildren = this.table.Copy();
        if ($event.Fields != null) {
            this.tableChildren.Columns = new Array();
            $event.Fields.forEach((f) => {
                if (f == "Icon") {
                    this.tableChildren.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn(f, "image"));
                }
                else {
                    this.tableChildren.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn(f, "string"));
                }
            });
        }
        this.tableChildren.Rows = $event.Childrens;
        this.tableChildren.ChildrenRows = true;
        this.tableChildren.AddButton = false;
    }
    GetPropretyValue(item, path) {
        if (path.indexOf(".") > -1) {
            let pathTemp = path.substring(0, path.indexOf("."));
            let index = this.GetIndex(pathTemp);
            if (index > -1) {
                pathTemp = pathTemp.substring(0, pathTemp.indexOf("["));
                return this.GetPropretyValue(item[pathTemp][index], path.substring(path.indexOf(".") + 1, path.length));
            }
            return this.GetPropretyValue(item[pathTemp], path.substring(path.indexOf(".") + 1, path.length));
        }
        let index = this.GetIndex(path);
        if (index > -1) {
            path = path.substring(0, path.indexOf("["));
            return item[path][index];
        }
        return item[path];
    }
    GetIndex(path) {
        if ((path.indexOf("[") > -1) && (path.indexOf("]") > -1)) {
            return parseInt(path.substring(path.indexOf("[") + 1, path.indexOf("]")));
        }
        return -1;
    }
    NextPage(page) {
        this.pagechanged.emit(page);
    }
    SelectedRow($event) {
        let tempStatus = $event.Selected;
        this.table.Rows.forEach((r) => {
            r.Selected = false;
        });
        if (tempStatus == null) {
            $event.Selected = true;
        }
        else {
            $event.Selected = !tempStatus;
        }
        this.rowselected.emit($event);
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], inputs: { table: "table" }, outputs: { edited: "edited", deleted: "deleted", added: "added", pagechanged: "pagechanged", rowselected: "rowselected" }, decls: 4, vars: 3, consts: [["id", "dati"], [4, "ngIf"], ["id", "pagination", "class", "mt-1", 4, "ngIf"], ["scope", "col", 4, "ngIf"], ["scope", "col", 4, "ngFor", "ngForOf"], ["scope", "col"], ["type", "text"], [4, "ngFor", "ngForOf"], [3, "ngClass", "click"], ["class", "buttons", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "viewBox", "0 0 451.846 451.847"], ["d", "M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["width", "150", 3, "src", 4, "ngSwitchCase"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["width", "150", 3, "src"], [3, "innerHTML"], ["class", "bool", 4, "ngIf"], [1, "bool"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xml", "space", "preserve", "viewBox", "0 0 405.272 405.272"], ["d", "M393.401 124.425 179.603 338.208c-15.832 15.835-41.514 15.835-57.361 0L11.878 227.836c-15.838-15.835-15.838-41.52 0-57.358 15.841-15.841 41.521-15.841 57.355-.006l81.698 81.699L336.037 67.064c15.841-15.841 41.523-15.829 57.358 0 15.835 15.838 15.835 41.514.006 57.361z"], [1, "buttons"], ["class", "btn-warning", 3, "click", 4, "ngIf"], ["class", "btn-error ml-1", 3, "click", 4, "ngIf"], [1, "btn-warning", 3, "click"], [1, "btn-error", "ml-1", 3, "click"], [1, "childern"], [3, "table", "edited", "deleted"], ["id", "pagination", 1, "mt-1"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "btn ms-1", 3, "disabled", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "ms-1", 3, "disabled", "click"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TableComponent_ul_1_Template, 4, 3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_table_2_Template, 8, 4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_div_3_Template, 3, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.table.ShowFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.table != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.table != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchDefault, TableComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: [".childern[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksdUJBQUE7QUFBUiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGlsZGVybiB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 9450:
/*!***************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);



const _c0 = function (a1) { return { "menu-header": true, "active": a1 }; };
function TabsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tab_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectTab(tab_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, tab_r1.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r1.title);
} }
const _c1 = ["*"];
class TabsComponent {
    constructor() {
        this.tabs = [];
        this.selectedtab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    selectTab(tab) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true;
        this.selectedtab.emit(tab);
    }
    addTab(tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
TabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], outputs: { selectedtab: "selectedtab" }, ngContentSelectors: _c1, decls: 3, vars: 1, consts: [[1, "menu"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "ngClass"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_li_1_Template, 3, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  margin-top: 5px;\n  position: relative;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-header[_ngcontent-%COMP%] {\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQURRO0VBQ0ksV0FBQTtBQUdaIiwiZmlsZSI6InRhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAubWVudS1oZWFkZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 1658:
/*!*************************************************************!*\
  !*** ./src/app/components/tree-node/tree-node.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeNodeComponent": () => (/* binding */ TreeNodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);




const _c0 = function (a0, a1, a2) { return { "header": a0, "header-expanded": a1, "active": a2 }; };
const _c1 = function (a0, a1) { return { "icon": a0, "icon-expanded": a1 }; };
const _c2 = ["*"];
class TreeNodeComponent {
    constructor() {
        this.IsExpanded = false;
        this.Active = false;
        this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    toggle() {
        this.IsExpanded = !this.IsExpanded;
        this.Active = !this.Active;
        this.expanded.emit(this.IsExpanded.toString());
    }
}
TreeNodeComponent.ɵfac = function TreeNodeComponent_Factory(t) { return new (t || TreeNodeComponent)(); };
TreeNodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeNodeComponent, selectors: [["app-tree-node"]], inputs: { title: "title", IsExpanded: "IsExpanded", Active: "Active" }, outputs: { expanded: "expanded" }, ngContentSelectors: _c2, decls: 6, vars: 11, consts: [[1, "tree-node"], [3, "ngClass", "click"], [3, "ngClass"], [1, "content", "ml-1"]], template: function TreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeNodeComponent_Template_span_click_1_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, !ctx.IsExpanded, ctx.IsExpanded, ctx.Active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, !ctx.IsExpanded, ctx.IsExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", ctx.IsExpanded ? "open" : "closed");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVlLW5vZGUuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)("openClose", [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)("open", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ minHeight: "auto", opacity: 1 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)("closed", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ height: "0px", opacity: 0, overflow: "hidden" })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)("* => closed", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)("0.5s")]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)("* => open", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)("0.5s")])
            ])
        ] } });


/***/ }),

/***/ 3244:
/*!********************************************!*\
  !*** ./src/app/pipes/parentfilter.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParentfilterPipe": () => (/* binding */ ParentfilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ParentfilterPipe {
    transform(value, idparent) {
        return value.filter(l => l.IDParent == idparent);
    }
}
ParentfilterPipe.ɵfac = function ParentfilterPipe_Factory(t) { return new (t || ParentfilterPipe)(); };
ParentfilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "parentfilter", type: ParentfilterPipe, pure: true });


/***/ }),

/***/ 3882:
/*!******************************************!*\
  !*** ./src/app/pipes/typefilter.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypefilterPipe": () => (/* binding */ TypefilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TypefilterPipe {
    transform(value, typename) {
        return value.filter(eq => eq.Type.Name == typename);
    }
}
TypefilterPipe.ɵfac = function TypefilterPipe_Factory(t) { return new (t || TypefilterPipe)(); };
TypefilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "typefilter", type: TypefilterPipe, pure: true });


/***/ }),

/***/ 3765:
/*!*********************************************!*\
  !*** ./src/app/services/commons.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonsService": () => (/* binding */ CommonsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _classes_pkg_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/pkg-response */ 4584);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);





class CommonsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.default_url = "http://localhost:8080";
        this.OnError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.OnShowDeleteDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    Get(pkg, func = '') {
        if (func == '')
            return this.http.get(this.default_url + '/api/' + pkg, {});
        else
            return this.http.get(this.default_url + '/api/' + pkg + '/' + func);
    }
    Post(pkg, func, valore) {
        if (func == '') {
            return this.http.post(this.default_url + '/api/' + pkg, valore);
        }
        else
            return this.http.post(this.default_url + '/api/' + pkg + '/' + func, valore);
    }
    Delete(pkg, func, valore) {
        if (func == '')
            return this.http.delete(this.default_url + '/api/' + pkg + '?ID=' + valore);
        else
            return this.http.delete(this.default_url + '/api/' + pkg + '/' + func + '?ID=' + valore);
    }
    Put(pkg, valore, func = '') {
        if (func == '') {
            return this.http.put(this.default_url + '/api/' + pkg, valore);
        }
        else
            return this.http.put(this.default_url + '/api/' + pkg + '/' + func, valore);
    }
    setToken(cookie) {
        window.sessionStorage.setItem(cookie.Name, cookie.Value);
    }
    getToken(name) {
        if (!window.sessionStorage.getItem(name))
            return null;
        return window.sessionStorage.getItem(name);
    }
    isLogged() {
        if (!window.sessionStorage.getItem("Authorization"))
            return false;
        return true;
    }
    Logout() {
        window.sessionStorage.removeItem("Authorization");
    }
    Redirect(path) {
        this.router.navigate([path]);
    }
    Download(pkg, func = '') {
        if (func == '')
            return this.http.get(this.default_url + '/' + pkg, { responseType: 'blob' });
        else
            return this.http.get(this.default_url + '/' + pkg + '/' + func, { responseType: 'blob' });
    }
    Upload(pkg, uploadData) {
        return this.http.post(this.default_url + '/' + pkg, uploadData, { reportProgress: true, observe: 'events' });
    }
    FormatResponse(result) {
        return new _classes_pkg_response__WEBPACK_IMPORTED_MODULE_0__.PkgResponse(result);
    }
    SetError(_error) {
        this.error = _error;
        this.OnError.emit(this.error);
    }
    ShowDeleteDialog(record) {
        this.OnShowDeleteDialog.emit(record);
    }
}
CommonsService.ɵfac = function CommonsService_Factory(t) { return new (t || CommonsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
CommonsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonsService, factory: CommonsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1493:
/*!**********************************************!*\
  !*** ./src/app/services/customizeheaders.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizeHeaders": () => (/* binding */ CustomizeHeaders)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class CustomizeHeaders {
    constructor() { }
    intercept(req, next) {
        // var jwsTojken = this.service.getToken("Authorization");
        let jwsTojken;
        if (window.sessionStorage.getItem("Authorization")) {
            jwsTojken = window.sessionStorage.getItem("Authorization");
        }
        //with this method i read the authorization token and i write it in a custom header
        let authReq = req.clone();
        if (jwsTojken != null)
            authReq = req.clone({ headers: req.headers.set('Authorization', jwsTojken) });
        var result;
        try {
            result = next.handle(authReq);
            return result;
        }
        catch (error) {
            console.error(error);
            //return the error to the method that called it
            if (error.status === 401) {
                //it means the cookies is expired, i must show the login page
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable["throw"](error);
        }
    }
}
CustomizeHeaders.ɵfac = function CustomizeHeaders_Factory(t) { return new (t || CustomizeHeaders)(); };
CustomizeHeaders.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomizeHeaders, factory: CustomizeHeaders.ɵfac });


/***/ }),

/***/ 6970:
/*!************************************************!*\
  !*** ./src/app/services/role-guard.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuardService": () => (/* binding */ RoleGuardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _classes_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/route */ 5921);
/* harmony import */ var _commons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commons.service */ 3765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);







let RoleGuardService = class RoleGuardService {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    //Call the web api and check if the user has the correct authorization to open this route
    canActivate(route, state) {
        //Transgorm the path in a Route class
        let currentRoute = new _classes_route__WEBPACK_IMPORTED_MODULE_0__.Route();
        if ((route.routeConfig != null) && (route.routeConfig.path != null)) {
            if (route.routeConfig.path.startsWith("be")) {
                currentRoute.Type = "be";
                currentRoute.Func = route.routeConfig.path.substring(3);
            }
            else {
                currentRoute.Func = route.routeConfig.path;
            }
        }
        currentRoute.Package = "page";
        currentRoute.Methods = "GET";
        return this.service.Post("route", "check", currentRoute).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((result) => {
            return this.service.FormatResponse(result).Data;
        }));
    }
};
RoleGuardService.ɵfac = function RoleGuardService_Factory(t) { return new (t || RoleGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_commons_service__WEBPACK_IMPORTED_MODULE_1__.CommonsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
RoleGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RoleGuardService, factory: RoleGuardService.ɵfac, providedIn: 'root' });
RoleGuardService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], RoleGuardService);



/***/ }),

/***/ 2427:
/*!*****************************************************************!*\
  !*** ./src/app/views/Frontend/character/character.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterComponent": () => (/* binding */ CharacterComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_create_character_create_character_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/create-character/create-character.component */ 2778);






function CharacterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Non hai ancora creato un personaggio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CharacterComponent_ng_container_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.BeginCreation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Crea un personaggio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function CharacterComponent_app_create_character_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-create-character", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("stepChanged", function CharacterComponent_app_create_character_1_Template_app_create_character_stepChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.StepChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepCreation", ctx_r1.stepCreation)("races", ctx_r1.races)("classes", ctx_r1.classes)("abilities", ctx_r1.abilities)("skills", ctx_r1.skills)("bundles", ctx_r1.bundles);
} }
class CharacterComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(service, fb) {
        super(service);
        this.fb = fb;
        this.stepCreation = -1;
        this.points = 3000;
        this.scheda = {};
    }
    ngOnInit() {
        this.error = '';
        // this.choices = new Array<SheetElement>();
        this.service.Get("character", "getminecharacters").subscribe((result) => {
            this.records = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        });
    }
    StepChanged(stepCreation) {
        this.stepCreation = stepCreation;
    }
    BeginCreation() {
        this.stepCreation = 0;
        this.service.Get("sheetelement", "getsheetelements?type=race").subscribe((result) => {
            this.races = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        });
        this.service.Get("sheetelement", "getsheetelements?type=class").subscribe((result) => {
            this.classes = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        });
        this.service.Get("sheetelement", "getsheetelements?type=ability").subscribe((result) => {
            this.abilities = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        });
        this.service.Get("sheetelement", "getsheetelements?type=skill").subscribe((result) => {
            this.skills = this.service.FormatResponse(result).Data;
            //Create the form for the abilities
            // let vett: { [key: string]: any; } = {};
            // this.skills.forEach((a: SheetElement) => {
            //   let value = new SheetElementValue()
            //   value.IDSheetElement = a.ID;
            //   value.Value = a.Min;
            //   vett[a.ID.toString()] = [ value.Value, Validators.compose([Validators.required, Validators.min(a.Min), Validators.max(a.Max)]) ];
            // })
            // this.frmGroup = this.fb.group(vett);
        }, (error) => {
            this.HandleError(error);
        });
        this.service.Get("sheetelement", "getsheetelements?type=optionals bundle").subscribe((result) => {
            this.bundles = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        });
    }
    CancelCreation() {
        this.stepCreation = -1;
        // this.choices = new Array<SheetElement>();
    }
    SetForms() {
        // let vett: { [key: string]: any; } = {};
        // switch(this.stepCreation) {
        //   case 2: 
        //     //Create the form for the abilities
        //     this.abilities.forEach((a: SheetElement) => {
        //       let value = new SheetElementValue()
        //       value.IDSheetElement = a.ID;
        //       value.Value = a.Min;
        //       vett[a.ID.toString()] = [ value.Value, Validators.compose([Validators.required, Validators.min(a.Min), Validators.max(a.Max)]) ];
        //     });
        //     this.frmGroup = this.fb.group(vett);
        //     this.CalculatePoints();
        //     break;
        //   case 3:
        //       //Create the form for the abilities
        //       this.skills.forEach((a: SheetElement) => {
        //         let value = new SheetElementValue()
        //         value.IDSheetElement = a.ID;
        //         value.Value = a.Min;
        //         vett[a.ID.toString()] = [ value.Value, Validators.compose([Validators.required, Validators.min(a.Min), Validators.max(a.Max)]) ];
        //       });
        //       this.frmGroup = this.fb.group(vett);
        //       this.CalculatePoints();
        //       break;
        //   case 4:
        //       //Create the form for the abilities
        //       this.bundles.forEach((a: SheetElement) => {
        //         let value = new SheetElementValue()
        //         value.IDSheetElement = a.ID;
        //         value.Value = false;
        //         vett[a.ID.toString()] = [ value.Value ];
        //       });
        //       this.frmGroup = this.fb.group(vett);
        //       this.CalculatePoints();
        //       break;
        // }
    }
    Back() {
        this.stepCreation--;
        // }
        // this.SetForms();
    }
    Select(r) {
        this.stepCreation++;
        this.scheda[r.Name] = r;
        // this.SetForms();
    }
    onSubmit() {
        // if(this.stepCreation == 2) {
        //   //salvo i valori di abilità
        //   this.scheda["abilities"] = {};
        //   this.abilities.forEach((a: SheetElement) => {
        //     this.scheda["abilities"][a.ID.toString()] = this.frmGroup.controls[a.ID.toString()].value;
        //   });
        // }
        // if(this.stepCreation == 3) {
        //   //salvo i valori di skills
        //   this.scheda["skills"] = {};
        //   this.skills.forEach((a: SheetElement) => {
        //     this.scheda["skills"][a.ID.toString()] = this.frmGroup.controls[a.ID.toString()].value;
        //   });
        // }
        // if(this.stepCreation == 4) {
        //   //salvo i valori di skills
        //   this.scheda["bundles"] = {};
        //   this.bundles.forEach((a: SheetElement) => {
        //     if(this.frmGroup.controls[a.ID.toString()].value != null) {
        //       this.scheda["bundles"][a.ID.toString()] = this.frmGroup.controls[a.ID.toString()].value;
        //     }
        //     else {
        //       this.scheda["bundles"][a.ID.toString()] = false;
        //     }
        //   });
        // }
        // this.stepCreation++;
        // this.SetForms();
    }
    ValueChanged(r) {
        // this.CalculatePoints();
    }
    CalculatePoints() {
        // this.error = "";
        // this.points = 3500;
        // this.abilities.forEach((a: SheetElement) => {
        //   if(this.stepCreation == 2) {
        //     if((this.frmGroup.controls[a.ID.toString()].value < a.Min) || (this.frmGroup.controls[a.ID.toString()].value > a.Max)) {
        //       //error
        //       this.error += a.Name + " deve essere compreso tra " + a.Min.toString() + " e " + a.Max.toString() + ", ";
        //     }
        //     this.points -= this.frmGroup.controls[a.ID.toString()].value * this.frmGroup.controls[a.ID.toString()].value * a.Cost;
        //   }
        //   else {
        //     //ricavo i valori dalle abilità salvate
        //     this.points -= this.scheda["abilities"][a.ID.toString()] * this.scheda["abilities"][a.ID.toString()] * a.Cost;
        //   }
        // });
        // if(this.stepCreation >= 3) {
        //   this.skills.forEach((a: SheetElement) => {
        //     if(this.stepCreation == 3) {
        //       if((this.frmGroup.controls[a.ID.toString()].value < a.Min) || (this.frmGroup.controls[a.ID.toString()].value > a.Max)) {
        //         //error
        //         this.error += a.Name + " deve essere compreso tra " + a.Min.toString() + " e " + a.Max.toString() + ", ";
        //       }
        //       this.points -= this.frmGroup.controls[a.ID.toString()].value * this.frmGroup.controls[a.ID.toString()].value * a.Cost;
        //     }
        //     else {
        //       //ricavo i valori dalle skills salvate
        //       this.points -= this.scheda["skills"][a.ID.toString()] * this.scheda["skills"][a.ID.toString()] * a.Cost;
        //     }
        //   });
        // }
        // if(this.stepCreation >= 4) {
        //   this.bundles.forEach((a: SheetElement) => {
        //     if(this.frmGroup.controls[a.ID.toString()].value) {
        //       this.points -= a.Cost;
        //     }
        //   });
        // }
        // if(this.points < 0) {
        //   this.error += "Troppi punti spesi!, ";
        // }
    }
}
CharacterComponent.ɵfac = function CharacterComponent_Factory(t) { return new (t || CharacterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_1__.CommonsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
CharacterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CharacterComponent, selectors: [["app-character"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "stepCreation", "races", "classes", "abilities", "skills", "bundles", "stepChanged", 4, "ngIf"], [1, "btn", 3, "click"], [3, "stepCreation", "races", "classes", "abilities", "skills", "bundles", "stepChanged"]], template: function CharacterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CharacterComponent_ng_container_0_Template, 5, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CharacterComponent_app_create_character_1_Template, 1, 6, "app-create-character", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.records == null && ctx.stepCreation == -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.stepCreation > -1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_create_character_create_character_component__WEBPACK_IMPORTED_MODULE_2__.CreateCharacterComponent], styles: [".grid-skills[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  max-height: 500px;\n  overflow: auto;\n}\n.grid-skills[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQUk7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FBRVIiLCJmaWxlIjoiY2hhcmFjdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtc2tpbGxzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC5idXR0b25zIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3989:
/*!**********************************************************!*\
  !*** ./src/app/views/characters/characters.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharactersComponent": () => (/* binding */ CharactersComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dialog/dialog.component */ 9509);






function CharactersComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CharactersComponent_tr_16_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const r_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.Edit(r_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CharactersComponent_tr_16_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const r_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.OpenDeleteDialog(r_r2.ID, "user", "delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r2.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r2.Icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r2.Surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r2.Background);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r2.User.Username);
} }
function CharactersComponent_app_dialog_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-dialog", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancelClick", function CharactersComponent_app_dialog_17_Template_app_dialog_cancelClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.CancelDialogClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Edit Character")("dialogType", ctx_r1.dialogType);
} }
class CharactersComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(service) { super(service); }
    ngOnInit() {
        this.service.Get("character", "getcharacters").subscribe((result) => {
            this.records = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        }, () => {
            return this.records;
        });
    }
    Edit(character) {
        this.selectedRecord = character;
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Edit;
    }
}
CharactersComponent.ɵfac = function CharactersComponent_Factory(t) { return new (t || CharactersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_2__.CommonsService)); };
CharactersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CharactersComponent, selectors: [["app-characters"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 2, consts: [["id", "dati"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "title", "dialogType", "cancelClick", 4, "ngIf"], [1, "btn-warning", 3, "click"], [1, "btn-error", "ml-1", 3, "click"], [3, "title", "dialogType", "cancelClick"]], template: function CharactersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Surname");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, CharactersComponent_tr_16_Template, 16, 5, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, CharactersComponent_app_dialog_17_Template, 1, 2, "app-dialog", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.records);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dialogType != 99 && ctx.dialogType != 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DialogComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyYWN0ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9600:
/*!**********************************************************************!*\
  !*** ./src/app/views/component-editor/component-editor.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentEditorComponent": () => (/* binding */ ComponentEditorComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/data-table */ 7326);
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var src_app_classes_editor_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/editor-element */ 1139);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/table/table.component */ 9767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_block_editor_block_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/block-editor/block-editor.component */ 6740);









function ComponentEditorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Editor avanzato");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "app-block-editor", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onsavepage", function ComponentEditorComponent_div_1_Template_app_block_editor_onsavepage_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r1.SavedDialogClick($event); })("oncanceledit", function ComponentEditorComponent_div_1_Template_app_block_editor_oncanceledit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.CancelDialogClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("element", ctx_r0.selectedRecord)("routes", ctx_r0.routes);
} }
class ComponentEditorComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
    constructor(service) { super(service); }
    ngOnInit() {
        this.service.Get("usertype", "getusertypes").subscribe((result) => {
            this.userTypes = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        });
        this.service.Get("route", "getroutesfiltered?package=page").subscribe((result) => {
            let data = this.service.FormatResponse(result);
            this.routes = data.Data;
        }, (error) => {
            this.HandleError(error);
        });
        this.service.Get("component", "getcomponents?page=" + this.page).subscribe((result) => {
            // this.records = this.service.FormatResponse(result).Data;
            this.table = new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataTable();
            this.table.Columns = new Array();
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("IDElement", "string", "Name"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Type", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Route.Path", "string", "Route"));
            for (let i = 0; i < this.userTypes.length; i++) {
                this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Route.Permissions[" + i.toString() + "].Enabled", "bool", this.userTypes[i].Description));
            }
            this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
            this.table.AddButtonText = 'Add Component';
            this.table.Rows = this.service.FormatResponse(result).Data;
            console.log(this.table.Rows);
        }, (error) => {
            this.HandleError(error);
        });
    }
    Edit(id) {
        this.selectedRecord = id;
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Edit;
    }
    AddElement() {
        this.selectedRecord = new src_app_classes_editor_element__WEBPACK_IMPORTED_MODULE_2__.EditorElement();
        this.selectedRecord.Childrens = new Array();
        this.selectedRecord.Type = "main";
        this.selectedRecord.VerticalOrientation = true;
        this.selectedRecord.IDParent = -1;
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Add;
    }
    SavedDialogClick($event) {
        if (this.dialogType == src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Add) {
            this.service.Post("component", "add", $event).subscribe((result) => {
                let res = this.service.FormatResponse(result).Data;
                if (res) {
                    this.CancelDialogClick();
                    location.reload();
                }
            });
        }
        else if (this.dialogType == src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Edit) {
            this.service.Post("component", "update", $event).subscribe((result) => {
                let res = this.service.FormatResponse(result).Data;
                if (res) {
                    this.CancelDialogClick();
                    location.reload();
                }
            });
        }
    }
    SavePage(f) {
        this.service.Post("component", "add", f).subscribe((result) => {
        });
    }
}
ComponentEditorComponent.ɵfac = function ComponentEditorComponent_Factory(t) { return new (t || ComponentEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__.CommonsService)); };
ComponentEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ComponentEditorComponent, selectors: [["app-component-editor"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "table", "edited", "deleted", "added"], ["class", "div-editor", 4, "ngIf"], [1, "div-editor"], [3, "element", "routes", "onsavepage", "oncanceledit"]], template: function ComponentEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("edited", function ComponentEditorComponent_Template_app_table_edited_0_listener($event) { return ctx.Edit($event); })("deleted", function ComponentEditorComponent_Template_app_table_deleted_0_listener($event) { return ctx.OpenDeleteDialog($event.ID, "component", "delete"); })("added", function ComponentEditorComponent_Template_app_table_added_0_listener() { return ctx.AddElement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ComponentEditorComponent_div_1_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("table", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedRecord != null);
    } }, directives: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _components_block_editor_block_editor_component__WEBPACK_IMPORTED_MODULE_6__.BlockEditorComponent], styles: [".div-editor[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6ImNvbXBvbmVudC1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LWVkaXRvciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 4947:
/*!******************************************************!*\
  !*** ./src/app/views/database/database.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseComponent": () => (/* binding */ DatabaseComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_tree_node_tree_node_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tree-node/tree-node.component */ 1658);





function DatabaseComponent_app_tree_node_2_app_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-tree-node", 12);
} if (rf & 2) {
    const t_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", t_r3.TABLE_NAME);
} }
function DatabaseComponent_app_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-tree-node", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("expanded", function DatabaseComponent_app_tree_node_2_Template_app_tree_node_expanded_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const d_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.Expanded(d_r1.Database); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DatabaseComponent_app_tree_node_2_app_tree_node_2_Template, 1, 1, "app-tree-node", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", d_r1.Database);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.tables);
} }
class DatabaseComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(service) { super(service); }
    ngOnInit() {
        this.service.Get("dbapi", "getdatabases").subscribe((result) => {
            this.records = this.service.FormatResponse(result).Data;
            this.records.forEach((r) => {
                r.Database = atob(r.Database);
            });
        }, (error) => {
            this.HandleError(error);
        });
    }
    Expanded($event) {
        this.service.Get("dbapi", "gettables?db=" + $event).subscribe((result) => {
            this.tables = this.service.FormatResponse(result).Data;
            this.tables.forEach((t) => {
                t.ENGINE = atob(t.ENGINE);
                t.ROW_FORMAT = atob(t.ROW_FORMAT);
                t.TABLE_CATALOG = atob(t.TABLE_CATALOG);
                t.TABLE_COLLATION = atob(t.TABLE_COLLATION);
                t.TABLE_COMMENT = atob(t.TABLE_COMMENT);
                t.TABLE_NAME = atob(t.TABLE_NAME);
                t.TABLE_SCHEMA = atob(t.TABLE_SCHEMA);
                t.TABLE_TYPE = atob(t.TABLE_TYPE);
                t.TEMPORARY = atob(t.TEMPORARY);
                t.UPDATE_TIME = atob(t.UPDATE_TIME);
            });
            console.log(this.tables);
        }, (error) => {
            this.HandleError(error);
        });
    }
}
DatabaseComponent.ɵfac = function DatabaseComponent_Factory(t) { return new (t || DatabaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_1__.CommonsService)); };
DatabaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DatabaseComponent, selectors: [["app-database"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 1, consts: [[2, "display", "grid", "grid-template-columns", "1fr 9fr", "column-gap", "15px", "heigth", "100%"], ["id", "dati"], [3, "title", "expanded", 4, "ngFor", "ngForOf"], ["id", "table"], ["onclick", "$('#sql-editor').toggle();", 1, "btn-warning"], ["id", "sql-editor"], ["onclick", "ExecuteSql();", 1, "btn", "mt-1"], ["id", "content-editor", 1, "mt-1"], ["id", "table-content", 1, "mt-1"], [3, "title", "expanded"], [1, "table-container", 2, "overflow", "auto"], [3, "title", 4, "ngFor", "ngForOf"], [3, "title"]], template: function DatabaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DatabaseComponent_app_tree_node_2_Template, 3, 2, "app-tree-node", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Execute");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.records);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _components_tree_node_tree_node_component__WEBPACK_IMPORTED_MODULE_2__.TreeNodeComponent], styles: [".table-container[_ngcontent-%COMP%] {\n  max-height: 400px;\n  background: #303030;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFiYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJkYXRhYmFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1jb250YWluZXIge1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 3270:
/*!**********************************************************!*\
  !*** ./src/app/views/equip-type/equip-type.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipTypeComponent": () => (/* binding */ EquipTypeComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dialog/dialog.component */ 9509);
/* harmony import */ var _components_edit_equip_type_edit_equip_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/edit-equip-type/edit-equip-type.component */ 3717);







function EquipTypeComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EquipTypeComponent_tr_8_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const r_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.OpenDeleteDialog(r_r2.ID, "user", "delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](r_r2.Name);
} }
function EquipTypeComponent_app_dialog_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-dialog", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancelClick", function EquipTypeComponent_app_dialog_12_Template_app_dialog_cancelClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.CancelDialogClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-edit-equip-type", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("saved", function EquipTypeComponent_app_dialog_12_Template_app_edit_equip_type_saved_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.SavedDialogClick($event, ctx_r7.dialogType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Edit Equip Type")("dialogType", ctx_r1.dialogType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedEquipType", ctx_r1.selectedRecord);
} }
class EquipTypeComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(service) { super(service); }
    ngOnInit() {
        this.service.Get("equip", "getequiptypes").subscribe((result) => {
            this.records = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        });
    }
    Edit(id) {
        this.selectedRecord = id;
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Edit;
        this.editTitle = "Edit Equip";
    }
    AddEquipType() {
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Add;
        this.editTitle = "Add Equip";
    }
    SavedDialogClick($event, dialogType) {
        this.selectedRecord = $event;
        if (dialogType == src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Add) {
            this.service.Post("equip", "addtype", this.selectedRecord).subscribe((result) => {
                let res = this.service.FormatResponse(result).Data;
                if (res) {
                    this.CancelDialogClick();
                    location.reload();
                }
            });
        }
    }
}
EquipTypeComponent.ɵfac = function EquipTypeComponent_Factory(t) { return new (t || EquipTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_2__.CommonsService)); };
EquipTypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EquipTypeComponent, selectors: [["app-equip-type"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 2, consts: [["id", "dati"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["id", "pagination", 1, "mt-1"], [1, "btn", "btn-primary", 3, "click"], [3, "title", "dialogType", "cancelClick", 4, "ngIf"], [1, "btn-error", "ml-1", 3, "click"], [3, "title", "dialogType", "cancelClick"], [3, "selectedEquipType", "saved"]], template: function EquipTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, EquipTypeComponent_tr_8_Template, 6, 1, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EquipTypeComponent_Template_button_click_10_listener() { return ctx.AddEquipType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Add Equip type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, EquipTypeComponent_app_dialog_12_Template, 2, 3, "app-dialog", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.records);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dialogType != 99 && ctx.dialogType != 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DialogComponent, _components_edit_equip_type_edit_equip_type_component__WEBPACK_IMPORTED_MODULE_4__.EditEquipTypeComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcXVpcC10eXBlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 614:
/*!************************************************!*\
  !*** ./src/app/views/equip/equip.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipComponent": () => (/* binding */ EquipComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/data-table */ 7326);
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var src_app_components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tab/tab.component */ 3385);
/* harmony import */ var src_app_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/tabs/tabs.component */ 9450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/table/table.component */ 9767);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dialog/dialog.component */ 9509);
/* harmony import */ var _components_edit_equip_edit_equip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/edit-equip/edit-equip.component */ 5631);













function EquipComponent_app_tab_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-tab", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "app-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("edited", function EquipComponent_app_tab_1_Template_app_table_edited_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r3.Edit($event); })("deleted", function EquipComponent_app_tab_1_Template_app_table_deleted_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r5.OpenDeleteDialog($event.ID, "equipment", "delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", t_r2.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("table", ctx_r0.table);
} }
function EquipComponent_app_dialog_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-dialog", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cancelClick", function EquipComponent_app_dialog_2_Template_app_dialog_cancelClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r6.CancelDialogClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "app-edit-equip", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("saved", function EquipComponent_app_dialog_2_Template_app_edit_equip_saved_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r8.SavedDialogClick($event, ctx_r8.dialogType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", ctx_r1.editTitle)("dialogType", ctx_r1.dialogType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("selectedEquip", ctx_r1.selectedRecord)("equipTypes", ctx_r1.equipTypes);
} }
class EquipComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(service) { super(service); }
    ngOnInit() {
        this.records = new Array();
        this.service.Get("equip", "getequiptypes").subscribe((result) => {
            this.equipTypes = this.service.FormatResponse(result).Data;
            let t = new src_app_components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__.TabComponent(new src_app_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__.TabsComponent());
            t.title = this.equipTypes[0].Name;
            this.SelectedTab(t);
        }, (error) => {
            this.HandleError(error);
        });
    }
    Edit(id) {
        this.selectedRecord = id;
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Edit;
        this.editTitle = "Edit Equip";
    }
    AddEquip() {
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Add;
        this.editTitle = "Add Equip";
    }
    SavedDialogClick($event, dialogType) {
        if (dialogType == src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Add) {
            this.service.Post("equip", "add", $event).subscribe((result) => {
                let res = this.service.FormatResponse(result).Data;
                if (res) {
                    this.CancelDialogClick();
                    location.reload();
                }
            });
        }
        else if (dialogType == src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Edit) {
            this.service.Post("equip", "update", $event).subscribe((result) => {
                let res = this.service.FormatResponse(result).Data;
                if (res) {
                    this.CancelDialogClick();
                    location.reload();
                }
            });
        }
    }
    SelectedTab($event) {
        console.log($event);
        this.service.Get("equip", "getequip?type=" + $event.title).subscribe((equipResponse) => {
            this.table = new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataTable();
            this.table.Columns = new Array();
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Icon", "image"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Name", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Description", "html"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Price", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Size", "string"));
            this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
            this.table.AddButtonText = 'Add Equipment';
            this.table.Rows = this.service.FormatResponse(equipResponse).Data;
        }, (error) => {
            this.HandleError(error);
        });
    }
}
EquipComponent.ɵfac = function EquipComponent_Factory(t) { return new (t || EquipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_5__.CommonsService)); };
EquipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: EquipComponent, selectors: [["app-equip"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[3, "selectedtab"], [3, "title", 4, "ngFor", "ngForOf"], [3, "title", "dialogType", "cancelClick", 4, "ngIf"], [3, "title"], [1, "mt-1"], [3, "table", "edited", "deleted"], [3, "title", "dialogType", "cancelClick"], [3, "selectedEquip", "equipTypes", "saved"]], template: function EquipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-tabs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectedtab", function EquipComponent_Template_app_tabs_selectedtab_0_listener($event) { return ctx.SelectedTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, EquipComponent_app_tab_1_Template, 3, 2, "app-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, EquipComponent_app_dialog_2_Template, 2, 4, "app-dialog", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.equipTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.dialogType != 99 && ctx.dialogType != 2);
    } }, directives: [src_app_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__.TabsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, src_app_components_tab_tab_component__WEBPACK_IMPORTED_MODULE_3__.TabComponent, _components_table_table_component__WEBPACK_IMPORTED_MODULE_6__.TableComponent, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__.DialogComponent, _components_edit_equip_edit_equip_component__WEBPACK_IMPORTED_MODULE_8__.EditEquipComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcXVpcC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 932:
/*!************************************************!*\
  !*** ./src/app/views/forum/forum.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForumComponent": () => (/* binding */ ForumComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/data-table */ 7326);
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var src_app_classes_topic_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/topic-message */ 5554);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/table/table.component */ 9767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form-control/form-control.component */ 7175);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dialog/dialog.component */ 9509);
/* harmony import */ var _components_edit_topic_edit_topic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/edit-topic/edit-topic.component */ 6871);













function ForumComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", m_r3.Message, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Posted by ", m_r3.Author.Username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 3, m_r3.EditDate, "dd-MM-yyyy - HH:mm:ss"));
} }
function ForumComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ForumComponent_div_1_div_1_Template, 12, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function ForumComponent_div_1_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r4.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.selectedRecord.Messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.frmGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Post Message")("controlName", "msg")("controlType", 3)("frmGroup", ctx_r0.frmGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r0.frmGroup.invalid);
} }
function ForumComponent_app_dialog_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-dialog", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("cancelClick", function ForumComponent_app_dialog_2_Template_app_dialog_cancelClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r6.CancelDialogClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "app-edit-topic", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("saved", function ForumComponent_app_dialog_2_Template_app_edit_topic_saved_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r8.SavedDialogClick($event, ctx_r8.dialogType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Edit Topic")("dialogType", ctx_r1.dialogType);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("selectedTopic", ctx_r1.selectedRecord);
} }
class ForumComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
    constructor(service, fb) {
        super(service);
        this.fb = fb;
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
        this.service.Get("forum", "getopics").subscribe((result) => {
            // this.records = this.service.FormatResponse(result).Data;
            this.table = new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataTable();
            this.table.Columns = new Array();
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Icon", "image"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Title", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Author.Username", "string", "Author"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Closed", "bool"));
            this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
            this.table.AddButtonText = 'Add Topic';
            this.table.Rows = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        });
    }
    createSignupForm() {
        let vett = {};
        vett['msg'] = ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required])];
        var resullt = this.fb.group(vett);
        return resullt;
    }
    Edit(id) {
        this.selectedRecord = id;
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Edit;
        this.editTitle = "Edit Equip";
    }
    AddTopic() {
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Add;
        this.editTitle = "Add Equip";
    }
    SavedDialogClick($event, dialogType) {
        if (dialogType == src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Add) {
            this.service.Post("forum", "add", $event).subscribe((result) => {
                let res = this.service.FormatResponse(result).Data;
                if (res) {
                    this.CancelDialogClick();
                    location.reload();
                }
            });
        }
        else if (dialogType == src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Edit) {
            this.service.Post("forum", "update", $event).subscribe((result) => {
                let res = this.service.FormatResponse(result).Data;
                if (res) {
                    this.CancelDialogClick();
                    location.reload();
                }
            });
        }
    }
    OpenTopic($event) {
        $event.Open = !$event.Open;
        if ($event.Open) {
            this.service.Get("forum", "getopic?id=" + $event.ID).subscribe((result) => {
                $event.Messages = this.service.FormatResponse(result).Data;
                this.selectedRecord = $event;
            }, (error) => {
                this.HandleError(error);
            });
        }
        else {
            this.selectedRecord = null;
        }
    }
    onSubmit() {
        let m = new src_app_classes_topic_message__WEBPACK_IMPORTED_MODULE_2__.TopicMessage();
        m.Message = this.frmGroup.controls['msg'].value;
        m.IDParent = this.selectedRecord.ID;
        this.frmGroup.reset();
        this.service.Post("forum", "addmessage", m).subscribe((result) => {
        }, (error) => {
            this.HandleError(error);
        });
    }
}
ForumComponent.ɵfac = function ForumComponent_Factory(t) { return new (t || ForumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__.CommonsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder)); };
ForumComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ForumComponent, selectors: [["app-forum"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [[3, "table", "edited", "deleted", "added", "rowselected"], ["class", "mt-1 post-message", 4, "ngIf"], [3, "title", "dialogType", "cancelClick", 4, "ngIf"], [1, "mt-1", "post-message"], ["class", "message", 4, "ngFor", "ngForOf"], ["method", "post", 1, "grid-1", "mt-1", 3, "formGroup", "ngSubmit"], [3, "label", "controlName", "controlType", "frmGroup"], ["type", "submit", 1, "btn", "unselectable", "mt-1", 3, "disabled"], [1, "message"], [3, "innerHTML"], [1, "date"], [1, "ml-1"], [1, "btn-warning"], [1, "btn-error", "ml-1"], [3, "title", "dialogType", "cancelClick"], [3, "selectedTopic", "saved"]], template: function ForumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "app-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("edited", function ForumComponent_Template_app_table_edited_0_listener($event) { return ctx.Edit($event); })("deleted", function ForumComponent_Template_app_table_deleted_0_listener($event) { return ctx.OpenDeleteDialog($event.ID, "forum", "delete"); })("added", function ForumComponent_Template_app_table_added_0_listener() { return ctx.AddTopic(); })("rowselected", function ForumComponent_Template_app_table_rowselected_0_listener($event) { return ctx.OpenTopic($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ForumComponent_div_1_Template, 6, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ForumComponent_app_dialog_2_Template, 2, 3, "app-dialog", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("table", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.selectedRecord != null && ctx.selectedRecord.Open);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.dialogType != 99 && ctx.dialogType != 2);
    } }, directives: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _components_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_6__.FormControlComponent, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__.DialogComponent, _components_edit_topic_edit_topic_component__WEBPACK_IMPORTED_MODULE_8__.EditTopicComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".post-message[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  border-radius: 2.5px;\n  padding: 5px;\n}\n\n.message[_ngcontent-%COMP%] {\n  display: grid;\n  border: 1px solid white;\n  padding: 5px;\n}\n\n.message[_ngcontent-%COMP%]:hover {\n  background-color: orange;\n  color: black;\n}\n\n.message[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcnVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFESTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtBQUdSOztBQURJO0VBQ0ksaUJBQUE7QUFHUiIsImZpbGUiOiJmb3J1bS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LW1lc3NhZ2Uge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyLjVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4ubWVzc2FnZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLmRhdGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 5475:
/*!**************************************************!*\
  !*** ./src/app/views/guilds/guilds.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuildsComponent": () => (/* binding */ GuildsComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/data-table */ 7326);
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/table/table.component */ 9767);






class GuildsComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(service) { super(service); }
    ngOnInit() {
        this.service.Get("guild", "getguilds").subscribe((result) => {
            this.table = new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataTable();
            this.table.Columns = new Array();
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Name", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Icon", "img"));
            this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
            this.table.AddButtonText = 'Add Guild';
            this.table.Rows = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        });
    }
    Edit(id) {
        this.selectedRecord = id;
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Edit;
    }
    Add() {
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Add;
    }
}
GuildsComponent.ɵfac = function GuildsComponent_Factory(t) { return new (t || GuildsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_3__.CommonsService)); };
GuildsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: GuildsComponent, selectors: [["app-guilds"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "table", "edited", "deleted", "added"]], template: function GuildsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("edited", function GuildsComponent_Template_app_table_edited_0_listener($event) { return ctx.Edit($event); })("deleted", function GuildsComponent_Template_app_table_deleted_0_listener($event) { return ctx.OpenDeleteDialog($event.ID, "forum", "delete"); })("added", function GuildsComponent_Template_app_table_added_0_listener() { return ctx.Add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("table", ctx.table);
    } }, directives: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJndWlsZHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 93:
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_classes_pkg_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/pkg-response */ 4584);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _components_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form-control/form-control.component */ 7175);







class LoginComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(service, fb) {
        super(service);
        this.service = service;
        this.fb = fb;
        this.passType = "password";
    }
    ngOnInit() {
        this.frmGroup = this.createSignupForm();
        if (this.service.isLogged()) {
            let path = "/";
            setTimeout(() => this.service.Redirect(path), 1000);
        }
    }
    createSignupForm() {
        return this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email])],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
        });
    }
    onSubmit() {
        let credentials = "{ \"Username\": \"" + this.frmGroup.controls['username'].value + "\", \"Password\": \"" + this.frmGroup.controls['password'].value + "\" }";
        this.frmGroup.controls['password'].setValue("");
        this.service.Post("user", "login", credentials).subscribe((result) => {
            let pkgRespone = new src_app_classes_pkg_response__WEBPACK_IMPORTED_MODULE_0__.PkgResponse(result);
            let app = pkgRespone.Data;
            this.service.setToken(app);
            location.reload();
        }, (error) => {
            this.HandleError(error);
        }, () => {
            this.service.Redirect("/");
        });
    }
    SetPasswordVisible($event) {
        this.passVisible = !this.passVisible;
        if (this.passVisible) {
            this.passType = "text";
        }
        else {
            this.passType = "password";
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_2__.CommonsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 9, consts: [["method", "post"], [3, "label", "controlName", "controlType", "frmGroup"], ["type", "submit", 1, "btn", "mt-1", "unselectable", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Login in the website");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-form-control", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", "* Mail")("controlName", "username")("controlType", 4)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", "* Password")("controlName", "password")("controlType", 5)("frmGroup", ctx.frmGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.frmGroup.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _components_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_3__.FormControlComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9623:
/*!**********************************************!*\
  !*** ./src/app/views/logs/logs.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsComponent": () => (/* binding */ LogsComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_log_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/log-item */ 6093);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_tree_node_tree_node_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tree-node/tree-node.component */ 1658);






function LogsComponent_app_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-tree-node", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("expanded", function LogsComponent_app_tree_node_2_Template_app_tree_node_expanded_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const d_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.Expanded(d_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", d_r2);
} }
function LogsComponent_ng_container_19_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", l_r5.StackTrace, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function LogsComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LogsComponent_ng_container_19_Template_tr_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const l_r5 = restoredCtx.$implicit; return l_r5.Expanded = !l_r5.Expanded; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, LogsComponent_ng_container_19_tr_15_Template, 3, 1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const l_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 7, l_r5.Data, "HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](l_r5.Package);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](l_r5.Function);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](l_r5.Message);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](l_r5.Info);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](l_r5.Severity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", l_r5.Expanded);
} }
class LogsComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(service) { super(service); }
    ngOnInit() {
        this.service.Get("logs", "getlogs").subscribe((result) => {
            this.records = this.service.FormatResponse(result).Data;
        });
    }
    Expanded(d) {
        this.service.Get("logs", "getlog?name=" + d).subscribe((content) => {
            let app = JSON.parse(this.service.FormatResponse(content).Data);
            this.logItems = new Array();
            app.forEach((element) => {
                let l = new src_app_classes_log_item__WEBPACK_IMPORTED_MODULE_0__.LogItem(element);
                this.logItems.push(l);
            });
        });
    }
}
LogsComponent.ɵfac = function LogsComponent_Factory(t) { return new (t || LogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_2__.CommonsService)); };
LogsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LogsComponent, selectors: [["app-logs"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 2, consts: [[2, "display", "grid", "grid-template-columns", "1fr 9fr", "column-gap", "15px", "heigth", "100%"], ["id", "dati"], [3, "title", "expanded", 4, "ngFor", "ngForOf"], ["id", "table"], [4, "ngFor", "ngForOf"], [3, "title", "expanded"], [3, "click"], [4, "ngIf"], ["colspan", "6"], [2, "text-align", "left", 3, "innerHtml"]], template: function LogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LogsComponent_app_tree_node_2_Template, 1, 1, "app-tree-node", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Function");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Severity");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, LogsComponent_ng_container_19_Template, 16, 10, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.records);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.logItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_tree_node_tree_node_component__WEBPACK_IMPORTED_MODULE_3__.TreeNodeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7312:
/*!********************************************!*\
  !*** ./src/app/views/map/map.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var src_app_classes_location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/location */ 9834);
/* harmony import */ var src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/data-table */ 7326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/table/table.component */ 9767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/dialog/dialog.component */ 9509);
/* harmony import */ var _components_edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-location/edit-location.component */ 3268);










function MapComponent_app_dialog_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-dialog", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cancelClick", function MapComponent_app_dialog_1_Template_app_dialog_cancelClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r1.CancelDialogClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "app-edit-location", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("saved", function MapComponent_app_dialog_1_Template_app_edit_location_saved_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r3.SavedDialogClick($event, ctx_r3.dialogType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx_r0.editTitle)("dialogType", ctx_r0.dialogType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedLocation", ctx_r0.selectedRecord)("parents", ctx_r0.parents);
} }
class MapComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(service) {
        super(service);
        this.selectedParent = -1;
    }
    ngOnInit() {
        this.parents = new Array();
        let l = new src_app_classes_location__WEBPACK_IMPORTED_MODULE_2__.Location();
        l.Name = "No parent";
        l.ID = -1;
        this.parents.push(l);
        this.service.Get("location", "getlocations").subscribe((result) => {
            // this.records = this.service.FormatResponse(result).Data;
            this.table = new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataTable();
            this.table.Columns = new Array();
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataColumn("Name", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataColumn("Description", "html"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataColumn("Image", "image"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataColumn("X", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataColumn("Y", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataColumn("IDParent", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataColumn("HasChat", "bool"));
            this.table.AddButton = this.table.EditButton = this.table.DeleteButton = true;
            this.table.ChildrenRows = true;
            this.table.Rows = this.service.FormatResponse(result).Data;
            this.table.AddButtonText = "Add location";
        }, (error) => {
            this.HandleError(error);
        });
        // this.service.Get("equip", "getequiptypes").subscribe((result: Object) => {
        //   this.parents = this.service.FormatResponse(result).Data;
        // }, (error) => {
        //   this.HandleError(error);
        // });
    }
    Edit(id) {
        this.selectedRecord = id;
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Edit;
        this.editTitle = "Edit Location";
    }
    AddLocation() {
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Add;
        this.editTitle = "Add Location";
    }
    SavedDialogClick($event, dialogType) {
        if (dialogType == src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Add) {
            this.service.Post("location", "add", $event).subscribe((result) => {
                let res = this.service.FormatResponse(result).Data;
                if (res) {
                    this.CancelDialogClick();
                    location.reload();
                }
            });
        }
        else if (dialogType == src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Edit) {
            this.service.Post("location", "update", $event).subscribe((result) => {
                let res = this.service.FormatResponse(result).Data;
                if (res) {
                    this.CancelDialogClick();
                    location.reload();
                }
            });
        }
    }
    Expanded($event) {
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__.CommonsService)); };
MapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "table", "edited", "deleted", "added"], [3, "title", "dialogType", "cancelClick", 4, "ngIf"], [3, "title", "dialogType", "cancelClick"], [3, "selectedLocation", "parents", "saved"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("edited", function MapComponent_Template_app_table_edited_0_listener($event) { return ctx.Edit($event); })("deleted", function MapComponent_Template_app_table_deleted_0_listener($event) { return ctx.OpenDeleteDialog($event.ID, "location", "delete"); })("added", function MapComponent_Template_app_table_added_0_listener() { return ctx.AddLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MapComponent_app_dialog_1_Template, 2, 4, "app-dialog", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("table", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dialogType != 99 && ctx.dialogType != 2);
    } }, directives: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__.DialogComponent, _components_edit_location_edit_location_component__WEBPACK_IMPORTED_MODULE_7__.EditLocationComponent], styles: [".sottocella[_ngcontent-%COMP%]:hover {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHVCQUFBO0FBQVIiLCJmaWxlIjoibWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvdHRvY2VsbGEge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 398:
/*!********************************************************!*\
  !*** ./src/app/views/menu-view/menu-view.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuViewComponent": () => (/* binding */ MenuViewComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/data-table */ 7326);
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var src_app_classes_menu_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/menu-item */ 7075);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/table/table.component */ 9767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/dialog/dialog.component */ 9509);
/* harmony import */ var _components_edit_menu_edit_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-menu/edit-menu.component */ 2666);










function MenuViewComponent_app_dialog_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-dialog", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cancelClick", function MenuViewComponent_app_dialog_1_Template_app_dialog_cancelClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r1.CancelDialogClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "app-edit-menu", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("saved", function MenuViewComponent_app_dialog_1_Template_app_edit_menu_saved_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r3.SavedDialogClick($event, ctx_r3.dialogType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx_r0.editTitle)("dialogType", ctx_r0.dialogType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedMenu", ctx_r0.selectedRecord)("menu", ctx_r0.menuParent)("routes", ctx_r0.routes);
} }
class MenuViewComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
    constructor(service) { super(service); }
    ngOnInit() {
        this.menuParent = new Array();
        let noParent = new src_app_classes_menu_item__WEBPACK_IMPORTED_MODULE_2__.MenuItem();
        noParent.MenuName = "";
        noParent.Name = "Toolbar";
        noParent.ID = -1;
        this.menuParent.push(noParent);
        this.service.Get("usertype", "getusertypes").subscribe((result) => {
            this.userTypes = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        });
        this.service.Get("route", "getroutesfiltered?package=page").subscribe((result) => {
            let data = this.service.FormatResponse(result);
            this.routes = data.Data;
        }, (error) => {
            this.HandleError(error);
        });
        this.service.Get("menu", "getmenunames").subscribe((result) => {
            let pkgResponse = this.service.FormatResponse(result);
            this.table = new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataTable();
            this.table.Columns = new Array();
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("MenuName", "string", "Menu Name"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Name", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("MenuOrder", "string", "Order"));
            for (let i = 0; i < this.userTypes.length; i++) {
                this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Route.Permissions[" + i.toString() + "].Enabled", "bool", this.userTypes[i].Description));
            }
            this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
            this.table.AddButtonText = 'Add Menu Item';
            this.table.Rows = new Array();
            this.table.ChildrenRows = true;
            pkgResponse.Data.forEach((menuName) => {
                console.log(menuName);
                this.service.Get("menu", "getMenu?menuName=" + menuName).subscribe((response) => {
                    this.table.Rows = this.ConcatArray(this.table.Rows, this.service.FormatResponse(response).Data); ///this.table.Rows.concat(this.service.FormatResponse(response).Data, this.table.Rows);
                }, (error) => {
                    this.HandleError(error);
                });
            });
        }, (error) => {
            this.HandleError(error);
        });
    }
    Edit(id) {
        this.selectedRecord = id;
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Edit;
        this.editTitle = "Edit Menu Item";
        this.records[id.MenuName].forEach((m) => {
            this.menuParent.push(m);
        });
    }
    AddMenu() {
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Add;
        this.editTitle = "Add Menu";
    }
    SavedDialogClick($event, dialogType) {
        this.selectedRecord = $event;
        if (dialogType == src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Add) {
            this.service.Post("menu", "add", this.selectedRecord).subscribe((result) => {
                let res = this.service.FormatResponse(result).Data;
                if (res) {
                    this.CancelDialogClick();
                    location.reload();
                }
            }, (error) => {
                this.HandleError(error);
            });
        }
        else {
            this.service.Post("menu", "update", this.selectedRecord).subscribe((result) => {
                let res = this.service.FormatResponse(result).Data;
                if (res) {
                    this.CancelDialogClick();
                    location.reload();
                }
            }, (error) => {
                this.HandleError(error);
            });
        }
    }
    ConcatArray(first, second) {
        for (let i = 0; i < second.length; i++) {
            if (!this.Contain(first, second[i].ID)) {
                first.push(second[i]);
            }
        }
        return first;
    }
    Contain(first, ID) {
        for (let i = 0; i < first.length; i++) {
            if (first[i].ID == ID) {
                return true;
            }
        }
        return false;
    }
}
MenuViewComponent.ɵfac = function MenuViewComponent_Factory(t) { return new (t || MenuViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__.CommonsService)); };
MenuViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: MenuViewComponent, selectors: [["app-menu-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "table", "edited", "deleted", "added"], [3, "title", "dialogType", "cancelClick", 4, "ngIf"], [3, "title", "dialogType", "cancelClick"], [3, "selectedMenu", "menu", "routes", "saved"]], template: function MenuViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("edited", function MenuViewComponent_Template_app_table_edited_0_listener($event) { return ctx.Edit($event); })("deleted", function MenuViewComponent_Template_app_table_deleted_0_listener($event) { return ctx.OpenDeleteDialog($event.ID, "menu", "delete"); })("added", function MenuViewComponent_Template_app_table_added_0_listener() { return ctx.AddMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MenuViewComponent_app_dialog_1_Template, 2, 5, "app-dialog", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("table", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dialogType != 99 && ctx.dialogType != 2);
    } }, directives: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__.DialogComponent, _components_edit_menu_edit_menu_component__WEBPACK_IMPORTED_MODULE_7__.EditMenuComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5615:
/*!**************************************************!*\
  !*** ./src/app/views/routes/routes.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesComponent": () => (/* binding */ RoutesComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var src_app_classes_page_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/page-button */ 7524);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/data-table */ 7326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/table/table.component */ 9767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/dialog/dialog.component */ 9509);
/* harmony import */ var _components_edit_route_edit_route_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-route/edit-route.component */ 809);










function RoutesComponent_app_dialog_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-dialog", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cancelClick", function RoutesComponent_app_dialog_1_Template_app_dialog_cancelClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r1.CancelDialogClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "app-edit-route", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("saved", function RoutesComponent_app_dialog_1_Template_app_edit_route_saved_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r3.SavedDialogClick($event, ctx_r3.dialogType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx_r0.editTitle)("dialogType", ctx_r0.dialogType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedRoute", ctx_r0.selectedRecord)("userTypes", ctx_r0.userTypes);
} }
class RoutesComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(service) { super(service); }
    ngOnInit() {
        this.service.Get("usertype", "getusertypes").subscribe((result) => {
            this.userTypes = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        });
        this.Load();
    }
    NextPage(_page) {
        this.page = _page;
        this.Load();
    }
    Load() {
        this.service.Get("route", "getroutes?page=" + this.page).subscribe((result) => {
            let data = this.service.FormatResponse(result);
            this.records = data.Data;
            this.table = new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataTable();
            this.table.Columns = new Array();
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataColumn("Package", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataColumn("Func", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataColumn("Type", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataColumn("Path", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataColumn("Methods", "string"));
            for (let i = 0; i < this.userTypes.length; i++) {
                this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_3__.DataColumn("Permissions[" + i.toString() + "].Enabled", "bool", this.userTypes[i].Description));
            }
            this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
            this.table.AddButtonText = 'Add Routes';
            this.table.Rows = data.Data;
            this.table.Pagination = new Array();
            this.pagination = new Array();
            for (let i = 0; i < data.PageCount; i++) {
                let pageButton = new src_app_classes_page_button__WEBPACK_IMPORTED_MODULE_1__.PageButton();
                pageButton.Text = i.toString();
                pageButton.Active = (i == data.Page);
                this.pagination.push(pageButton);
                this.table.Pagination.push(pageButton);
            }
            this.table.ShowFilter = true;
        }, (error) => {
            this.HandleError(error);
        });
    }
    Edit(id) {
        this.selectedRecord = id;
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Edit;
        this.editTitle = "Edit Route";
    }
    AddRoute() {
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Add;
        this.editTitle = "Add Route";
    }
    SavedDialogClick($event, dialogType) {
        this.selectedRecord = $event;
        if (dialogType == src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_0__.DialogType.Add) {
            this.service.Post("route", "add", this.selectedRecord).subscribe((result) => {
                let res = this.service.FormatResponse(result).Data;
                if (res) {
                    this.CancelDialogClick();
                    location.reload();
                }
            });
        }
        else {
            this.service.Post("route", "update", this.selectedRecord).subscribe((result) => {
                let res = this.service.FormatResponse(result).Data;
                if (res) {
                    this.CancelDialogClick();
                    location.reload();
                }
            });
        }
    }
}
RoutesComponent.ɵfac = function RoutesComponent_Factory(t) { return new (t || RoutesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__.CommonsService)); };
RoutesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: RoutesComponent, selectors: [["app-routes"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "table", "edited", "deleted", "added", "pagechanged"], [3, "title", "dialogType", "cancelClick", 4, "ngIf"], [3, "title", "dialogType", "cancelClick"], [3, "selectedRoute", "userTypes", "saved"]], template: function RoutesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("edited", function RoutesComponent_Template_app_table_edited_0_listener($event) { return ctx.Edit($event); })("deleted", function RoutesComponent_Template_app_table_deleted_0_listener($event) { return ctx.OpenDeleteDialog($event.ID, "route", "delete"); })("added", function RoutesComponent_Template_app_table_added_0_listener() { return ctx.AddRoute(); })("pagechanged", function RoutesComponent_Template_app_table_pagechanged_0_listener($event) { return ctx.NextPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, RoutesComponent_app_dialog_1_Template, 2, 4, "app-dialog", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("table", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dialogType != 99 && ctx.dialogType != 2);
    } }, directives: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__.DialogComponent, _components_edit_route_edit_route_component__WEBPACK_IMPORTED_MODULE_7__.EditRouteComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3V0ZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9940:
/*!**********************************************************************!*\
  !*** ./src/app/views/sheet-management/sheet-management.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SheetManagementComponent": () => (/* binding */ SheetManagementComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/data-table */ 7326);
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var src_app_classes_dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/dictionary */ 5709);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/table/table.component */ 9767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/dialog/dialog.component */ 9509);
/* harmony import */ var _components_edit_sheet_element_edit_sheet_element_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-sheet-element/edit-sheet-element.component */ 5550);










function SheetManagementComponent_app_dialog_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-dialog", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cancelClick", function SheetManagementComponent_app_dialog_1_Template_app_dialog_cancelClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r1.CancelDialogClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "app-edit-sheet-element", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("saved", function SheetManagementComponent_app_dialog_1_Template_app_edit_sheet_element_saved_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r3.SavedDialogClick($event, ctx_r3.dialogType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx_r0.editTitle)("dialogType", ctx_r0.dialogType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedSheetElement", ctx_r0.selectedRecord)("elementTypes", ctx_r0.elementTypes)("elements", ctx_r0.records)("selectedElements", ctx_r0.selectedElements);
} }
class SheetManagementComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
    constructor(service) { super(service); }
    ngOnInit() {
        this.visible = new src_app_classes_dictionary__WEBPACK_IMPORTED_MODULE_2__.Dictionary();
        this.selectedElements = {};
        this.service.Get("sheetelement", "getsheetelementypes").subscribe((result) => {
            this.elementTypes = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        });
        this.service.Get("sheetelement", "getsheetelementstable").subscribe((result) => {
            this.records = this.service.FormatResponse(result).Data;
            let fields = Object.getOwnPropertyNames(this.records);
            let fieldFormatted = new Array();
            fields.forEach((f) => {
                fieldFormatted.push({ Name: f, Childrens: this.records[f].Rows, Fields: this.records[f].Columns });
            });
            this.table = new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataTable();
            this.table.Columns = new Array();
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Name", "string"));
            this.table.EditButton = this.table.DeleteButton = this.table.AddButton = true;
            this.table.AddButtonText = 'Add Sheet Element';
            this.table.Rows = fieldFormatted;
            this.table.ChildrenRows = true;
        }, (error) => {
            this.HandleError(error);
        });
    }
    Edit(id) {
        this.selectedRecord = id;
        console.log(this.selectedRecord);
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Edit;
        this.editTitle = "Edit Sheet Element";
    }
    AddSheetElement() {
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Add;
        this.editTitle = "Add Sheet element";
    }
    SavedDialogClick($event, dialogType) {
        if (dialogType == src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Add) {
            this.service.Post("sheetelement", "add", $event).subscribe((result) => {
                if (this.service.FormatResponse(result).Data) {
                    this.CancelDialogClick();
                    location.reload();
                }
            }, (error) => {
                this.HandleError(error);
            });
        }
        else {
            this.service.Post("sheetelement", "update", $event).subscribe((result) => {
                if (this.service.FormatResponse(result).Data) {
                    this.CancelDialogClick();
                    location.reload();
                }
            }, (error) => {
                this.HandleError(error);
            });
        }
    }
}
SheetManagementComponent.ɵfac = function SheetManagementComponent_Factory(t) { return new (t || SheetManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_4__.CommonsService)); };
SheetManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: SheetManagementComponent, selectors: [["app-sheet-management"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "table", "edited", "deleted", "added"], [3, "title", "dialogType", "cancelClick", 4, "ngIf"], [3, "title", "dialogType", "cancelClick"], [3, "selectedSheetElement", "elementTypes", "elements", "selectedElements", "saved"]], template: function SheetManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("edited", function SheetManagementComponent_Template_app_table_edited_0_listener($event) { return ctx.Edit($event); })("deleted", function SheetManagementComponent_Template_app_table_deleted_0_listener($event) { return ctx.OpenDeleteDialog($event.ID, "sheetelement", "delete"); })("added", function SheetManagementComponent_Template_app_table_added_0_listener() { return ctx.AddSheetElement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SheetManagementComponent_app_dialog_1_Template, 2, 6, "app-dialog", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("table", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dialogType != 99 && ctx.dialogType != 2);
    } }, directives: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__.DialogComponent, _components_edit_sheet_element_edit_sheet_element_component__WEBPACK_IMPORTED_MODULE_7__.EditSheetElementComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGVldC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2668:
/*!**********************************************************!*\
  !*** ./src/app/views/user-types/user-types.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTypesComponent": () => (/* binding */ UserTypesComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/data-table */ 7326);
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/table/table.component */ 9767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/dialog/dialog.component */ 9509);
/* harmony import */ var _components_edit_user_type_edit_user_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/edit-user-type/edit-user-type.component */ 9877);









function UserTypesComponent_app_dialog_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-dialog", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cancelClick", function UserTypesComponent_app_dialog_1_Template_app_dialog_cancelClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r1.CancelDialogClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-edit-user-type", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("saved", function UserTypesComponent_app_dialog_1_Template_app_edit_user_type_saved_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.SavedDialogClick($event, ctx_r3.dialogType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Add User-Type")("dialogType", ctx_r0.dialogType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectedUsertype", ctx_r0.selectedRecord)("error", ctx_r0.error);
} }
class UserTypesComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(service) { super(service); }
    ngOnInit() {
        //Load the users
        this.service.Get("usertype", "getusertypes").subscribe((result) => {
            this.records = this.service.FormatResponse(result).Data;
            this.table = new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataTable();
            this.table.Columns = new Array();
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Description", "string"));
            this.table.DeleteButton = this.table.AddButton = true;
            this.table.AddButtonText = 'Add User Type';
            this.table.Rows = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        }, () => {
            return this.records;
        });
    }
    AddUserType() {
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Add;
    }
    SavedDialogClick($event, dialogType) {
        this.selectedRecord = $event;
        this.service.Post("usertype", "add", this.selectedRecord).subscribe((result) => {
            let res = this.service.FormatResponse(result).Data;
            if (res) {
                this.CancelDialogClick();
                location.reload();
            }
        }, (error) => {
            this.HandleError(error);
        });
    }
}
UserTypesComponent.ɵfac = function UserTypesComponent_Factory(t) { return new (t || UserTypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_3__.CommonsService)); };
UserTypesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UserTypesComponent, selectors: [["app-user-types"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "table", "deleted", "added"], [3, "title", "dialogType", "cancelClick", 4, "ngIf"], [3, "title", "dialogType", "cancelClick"], [3, "selectedUsertype", "error", "saved"]], template: function UserTypesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("deleted", function UserTypesComponent_Template_app_table_deleted_0_listener($event) { return ctx.OpenDeleteDialog($event.ID, "usertype", "delete"); })("added", function UserTypesComponent_Template_app_table_added_0_listener() { return ctx.AddUserType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UserTypesComponent_app_dialog_1_Template, 2, 4, "app-dialog", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("table", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dialogType != 99 && ctx.dialogType != 2);
    } }, directives: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__.DialogComponent, _components_edit_user_type_edit_user_type_component__WEBPACK_IMPORTED_MODULE_6__.EditUserTypeComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXR5cGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7623:
/*!************************************************!*\
  !*** ./src/app/views/users/users.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/data-table */ 7326);
/* harmony import */ var src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/dialog-type */ 1679);
/* harmony import */ var src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/base/base.component */ 9604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/commons.service */ 3765);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/table/table.component */ 9767);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/dialog/dialog.component */ 9509);
/* harmony import */ var _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/edit-user/edit-user.component */ 7887);









function UsersComponent_app_dialog_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-dialog", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cancelClick", function UsersComponent_app_dialog_1_Template_app_dialog_cancelClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r1.CancelDialogClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-edit-user", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("saved", function UsersComponent_app_dialog_1_Template_app_edit_user_saved_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.SavedDialogClick($event, ctx_r3.dialogType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Edit User-Type")("dialogType", ctx_r0.dialogType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectedUsertype", ctx_r0.selectedRecord)("userTypes", ctx_r0.userTypes);
} }
class UsersComponent extends src_app_components_base_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(service) { super(service); }
    ngOnInit() {
        //Load the users
        this.service.Get("user", "loadusers").subscribe((result) => {
            this.records = this.service.FormatResponse(result).Data;
            this.table = new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataTable();
            this.table.Columns = new Array();
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("Username", "string"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("IsPasswordExpired", "bool", "Password expired"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("LastLogin", "date", "Last Login"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("PasswordDuration", "string", "Password duration (in days)"));
            this.table.Columns.push(new src_app_classes_data_table__WEBPACK_IMPORTED_MODULE_0__.DataColumn("UserType.Description", "string", "User type"));
            this.table.EditButton = this.table.DeleteButton = true;
            this.table.Rows = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        }, () => {
            return this.records;
        });
        this.service.Get("usertype", "getusertypes").subscribe((result) => {
            this.userTypes = this.service.FormatResponse(result).Data;
        }, (error) => {
            this.HandleError(error);
        }, () => {
            return this.records;
        });
    }
    Edit(user) {
        this.selectedRecord = user;
        this.dialogType = src_app_classes_dialog_type__WEBPACK_IMPORTED_MODULE_1__.DialogType.Edit;
    }
    SavedDialogClick($event, dialogType) {
        this.selectedRecord = $event;
        this.service.Post("user", "update", this.selectedRecord).subscribe((result) => {
            let res = this.service.FormatResponse(result).Data;
            if (res) {
                this.CancelDialogClick();
                location.reload();
            }
        }, (error) => {
            this.HandleError(error);
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_commons_service__WEBPACK_IMPORTED_MODULE_3__.CommonsService)); };
UsersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[3, "table", "edited", "deleted"], [3, "title", "dialogType", "cancelClick", 4, "ngIf"], [3, "title", "dialogType", "cancelClick"], [3, "selectedUsertype", "userTypes", "saved"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("edited", function UsersComponent_Template_app_table_edited_0_listener($event) { return ctx.Edit($event); })("deleted", function UsersComponent_Template_app_table_deleted_0_listener($event) { return ctx.OpenDeleteDialog($event.ID, "user", "delete"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UsersComponent_app_dialog_1_Template, 2, 4, "app-dialog", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("table", ctx.table);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dialogType != 99 && ctx.dialogType != 2);
    } }, directives: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__.DialogComponent, _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__.EditUserComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map