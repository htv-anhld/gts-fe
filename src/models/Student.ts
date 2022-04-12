export interface Student {
    id: number; // Identifier uniq
    managementNumber: string; // Name or fullname
    benCertEndDate: string; // Email
    serviceType: string;
    gender: string;
    name: string;
    age?: number;
    dateOfBirth: null | string;
    schoolLevel: number;
    grade: number;
    conservator: string;
    serviceStatus: string;
}
