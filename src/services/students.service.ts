import HttpApiService from './api.service';
import { Student } from '../models/Student';
import { StudentPagination } from 'types/student.type';

const CONTACT_ENDPOINT = `/students`;

export class StudentsApi extends HttpApiService {
    //#region Contact
    getContactById = (id: number) => {
        return this.get(`${CONTACT_ENDPOINT}/${id}`);
    };

    getAllContacts = (params: StudentPagination = { offset: 1, limit: 10 }) => {
        const response = this.get(`${CONTACT_ENDPOINT}`, { params });
        return response;
    };

    createContact = (data: Student) => {
        return super.create(`${CONTACT_ENDPOINT}`, data);
    };

    updateContact = (data: Student) => {
        return super.update(`${CONTACT_ENDPOINT}`, data);
    };
    //#endregion Contact
}

export const ContactApiService = new StudentsApi();
