import { Injectable } from '@angular/core';
import { Colorpatch } from '../patcheditor/models/colorpatch';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatchService {
  constructor() { }
  
  

  patches: Colorpatch[] = [
    new Colorpatch(0, 0, 0, 1, 'black'),
    new Colorpatch(255, 255, 255, 1, 'white'),
    new Colorpatch(255, 0, 0, 1, 'red'),
    new Colorpatch(0, 255, 0, 1, 'green'),
    new Colorpatch(0, 0, 255, 1, 'blue'),
    new Colorpatch(255, 255, 0, 1, 'yellow'),
    new Colorpatch(255, 0, 255, 1, 'magenta'),
    new Colorpatch(0, 255, 255, 1, 'cyan'),
  ];

  patches$: BehaviorSubject<Colorpatch[]> = new BehaviorSubject(this.patches);

  getPatches(): Colorpatch[]{
    return this.patches;
  }

  getPatches$(): BehaviorSubject<Colorpatch[]>{
    return this.patches$;
  }
}
