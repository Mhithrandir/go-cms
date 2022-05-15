import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BaseComponent } from './components/base/base.component';
import { CommonsService } from './services/commons.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './views/login/login.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CustomViewComponent } from './components/custom-view/custom-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './views/users/users.component';
import { CustomizeHeaders } from './services/customizeheaders';
import { DialogComponent } from './components/dialog/dialog.component';
import { RoutesComponent } from './views/routes/routes.component';
import { UserTypesComponent } from './views/user-types/user-types.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import { MenuViewComponent } from './views/menu-view/menu-view.component';
import { DatabaseComponent } from './views/database/database.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { EditRouteComponent } from './components/edit-route/edit-route.component';
import { EditUserTypeComponent } from './components/edit-user-type/edit-user-type.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditMenuComponent } from './components/edit-menu/edit-menu.component';
import { ComponentEditorComponent } from './views/component-editor/component-editor.component';
import { SheetManagementComponent } from './views/sheet-management/sheet-management.component';
import { EditSheetElementComponent } from './components/edit-sheet-element/edit-sheet-element.component';
import { LogsComponent } from './views/logs/logs.component';
import { CharactersComponent } from './views/characters/characters.component';
import { EquipComponent } from './views/equip/equip.component';
import { EquipTypeComponent } from './views/equip-type/equip-type.component';
import { EditEquipTypeComponent } from './components/edit-equip-type/edit-equip-type.component';
import { EditEquipComponent } from './components/edit-equip/edit-equip.component';
import { ForumComponent } from './views/forum/forum.component';
import { EditTopicComponent } from './components/edit-topic/edit-topic.component';
import { MapComponent } from './views/map/map.component';
import { EditLocationComponent } from './components/edit-location/edit-location.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { ParentfilterPipe } from './pipes/parentfilter.pipe';
import { TableComponent } from './components/table/table.component';
import { GuildsComponent } from './views/guilds/guilds.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { CharacterComponent } from './views/Frontend/character/character.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { EditSkillsComponent } from './components/edit-skills/edit-skills.component';
import { EditBundlesComponent } from './components/edit-bundles/edit-bundles.component';
import { EditCharacterInfoComponent } from './components/edit-character-info/edit-character-info.component';
import { ExpanderComponent } from './components/expander/expander.component';
import { BlockEditorComponent } from './components/block-editor/block-editor.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { IconsComponent } from './components/icons/icons.component';
import { FilterComponent } from './components/filter/filter.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BaseComponent,
    LoginComponent,
    FormControlComponent,
    CustomViewComponent,
    UsersComponent,
    DialogComponent,
    RoutesComponent,
    UserTypesComponent,
    TreeNodeComponent,
    MenuViewComponent,
    DatabaseComponent,
    CodeEditorComponent,
    EditRouteComponent,
    EditUserTypeComponent,
    EditUserComponent,
    EditMenuComponent,
    ComponentEditorComponent,
    SheetManagementComponent,
    EditSheetElementComponent,
    LogsComponent,
    CharactersComponent,
    EquipComponent,
    EquipTypeComponent,
    EditEquipTypeComponent,
    EditEquipComponent,
    ForumComponent,
    EditTopicComponent,
    MapComponent,
    EditLocationComponent,
    TabsComponent,
    TabComponent,
    TypefilterPipe,
    ParentfilterPipe,
    TableComponent,
    GuildsComponent,
    EditComponentComponent,
    CharacterComponent,
    CreateCharacterComponent,
    EditSkillsComponent,
    EditBundlesComponent,
    EditCharacterInfoComponent,
    ExpanderComponent,
    BlockEditorComponent,
    IconsComponent,
    FilterComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [ CommonsService, { provide: HTTP_INTERCEPTORS, useClass: CustomizeHeaders, multi: true }, {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
