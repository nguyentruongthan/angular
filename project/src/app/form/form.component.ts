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
  iconClass = "bi bi-arrow-down rotate";
  InputLoaiVanBan: string = "";
  isDisableClick: boolean = false;
  isViewOptionLoaiVanBan: boolean = false;
  LoaiVanBanSuggests: string[] = ["Vo Hoang", "Nguyen Truong Than", "Nguyen Tran Quan Vu",
    "Le Phan Quoc Vu", "Cao Duc Vinh", "Tran Thi Kim Kieu", "Bui Le Van", "Le Ngoc Thao"];
  LoaiVanBanSuggestsAfter: string[] = this.LoaiVanBanSuggests

  updateSuggest(): void {
    if (this.InputLoaiVanBan == "") {
      this.unviewSuggest();
    } else {
      this.viewSuggest();
    }
    this.LoaiVanBanSuggestsAfter = this.LoaiVanBanSuggests.filter(LoaiVanBan => LoaiVanBan.toLowerCase().includes(this.InputLoaiVanBan.toLowerCase()));
    if (this.LoaiVanBanSuggestsAfter.length == 0) {
      this.LoaiVanBanSuggestsAfter = ["No name found"]
      this.isDisableClick = true;
    } else {
      this.isDisableClick = false;
    }
    
  }
  viewSuggest(): void {
    this.isViewOptionLoaiVanBan = true;
    this.iconClass = "bi bi-arrow-down";
  }
  unviewSuggest(): void {
    this.isViewOptionLoaiVanBan = false;
    this.iconClass = "bi bi-arrow-down rotate";
  }
  clickToOption(LoaiVanBanSuggest: string): void {
    this.InputLoaiVanBan = LoaiVanBanSuggest;
    this.unviewSuggest();
  }
  switchViewSuggest(): void {
    this.isViewOptionLoaiVanBan = !this.isViewOptionLoaiVanBan;
    if (this.isViewOptionLoaiVanBan) {
      this.viewSuggest()
    }else{
      this.unviewSuggest()
    }
  }
}
