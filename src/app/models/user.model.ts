export class User {
  public reports: any = [];
  public myHikes: any = [];
  public photos: any = [];
  public badges: any = [];
  public something: string = 'test'; 
  constructor(
    public uid: string,
    public email: string) {}
}
