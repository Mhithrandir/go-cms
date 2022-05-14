import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomViewComponent } from './components/custom-view/custom-view.component';
import { RoleGuardService } from './services/role-guard.service';
import { LoginComponent } from './views/login/login.component';
import { RoutesComponent } from './views/routes/routes.component';
import { UserTypesComponent } from './views/user-types/user-types.component';
import { UsersComponent } from './views/users/users.component';
import { MenuViewComponent } from './views/menu-view/menu-view.component';
import { DatabaseComponent } from './views/database/database.component';
import { ComponentEditorComponent } from './views/component-editor/component-editor.component';
import { SheetManagementComponent } from './views/sheet-management/sheet-management.component';
import { LogsComponent } from './views/logs/logs.component';
import { CharactersComponent } from './views/characters/characters.component';
import { EquipTypeComponent } from './views/equip-type/equip-type.component';
import { EquipComponent } from './views/equip/equip.component';
import { ForumComponent } from './views/forum/forum.component';
import { MapComponent } from './views/map/map.component';
import { GuildsComponent } from './views/guilds/guilds.component';
import { CharacterComponent } from './views/Frontend/character/character.component';

const routes: Routes = [
  // { path: 'logout', component: LogOutComponent },
  { path: 'be/users', component: UsersComponent, canActivate: [ RoleGuardService ] },
  { path: 'be/usertypes', component: UserTypesComponent, canActivate: [ RoleGuardService ] },
  { path: 'be/routes', component: RoutesComponent, canActivate: [ RoleGuardService ] },
  { path: 'be/menus', component: MenuViewComponent, canActivate: [ RoleGuardService ] },
  { path: 'be/database', component: DatabaseComponent, canActivate: [ RoleGuardService ] },
  { path: 'be/componenteditor', component: ComponentEditorComponent, canActivate: [ RoleGuardService ] },
  { path: 'be/sheetelement', component: SheetManagementComponent, canActivate: [ RoleGuardService ] },
  { path: 'be/logs', component: LogsComponent, canActivate: [ RoleGuardService ] },
  { path: 'be/characters', component: CharactersComponent, canActivate: [ RoleGuardService ] },
  { path: 'be/equip', component: EquipComponent, canActivate: [ RoleGuardService ] },
  { path: 'be/equiptype', component: EquipTypeComponent, canActivate: [ RoleGuardService ] },
  { path: 'be/forums', component: ForumComponent, canActivate: [ RoleGuardService ] },
  { path: 'be/location', component: MapComponent, canActivate: [ RoleGuardService ] },
  { path: 'be/guilds', component: GuildsComponent, canActivate: [ RoleGuardService ] },
  { path: 'login', component: LoginComponent },
  // { path: 'logout', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CustomViewComponent },
  { path: 'ambientazione', component: CustomViewComponent },
  { path: 'regolamento', component: CustomViewComponent },
  { path: 'guida', component: CustomViewComponent },
  { path: 'infoluoghi', component: CustomViewComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'be/home', component: CustomViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
