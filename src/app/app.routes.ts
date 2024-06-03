import { Routes } from '@angular/router';
import { MemoryComponent } from './memory/memory.component';
import { PatcheditorComponent } from './patcheditor/patcheditor.component';

export const routes: Routes = [
    { path: 'memory', component: MemoryComponent },
    { path: 'patcheditor', component: PatcheditorComponent}
];
