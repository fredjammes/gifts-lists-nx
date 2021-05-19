export class Gift {
  public id: string;

  constructor(
    public name: string,
    public description: string = '',
    public url: string = '',
  ) {
  }
}
