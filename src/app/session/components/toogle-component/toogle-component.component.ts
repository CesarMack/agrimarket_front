import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toogle-component',
  templateUrl: './toogle-component.component.html',
  styleUrls: ['./toogle-component.component.css'],
})
export class ToogleComponentComponent {
  @Input() selectedOption: string | null = null;
  @Output() selectedOptionChange = new EventEmitter<string>();

  selectOption(option: string): void {
    this.selectedOption = option;
    this.selectedOptionChange.emit(option);
  }
}
