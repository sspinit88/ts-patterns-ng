import { Injectable } from '@angular/core';

import { CloneService } from '../clone.service';

import { ROUTER_PATH } from '../../shared/constants/router-path.constant';
import { RouterPath } from '../../shared/interfaces/router-path.interface';
import { MenuGroupEnum } from '../../shared/enums/menu-group.enum';
import { GroupOfPatterns } from '../../shared/enums/group-of-patterns.enum';
import { SidebarList } from '../../shared/interfaces/sidebar-list.interface';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  pathsObj: typeof ROUTER_PATH = ROUTER_PATH;
  groupEnum: typeof MenuGroupEnum = MenuGroupEnum;
  subGroupEnum: typeof GroupOfPatterns = GroupOfPatterns;

  constructor(
    private cloneService: CloneService,
  ) {
  }

  getList(): SidebarList {
    const unfilteredArray: RouterPath[] = this.getUnfilteredArray(this.pathsObj);

    const generative: RouterPath[] = this.getItemGroup(
      unfilteredArray,
      this.groupEnum.patterns,
      this.subGroupEnum.generative
    );

    const structural: RouterPath[] = this.getItemGroup(
      unfilteredArray,
      this.groupEnum.patterns,
      this.subGroupEnum.structural
    );

    const behavioral: RouterPath[] = this.getItemGroup(
      unfilteredArray,
      this.groupEnum.patterns,
      this.subGroupEnum.behavioral
    );

    function sortItem(array: RouterPath[]): RouterPath[] {
      return array
        .sort(function (a, b): number {
          return a.title > b.title ? 1 : -1;
        });
    }

    return {
      patterns: {
        generative: sortItem(generative),
        structural: sortItem(structural),
        behavioral: sortItem(behavioral),
      },
    };
  }

  getItemGroup(array: RouterPath[], group: number, subGroup: number): RouterPath[] {
    const res: RouterPath[] = [];

    array.forEach(item => {
      if (
        item.group === group
        && item.subGroup === subGroup
      ) {
        res.push(item);
      }
    });

    return res;
  }

  getUnfilteredArray(obj: typeof ROUTER_PATH) {
    const data: any = this.cloneService.simpleClone<typeof ROUTER_PATH>(obj);
    const res: RouterPath[] = [];

    writeRes(data);

    function writeRes(itmObj: any): void {
      for (const key in itmObj) {
        if (typeof itmObj[key] === 'object') {
          if (('group' in itmObj[key])) {
            res.push(itmObj[key]);
          } else {
            writeRes(itmObj[key]);
          }
        }
      }
    }

    return res;
  }

}
