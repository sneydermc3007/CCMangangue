import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards-documentos',
  templateUrl: './cards-documentos.component.html',
  styleUrl: './cards-documentos.component.scss'
})
export class CardsDocumentosComponent {
  @Input() menu: any[] = [];
  @Input() selectedItem: string = '';
  @Output() selectItem = new EventEmitter<string>();

  onMenuSelect(itemLabel: string) {
    this.selectItem.emit(itemLabel);
  }
}
