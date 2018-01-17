import { Injectable } from '@angular/core';
import { CodeMirrorDirective } from '../codemirror/codemirror.directive';

@Injectable()
export class EditorService {
  code:CodeMirrorDirective;
  title:String;
  constructor() { 
    this.title='bismillah';
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('???? bismillah >>'+this.code.getContent.toString);
  }
  
  getHero():String{
    return this.title;
  }
}