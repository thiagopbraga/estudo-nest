import { IsNotEmpty } from 'class-validator';
import { UserStatus } from 'src/Types/UserTypes';

export class UpdateUserStatusDTO {
  @IsNotEmpty()
  status: UserStatus;
}
