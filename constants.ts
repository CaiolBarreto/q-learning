import { Direction } from './types';

// With the walls
export const REWARDS = [
  [-1, -10, -10, -1],
  [-1, -10, -1, -10],
  [-1, -1, -10, -1],
  [-1, -1, -1, -10],
  [-10, -1, -10, -1],
  [10, 10, 10, 10],
]

export const QMATRIX = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [10, 10, 10, 10],
];

export const ALPHA = 0.5;
export const GAMMA = 1;

export const TRAILS: Direction[][][] = [
  [
    ['UP', 'RG'],
    ['DW', 'DW'],
    ['RG', 'RG'],
    ['LF', 'LF'],
    ['RG', 'UP'],
    ['LF', 'LF'],
    ['LF', 'LF'],
    ['UP', 'UP'],
    ['RG', 'RG'],
  ],
  [
    ['UP', 'UP'],
    ['UP', 'UP'],
    ['LF', 'DW'],
    ['LF', 'LF'],
    ['LF', 'UP'],
    ['RG', 'RG'],
  ],
  [
    ['DW', 'DW'],
    ['UP', 'UP'],
    ['RG', 'RG'],
    ['UP', 'UP'],
    ['DW', 'UP'],
    ['LF', 'LF'],
    ['DW', 'DW'],
    ['UP', 'UP'],
    ['RG', 'LF'],
    ['RG', 'RG'],
  ],
  [
    ['UP', 'UP'],
    ['RG', 'RG'],
    ['UP', 'UP'],
  ],
  [
    ['LF', 'LF'],
    ['UP', 'LF'],
    ['UP', 'UP'],
    ['UP', 'UP'],
    ['LF', 'LF'],
    ['DW', 'DW'],
    ['UP', 'UP'],
    ['UP', 'UP'],
    ['UP', 'UP'],
    ['DW', 'DW'],
    ['UP', 'LF'],
    ['DW', 'DW'],
    ['UP', 'LF'],
    ['LF', 'LF'],
    ['RG', 'RG'],
    ['UP', 'UP'],
  ]
]