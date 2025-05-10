import * as migration_20250510_220849 from './20250510_220849';
import * as migration_20250510_221552 from './20250510_221552';
import * as migration_20250510_221612_m1 from './20250510_221612_m1';

export const migrations = [
  {
    up: migration_20250510_220849.up,
    down: migration_20250510_220849.down,
    name: '20250510_220849',
  },
  {
    up: migration_20250510_221552.up,
    down: migration_20250510_221552.down,
    name: '20250510_221552',
  },
  {
    up: migration_20250510_221612_m1.up,
    down: migration_20250510_221612_m1.down,
    name: '20250510_221612_m1'
  },
];
