import { UserStatus } from 'src/Types/UserTypes';

export class UpdateUserDTO {
  id: number;
  name: string;
  email: string;
  status: UserStatus;
}
