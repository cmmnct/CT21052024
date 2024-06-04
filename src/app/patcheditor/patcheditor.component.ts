import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Colorpatch } from './models/colorpatch';
import { ColorpatchComponent } from '../colorpatch/colorpatch.component';
import { EditorWidgetComponent } from '../editor-widget/editor-widget.component';
import { PatchService } from '../services/patch.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patcheditor',
  standalone: true,
  imports: [CommonModule, ColorpatchComponent, EditorWidgetComponent],
  templateUrl: './patcheditor.component.html',
  styleUrl: './patcheditor.component.css',
})
export class PatcheditorComponent implements OnInit {
  patchService = inject(PatchService);

  currentPatch = new Colorpatch(0, 0, 0, 1, '');
  editState = false;

  //patches: Colorpatch[] = [];
  patches$!: Observable<Colorpatch[]>

  ngOnInit(): void {
    //this.patches = this.patchService.getPatches()
    this.patches$ = this.patchService.getPatches$();
  }

  onClickAdd() {
    this.editState = true;
  }

  onClickDelete(patch: Colorpatch) {
    if (!this.editState) {
      if (confirm('R U sure?'))
     this.patchService.delete(patch);
    }
  }
  onClickEdit(patch: Colorpatch) {
    if (!this.editState) {
      this.editState = true;
      this.currentPatch = patch;
      console.log("edit patch aangeklikt: " + patch.name);
    }
  }
  onCancelEdit() {
    this.editState = false;
  }
  onSubmitPatch(patch: Colorpatch) {
    // this.patches[this.patches.indexOf(this.currentPatch)] = patch;
    if (this.currentPatch.name) {
      this.patchService.update(this.currentPatch, patch);
    } else {
      this.patchService.create(patch);
    } 
    this.editState = false;
    this.currentPatch = new Colorpatch(0, 0, 0, 1, '');
  }


}
