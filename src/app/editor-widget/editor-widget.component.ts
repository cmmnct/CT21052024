import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Colorpatch } from '../patcheditor/models/colorpatch';
import { ColorpatchComponent } from '../colorpatch/colorpatch.component';
import { FormsModule } from '@angular/forms';
import { RgbaPipe } from '../pipes/rgba.pipe';

@Component({
  selector: 'app-editor-widget',
  standalone: true,
  imports: [ColorpatchComponent, FormsModule, RgbaPipe],
  templateUrl: './editor-widget.component.html',
  styleUrl: './editor-widget.component.css',
})
export class EditorWidgetComponent {
  @Input({ required: true }) patch!: Colorpatch;
  @Input({ required: true }) editState!: Boolean;
  @Output() onCancel = new EventEmitter();
  @Output() onSubmit = new EventEmitter<Colorpatch>();

  editPatch: Colorpatch = new Colorpatch(0, 0, 0, 1, '');

  ngOnChanges (){
    console.log('input changed')
    this.editPatch = new Colorpatch(this.patch.r, this.patch.g, this.patch.b, this.patch.a, this.patch.name);
  }

  rgba():string {
    return `rgba(${this.editPatch.r},${this.editPatch.g},${this.editPatch.b},${this.editPatch.a})`
  }
}
