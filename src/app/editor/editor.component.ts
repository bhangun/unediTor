import { Component, OnInit,ViewChild,ViewChildrenDecorator } from '@angular/core';
import { CodeMirrorDirective } from '../codemirror/codemirror.directive';
import { ViewChildren } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-editor',
 // template: '<codemirror ></codemirror>',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  @ViewChild(CodeMirrorDirective)
  /*set code(c: CodeMirrorDirective) {
    //c.content='zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'; 
  }
  /*selectedPane: string = '';
  shouldShow = true;
  toggle() { this.shouldShow = !this.shouldShow; 
  */
  


  constructor() { 
   // this.code = codemirror;
   
  }

  ngOnInit() {
    
    console.log('???? bismillah >>');
  }

}
