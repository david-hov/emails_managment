import { IsEmail, IsOptional, IsString } from 'class-validator';

export class SendEmailRequest {
    @IsEmail({}, { message: 'Invalid email address for to' })
    to: string;

    @IsOptional()
    @IsEmail({}, { message: 'Invalid email address for cc' })
    cc?: string;

    @IsOptional()
    @IsEmail({}, { message: 'Invalid email address for bcc' })
    bcc?: string;

    @IsOptional()
    @IsString({ message: 'Subject must be a string' })
    subject: string;

    @IsOptional()
    @IsString({ message: 'Body must be a string' })
    body: string;
}
