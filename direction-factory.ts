export class DirectionFactory {
  constructor(
    private readonly _greatest: number,
  ) {
    const chooseDirection = (): string => {
      if (_greatest === 0) {
        return 'UP';
      } else if (_greatest === 1) {
        return 'DW';
      } else if (_greatest === 2) {
        return 'LF';
      }
      return 'RG';
    };
  }
}