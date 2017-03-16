//Include the Input class from the @angular/core library
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  //@Input values will need to be entered, these will become variables.  Also operates as a Decorator
  @Input() quote: any;
  //When Delete Button is clicked, it will return string based on the ID that will will be deleted
  @Output() onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onQuoteDelete() {
    this.onDelete.emit(this.quote.id);
    console.log(`trying to delete ${this.quote.id}`);
  }
}
