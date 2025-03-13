import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Email {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    to: string;

    @Column({ nullable: true })
    cc: string;

    @Column({ nullable: true })
    bcc: string;

    @Column({ nullable: true })
    subject: string;

    @Column()
    body: string;

    @CreateDateColumn()
    createdAt: Date;
}
