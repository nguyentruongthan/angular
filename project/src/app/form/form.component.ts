import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  constructor() { }
  ngOnInit(): void {
  }
  InputLoaiVanBan: string = "";
  isDisableClick: boolean = false;
  isViewOptionLoaiVanBan: boolean = false;
  LoaiVanBanSuggests: string[] = ["Vo Hoang", "Nguyen Truong Than", "Nguyen Tran Quan Vu",
    "Le Phan Quoc Vu", "Cao Duc Vinh"];
  LoaiVanBanSuggestsAfter: string[] = this.LoaiVanBanSuggests

  updateSuggestName(): void {
    if (this.InputLoaiVanBan == "") {
      this.unviewSuggestName();
    } else {
      this.viewSuggestName();
    }
    this.LoaiVanBanSuggestsAfter = this.LoaiVanBanSuggests.filter(LoaiVanBan => LoaiVanBan.toLowerCase().includes(this.InputLoaiVanBan.toLowerCase()));
    if (this.LoaiVanBanSuggestsAfter.length == 0) {
      this.LoaiVanBanSuggestsAfter = ["No name found"]
      this.isDisableClick = true;
    } else {
      this.isDisableClick = false;
    }
    
  }
  viewSuggestName(): void {
    this.isViewOptionLoaiVanBan = true;
  }
  unviewSuggestName(): void {
    this.isViewOptionLoaiVanBan = false;
  }
  clickToOption(LoaiVanBanSuggest: string): void {
    this.InputLoaiVanBan = LoaiVanBanSuggest;
    this.unviewSuggestName();
  }
}
