import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ToDoListService } from '../to-do-list.service';
import { CardForItemsComponent } from '../card-for-items/card-for-items.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatIconModule,
    CommonModule,
    MatProgressSpinnerModule,
    CardForItemsComponent,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent implements OnInit, OnDestroy{
  items: Array<any> = [];
  length: number = 0;
  pageSize: number = 0;
  pageIndex: number = 0;
  pageSizeOptions: Array<number> = [5, 10, 15, 20];
  showFirstLastButtons = true;
  loading$?: Observable<boolean> = new Observable<false>();
  private listSubscription?: Subscription;

  constructor(private toDoListService: ToDoListService) {}

  ngOnInit(): void {
    this.listSubscription = this.toDoListService.getList().subscribe({
      next: (items: any) => {
        this.items = items;
        this.length = this.items.length;
        // this.pageSizeOptions.push();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  onAddItem() {}

  onRemoveAll() {}

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  ngOnDestroy(): void {
    this.listSubscription?.unsubscribe();
  }
}
