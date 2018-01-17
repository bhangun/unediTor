import {Directive, ElementRef, EventEmitter, Input,
  OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {EditorFromTextArea, EditorConfiguration, fromTextArea,CodeMirror} from 'codemirror';
import { DOCUMENT} from '@angular/platform-browser';

@Directive({
  selector: 'codemirror'
})

export class CodeMirrorDirective implements OnInit, OnChanges {
  are:any;
  @Input() tag: string;
  @Input() content: string;
  @Input() config: EditorConfiguration = {
    lineNumbers: true,
    mode: 'javascript'
  };
  @Output() onChange = new EventEmitter<{editorInstance: any, changes: any}>();
  editorRef: EditorFromTextArea;

  constructor(private element: ElementRef) {}

  ngOnInit() {
   // const tmp = document.createElement('textarea');
   this.are=this.element.nativeElement.textarea;
   this.are.value = this.content;
   this.editorRef =fromTextArea(this.are, this.config);
   // this.editorRef =fromTextArea(this.element.nativeElement.textarea, this.config);
   // this.editorRef =fromTextArea(tmp, this.config);
    this.editorRef.setValue(this.content);
    this.editorRef.on('change', (cmInstance, event) => this.onChange.emit({editorInstance: cmInstance, changes: event}));
  }

  ngOnChanges(changes: SimpleChanges) {

    if (this.editorRef) {
      if (changes.content) {
        this.editorRef.setValue(this.content);
      }
      if (changes.config) {
        Object.keys(this.config).map(k => this.editorRef.setOption(k, this.config[k]));
      }
    }
  }

  getContent(): string {
    return this.editorRef.getValue();
  }

  setOption(key: string, value: any) {
    this.editorRef.setOption(key, value);
  }

}
