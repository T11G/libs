import { MemberRole } from '../enums';

export interface ISignInDto {
  email: string;
  password: string;
}

export interface ISignUpDto extends ISignInDto {
  firstName: string;
  lastName: string;
  role: MemberRole;
}

export interface ISignInResDto {
  id: string;
  role: MemberRole;
  name: string;
  email: string;
  imgUrl: string;
}
