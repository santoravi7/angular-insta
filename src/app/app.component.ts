import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  modalRef: BsModalRef;
   constructor(private modalService: BsModalService) {}
  
}


@Component({
  selector: 'modal-content',
  template: ``
})
export class ModalContentComponent {
  title: string;
  constructor(private modalService: BsModalService) {}
}