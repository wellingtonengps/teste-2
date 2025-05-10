import * as migration_20250510_214901 from './20250510_214901';

export const migrations = [
  {
    up: migration_20250510_214901.up,
    down: migration_20250510_214901.down,
    name: '20250510_214901'
  },
];
