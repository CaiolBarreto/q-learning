export class DirectionFactory {
  private readonly _greatest: number;

  constructor(greatest: number) {
    this._greatest = greatest;
  }

  chooseDirection = (): string => {
    if (this._greatest === 0) {
      return 'UP';
    } else if (this._greatest === 1) {
      return 'DW';
    } else if (this._greatest === 2) {
      return 'LF';
    }
    return 'RG';
  };
}