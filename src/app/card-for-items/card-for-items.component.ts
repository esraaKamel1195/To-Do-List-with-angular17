import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() onDeleteItem: EventEmitter<any> = new EventEmitter();

  constructor(private toDoListService: ToDoListService) {}

  removeItem(item: any, index: number) {
    console.log('items', this.items);
    console.log('item', item, 'index', index);

    this.toDoListService.removeItem(item.id).subscribe({
      next: (res: any) => {
        this.onDeleteItem.emit({ id: item.id, index: index });
      },
    });
  }
}
