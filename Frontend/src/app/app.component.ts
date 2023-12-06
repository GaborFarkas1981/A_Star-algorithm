import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NodeGridComponent } from "./node-grid/node-grid.component";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NodeGridComponent]
})
export class AppComponent {
  title = 'A* algorithm';

  constructor(private titleService:Title) {
    this.titleService.setTitle(this.title);
  }
}

