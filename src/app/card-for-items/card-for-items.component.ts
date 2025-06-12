import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TodoItem } from '../todo.model';
import { ToDoListService } from '../to-do-list.service';
import { Observable } from 'rxjs';
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
  @Input({ required: true }) items$: Observable<TodoItem[]> = new Observable();
  @Output() onDeleteItem: EventEmitter<any> = new EventEmitter();

  constructor(private toDoListService: ToDoListService) {}

  removeItem(item: any, index: number) {
    this.toDoListService.removeItem(item.id).subscribe({
      next: (res: any) => {
        this.onDeleteItem.emit({ id: item.id, index: index });
      },
    });
  }
}
