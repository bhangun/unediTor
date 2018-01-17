import { CodeMirrorDirective } from './codemirror.directive';
import {ElementRef} from '@angular/core';

describe('CodemirrorDirective', () => {
  it('should create an instance', () => {
    const directive = new CodeMirrorDirective(new ElementRef(''));
    expect(directive).toBeTruthy();
  });
});
