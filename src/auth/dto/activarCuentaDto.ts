import { IsString, MinLength } from 'class-validator';

export class ActivarCuentaDto {
  @IsString()
  id: string;

  @IsString()
  @MinLength(8)
  newPassword: string;
}
