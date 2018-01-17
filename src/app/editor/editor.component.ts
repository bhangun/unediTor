import { Component, ElementRef, EventEmitter, Input,
  OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CodeMirrorDirective } from '../codemirror/codemirror.directive';
import { ViewChildren } from '@angular/core/src/metadata/di';
import {EditorFromTextArea, EditorConfiguration, fromTextArea, CodeMirror} from 'codemirror';

@Component({
  selector: 'app-editor',
 // template: '<codemirror ></codemirror>',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
   content: string;
  config: EditorConfiguration = {
    lineNumbers: true,
    mode: 'javascript'
  };
   // onChange = new EventEmitter<{editorInstance: any, changes: any}>();
   editorRef: EditorFromTextArea;

  constructor(private element: ElementRef) {}

  ngOnInit() {
   this.editorRef = fromTextArea(document.getElementById('te') , this.config);
    // this.editorRef.setValue(this.content);
   // this.editorRef.on('change', null ); // (cmInstance, event) => this.onChange.emit({editorInstance: cmInstance, changes: event}));
  }

  // tslint:disable-next-line:use-life-cycle-interface
  /*ngOnChanges(changes: SimpleChanges) {

    if (this.editorRef) {
      if (changes.content) {
        this.editorRef.setValue(this.content);
      }
      if (changes.config) {
        Object.keys(this.config).map(k => this.editorRef.setOption(k, this.config[k]));
      }
    }
  }
*/
  getContent(): string {
    return this.editorRef.getValue();
  }

  setOption(key: string, value: any) {
    this.editorRef.setOption(key, value);
  }

}
