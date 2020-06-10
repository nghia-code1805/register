export class SignupInfo {
  managerUsername: string;
  managerPassword: string;
  managerName: string;
  role: string[];

  constructor(managerUsername: string, managerPassword: string, managerName: string) {
    this.managerUsername = managerUsername;
    this.managerPassword = managerPassword;
    this.managerName = managerName;
    this.role = ['user'];
  }
}
