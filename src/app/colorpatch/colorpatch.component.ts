import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Colorpatch } from '../patcheditor/models/colorpatch';

@Component({
  selector: 'app-colorpatch',
  standalone: true,
  imports: [],
  templateUrl: './colorpatch.component.html',
  styleUrl: './colorpatch.component.css'
})
export class ColorpatchComponent {

  @Input({ required: true }) patch!: Colorpatch 
  @Input() editState = false;
  @Output() onDeletePatch = new EventEmitter()
  @Output() onEditPatch = new EventEmitter()


}
