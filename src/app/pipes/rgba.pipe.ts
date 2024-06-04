import { Pipe, PipeTransform } from '@angular/core';
import { Colorpatch } from '../patcheditor/models/colorpatch';

@Pipe({
  name: 'rgba',
  standalone: true
})
export class RgbaPipe implements PipeTransform {

  transform(patch: Colorpatch): string {
    return `rgba(${patch.r},${patch.g},${patch.b},${patch.a})`;
  }

}
