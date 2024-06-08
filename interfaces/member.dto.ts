import { Gender, MemberRole } from '../enums';
import { IGetListDto } from './common.dto';

export interface IMemberResDto {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  gender: Gender;
  address: string;
  dateOfBirth: Date;
  imgUrl: string;
  role: MemberRole;
}

export interface IGetListMemberDto extends IGetListDto {
  // name or email
  keyword?: string;
  gender?: Gender;
  role?: MemberRole;
}
