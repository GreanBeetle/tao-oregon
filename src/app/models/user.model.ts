export class User {
  public reports: any = [];
  public myHikes: any = [];
  public photos: any = [];
  public badges: any = []; 
  constructor(
    public uid: string,
    public email: string) {}
}
