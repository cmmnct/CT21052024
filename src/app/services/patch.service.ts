import { Injectable, inject } from '@angular/core';
import { Colorpatch } from '../patcheditor/models/colorpatch';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatchService {
  http: HttpClient = inject(HttpClient);
  url: string = 'https://my-json-server.typicode.com/cmmnct/patchDemo/patches';

  constructor() {}

  patches: Colorpatch[] = [];

  patches$: BehaviorSubject<Colorpatch[]> = new BehaviorSubject(this.patches);

  getPatches(): Colorpatch[] {
    return this.patches;
  }

  getPatches$(): BehaviorSubject<Colorpatch[]> {
    this.http
      .get<Colorpatch[]>(this.url)
      .pipe(
        map(patchArray => patchArray.map(patch => new Colorpatch(patch.r, patch.g, patch.b, patch.a, patch.name, patch.id)))
      )
      .subscribe((patches) => {
        this.patches = patches;
        this.patches$.next(this.patches);
      });
    return this.patches$;
  }

  create(patch: Colorpatch) {
    this.patches.push(patch);
    this.patches$.next(this.patches);
  }

  update(currentPatch: Colorpatch, patch: Colorpatch) {
    this.patches[this.patches.indexOf(currentPatch)] = patch;
    this.patches$.next(this.patches);
  }

  delete(patch: Colorpatch) {
    this.patches.splice(this.patches.indexOf(patch), 1); // state managagement
    // actie richting database
    this.patches$.next(this.patches);
  }
}
