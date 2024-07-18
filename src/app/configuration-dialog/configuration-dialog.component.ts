import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-configuration-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  templateUrl: './configuration-dialog.component.html',
  styleUrl: './configuration-dialog.component.scss',
})
export class ConfigurationDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfigurationDialogComponent>) {}
  
}
