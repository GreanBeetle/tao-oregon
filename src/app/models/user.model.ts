export class User {
  public reports: Report[] = [];
  public comments: Comment[] = [];
  public photos: Photo[] = [];
  public hikes: Trail[] = [];
  public badges: Badge[] = []; 
  constructor(
    public name: string,
    public uid: string,
    public email: string) {}
}
