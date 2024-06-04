import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Colorpatch } from '../patcheditor/models/colorpatch';
import { RgbaPipe } from '../pipes/rgba.pipe';

@Component({
  selector: 'app-colorpatch',
  standalone: true,
  imports: [RgbaPipe],
  templateUrl: './colorpatch.component.html',
  styleUrl: './colorpatch.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorpatchComponent {

  @Input({ required: true }) patch!: Colorpatch 
  @Input() editState = false;
  @Output() onDeletePatch = new EventEmitter()
  @Output() onEditPatch = new EventEmitter()


}
