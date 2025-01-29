import { Component, inject } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
    selector: 'app-no-media-queries',
    imports: [],
    templateUrl: './no-media-queries.component.html',
    styleUrl: './no-media-queries.component.css'
})
export class NoMediaQueriesComponent {
  layout = inject(LayoutService);
}
