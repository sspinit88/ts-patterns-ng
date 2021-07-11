import { RouterPath } from './router-path.interface';

export interface SidebarList {
  patterns: {
    generative: RouterPath[];
    structural: RouterPath[];
    behavioral: RouterPath[];
  },
}
