import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Item } from '../item';

@Component({
  selector: 'app-card-for-items',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './card-for-items.component.html',
  styleUrl: './card-for-items.component.scss'
})
export class CardForItemsComponent {
  @Input({ required: true }) items: Array<Item> = [];

  constuctor() {}

  removeItem(itemId: number) {}
}
