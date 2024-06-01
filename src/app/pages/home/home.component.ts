import { Component } from '@angular/core';
import { EquipmentListMock } from 'src/app/mocks/equipment-list.mock';
import { EquipmentType } from 'src/app/types/equipment.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public listEquipamentos: EquipmentType[] = [];

  constructor() {
    this.listEquipamentos = EquipmentListMock;
  }

}
