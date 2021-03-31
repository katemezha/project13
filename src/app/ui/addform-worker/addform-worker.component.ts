import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { TextMaskModule } from 'angular2-text-mask';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  addForm: FormGroup;
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  phone: number;
  type = 0;
  public mask = ['+','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {}

  ngOnInit(): void {
    this.addForm = new FormGroup(
      {
        name: new FormControl(null, [Validators.required]),
        surname: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [Validators.required]),
        // type: new FormControl(null, [Validators.required])
      }
    )
  }

  onAddWorker() {
    this.addWorker.emit({
      name: this.name,
      surname: this.surname,
      phone: this.phone,
      type: this.type,
    });

  }
}
