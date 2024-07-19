import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ToDoListService } from '../to-do-list.service';
import { CardForItemsComponent } from '../card-for-items/card-for-items.component';
import { ConfigurationDialogComponent } from '../configuration-dialog/configuration-dialog.component';
import { Item } from '../item';

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
    MatButtonModule,
    ConfigurationDialogComponent,
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent implements OnInit, OnDestroy, AfterViewInit {
  items: Array<Item> = [];
  length: number = 0;
  pageSize: number = 0;
  pageIndex: number = 0;
  pageSizeOptions: Array<number> = [5, 10, 15, 20];
  showFirstLastButtons = true;
  private listSubscription?: Subscription;
  @ViewChild('addItem', { static: true }) addItem?: ElementRef;
  description: string = '';
  loading: boolean = false;

  constructor(
    private toDoListService: ToDoListService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.getItems();
  }

  getItems() {
    this.listSubscription = this.toDoListService.getList().subscribe({
      next: (res) => {
        this.items = res;
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
      },
    });
  }

  ngAfterViewInit(): void {
    this.description = this.addItem?.nativeElement.textContent;
  }

  onAddItem(description: string) {
    this.loading = true;
    this.toDoListService.setList(description).subscribe({
      next: (result: any) => {
        this.getItems();
        this.loading = false;
      },
      error: (error: Error) => {
        console.log(error);
        this.loading = false;
      },
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog
      .open(ConfigurationDialogComponent, {
        width: '250px',
        enterAnimationDuration,
        exitAnimationDuration,
      })
      .afterClosed()
      .subscribe((response) => (response ? this.onRemoveAll() : ''));
  }

  onRemoveAll() {
    this.loading = true;
    this.toDoListService.removeList().subscribe({
      next: (res: any) => {
        this.items = [];
        this.loading = false;
      },
      error: (err: any) => {
        console.log(err);
        this.loading = false;
      },
    });
  }

  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  ngOnDestroy(): void {
    this.listSubscription?.unsubscribe();
  }
}
