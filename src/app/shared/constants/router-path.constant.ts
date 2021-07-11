import { GroupOfPatterns } from '../enums/group-of-patterns.enum';
import { MenuGroupEnum } from '../enums/menu-group.enum';

const groupOfPatternsEnum: typeof GroupOfPatterns = GroupOfPatterns;
const menuGroupEnum: typeof MenuGroupEnum = MenuGroupEnum;

export const ROUTER_PATH = {
  patterns: {
    path: 'patterns',
    title: 'Паттерны',
    factory: {
      path: 'factory',
      title: 'Фабрика',
      group: menuGroupEnum.patterns,
      subGroup: groupOfPatternsEnum.generative,
    },
    singleton: {
      path: 'singleton',
      title: 'Одиночка',
      group: menuGroupEnum.patterns,
      subGroup: groupOfPatternsEnum.generative,
    },
    adapter: {
      path: 'adapter',
      title: 'Адаптер',
      group: menuGroupEnum.patterns,
      subGroup: groupOfPatternsEnum.structural,
    },
    observer: {
      path: 'observer',
      title: 'Наблюдатель',
      group: menuGroupEnum.patterns,
      subGroup: groupOfPatternsEnum.behavioral,
    },
    decorator: {
      path: 'decorator',
      title: 'Декоратор ',
      group: menuGroupEnum.patterns,
      subGroup: groupOfPatternsEnum.structural,
    },
  },
  algorithms: {
    path: 'algorithms',
    title: 'algorithms',
    test: {
      path: 'test-singleton',
      title: 'test-Одиночка',
      group: menuGroupEnum.algorithms,
      subGroup: 2,
    }
  },
};

