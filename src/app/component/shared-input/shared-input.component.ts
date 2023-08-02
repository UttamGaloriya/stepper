import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shared-input',
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.scss']
})
export class SharedInputComponent {
  title: any
  @Input() titleName: string = ''
  ngOnInit() {
    this.title = new FormControl({ value: this.titleName, disabled: true })
  }

}
