import { Component, OnInit } from '@angular/core';

import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { SidebarList } from '../../../interfaces/sidebar-list.interface';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  list: SidebarList;

  constructor(
    private sidebarService: SidebarService
  ) {
  }

  ngOnInit(): void {
    this.writeList();
  }

  writeList(): void {
    this.list = this.sidebarService.getList();
  }
}
