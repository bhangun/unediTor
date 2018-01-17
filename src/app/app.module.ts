import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EditorComponent, EditorService} from './editor';
import { FormComponent } from './form';
import { CodeMirrorDirective } from './codemirror/codemirror.directive';

const routes: Routes = [
  //{path:'',loadChildren:'./editor/editor.module#EditorModule'},
  {path:'editor',component:EditorComponent},
  {path:'form',component:FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,CodeMirrorDirective,
    FormComponent,EditorComponent
  ],
 // schemas: [ NO_ERRORS_SCHEMA],
  imports: [
   RouterModule.forRoot(routes),
    BrowserModule
  ],
 // exports: [CodeMirrorDirective],
  providers: [EditorService],//CodeMirrorDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
