import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Colorpatch } from './models/colorpatch';
import { ColorpatchComponent } from '../colorpatch/colorpatch.component';
import { EditorWidgetComponent } from '../editor-widget/editor-widget.component';
import { PatchService } from '../services/patch.service';

@Component({
  selector: 'app-patcheditor',
  standalone: true,
  imports: [CommonModule, ColorpatchComponent, EditorWidgetComponent],
  templateUrl: './patcheditor.component.html',
  styleUrl: './patcheditor.component.css',
})
export class PatcheditorComponent implements OnInit {
  patchService = inject(PatchService);

  currentPatch = new Colorpatch(0, 0, 0, 1, 'black');
  editState = false;

  patches: Colorpatch[] = [];

  ngOnInit(): void {
      this.patches =  this.patchService.getPatches()
  }

  onClickDelete(patch: Colorpatch) {
    if (!this.editState) {
      if (confirm('R U sure?'))
      this.patches.splice(this.patches.indexOf(patch), 1);
    }
  }
  onClickEdit(patch: Colorpatch) {
    if (!this.editState) {
      this.editState = true;
      this.currentPatch = patch;
      console.log("edit patch aangeklikt: " + patch.name);
    }
    
    // een edit functie bouwen
    
  }
  onCancelEdit() {
    this.editState = false;
  }
  onSubmitPatch(patch: Colorpatch) {
    this.patches[this.patches.indexOf(this.currentPatch)] = patch;
    this.editState = false;
    this.currentPatch = new Colorpatch(0, 0, 0, 1, '');
  }


}
