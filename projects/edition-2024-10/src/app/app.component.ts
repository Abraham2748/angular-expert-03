import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from './layout.service';
import { MediaQueriesComponent } from './media-queries/media-queries.component';
import { NoMediaQueriesComponent } from './no-media-queries/no-media-queries.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MediaQueriesComponent, NoMediaQueriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-expert-03';
}
