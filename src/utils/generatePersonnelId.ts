import { randomBytes } from 'crypto';

export const getJobCode = (jobDesignation: string): string => {
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

  return jobCode + '-' + randomBytes(4).toString('hex').toUpperCase();
};
