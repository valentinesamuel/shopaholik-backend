import { ADMINROLE } from 'src/utils/Types';
import { getJobCode } from 'src/utils/generatePersonnelId';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bycrpyt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  workerID: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ enum: ADMINROLE, nullable: false })
  role: string;

  @BeforeInsert()
  generateUUID() {
    this.workerID = getJobCode(this.role);
  }

  @BeforeInsert()
  async hashPassword() {
    this.password = await bycrpyt.hash(this.password, 10);
  }
}
