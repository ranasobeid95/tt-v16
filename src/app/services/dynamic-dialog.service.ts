import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DynamicDialogComponent } from '../components/dynamic-dialog/dynamic-dialog.component';

@Injectable({
  providedIn: 'root',


})
export class DynamicDialogService {
  constructor(private dialog: MatDialog) {}

  showDialog(dynamicComponents$: Observable<any>) {
    this.dialog.open(DynamicDialogComponent, { data: dynamicComponents$ });
  }
}
