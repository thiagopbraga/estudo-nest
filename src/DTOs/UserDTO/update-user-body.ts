import { UserStatus } from 'src/module/users/Types/UserTypes';

export class UpdateUserDTO {
  id: number;
  name: string;
  email: string;
  status: UserStatus;
}
