import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EditorService } from './editor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  editor: EditorService;
  currentUrl: string;
  title = 'app';

  constructor( editor:EditorService){
    this.editor = editor;
  }

  ngOnInit() {
    console.log('>>> '+this.editor.getHero());
  }
  
}
