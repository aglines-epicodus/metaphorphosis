export class User {
  isAdmin: boolean = false;

  constructor(private uid: string, private userName: string) {
  }
}
