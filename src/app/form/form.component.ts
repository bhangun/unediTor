import { Component, OnInit } from '@angular/core';
import { CodeMirrorModule} from 'ngx-codemirror';
import { CodeMirrorDirective} from '../codemirror/codemirror.directive';
import { EditorComponent } from '../editor/index';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  constructor() {
    console.log('cont masuk form');
   }

  ngOnInit() {
    console.log('masuk form');
  }

}
