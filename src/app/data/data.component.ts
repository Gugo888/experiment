import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  @Input()
  limit: number;

  @Output()
  limitReachd = new EventEmitter<number>();

  onInput(param: string) {
    if (param.length > this.limit) {
      this.limitReachd.emit(param.length - this.limit);
    }
  }





  //1* @Input()
  // quesion: string;

  // @Output()
  // yes = new EventEmitter();

  // @Output()
  // no = new EventEmitter();

  // disabled: boolean = false;

  // whenYesClicked() {
  //   this.disable();
  //   this.yes.emit();

  // }

  // whenNoClicked() {
  //   this.disable();
  //   this.no.emit();
  // }

  // disable() {
  //   this.disabled = true;
  // }



}
