import { Component, Inject, Input, OnInit } from '@angular/core';
import { Card } from '../../core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {
    public title = 'Card';

    @Input()
    public card: Card;

    constructor(
        public dialogRef: MatDialogRef<SingleCardComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

        if (data && data.card) {
            this.card = data.card as Card;
        }
    }

    public ngOnInit(): void {

        // do something
    }
}
