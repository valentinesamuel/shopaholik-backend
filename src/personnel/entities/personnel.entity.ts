import { ADMINROLE, JobDesignation } from 'src/utils/Types';
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { randomBytes } from 'crypto';

@Entity()
export class Personnel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  personnelId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  middleName: string;

  @Column()
  dateOfBirth: string;

  @Column()
  dateOfHire: string;

  @Column({ nullable: true })
  profilePicture: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  gender: string;

  @Column({ nullable: true })
  additionalInfo: string;

  @Column({
    enum: [...Object.values(ADMINROLE), ...Object.values(JobDesignation)],
  })
  jobDesignation: string;

  @Column()
  monthlySalary: number;

  @Column()
  guarantorName: string;

  @Column()
  relationshipWithStaff: string;

  @Column()
  guarantorPhone: string;

  @Column()
  guarantorEmail: string;

  @Column()
  guarantorAddress: string;

  @BeforeInsert()
  generateUUID() {
    this.personnelId =
      getJobCode(this.jobDesignation) +
      '-' +
      randomBytes(4).toString('hex').toUpperCase();
  }
}

function getJobCode(jobDesignation: string): string {
  let jobCode: string;

  switch (jobDesignation) {
    case 'FLOOR WORKER':
      jobCode = 'FLK';
      break;
    case 'MANAGER':
      jobCode = 'MNG';
      break;
    case 'SUPERVISOR':
      jobCode = 'SPV';
      break;
    case 'CASHIER':
      jobCode = 'CSH';
      break;
    case 'SECURITY':
      jobCode = 'SEC';
      break;
    case 'JANITOR':
      jobCode = 'JAN';
      break;
    default:
      jobCode = '';
      break;
  }

  return jobCode;
}
