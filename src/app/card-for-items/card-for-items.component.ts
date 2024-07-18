import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Item } from '../item';
import { ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-card-for-items',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './card-for-items.component.html',
  styleUrl: './card-for-items.component.scss',
})
export class CardForItemsComponent {
  @Input({ required: true }) items: Array<Item> = [];

  constructor(private toDoListService: ToDoListService) {}

  removeItem(item: any) {
    console.log(item);
    this.toDoListService.removeItem(item.id).subscribe({
      next: (res: any) => {
        console.log(res);
      },
    });
  }
}
