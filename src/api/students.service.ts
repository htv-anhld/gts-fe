import HttpApiService from './HttpApiService';
import { IStudents } from '../model/students';

const API_BASE = `${process.env.REACT_APP_API_URI}`;

const CONTACT_ENDPOINT = `${API_BASE}/students`;

export class StudentsApi extends HttpApiService {
    //#region Contact
    getContactById = (id: number) => {
        return this.get(`${CONTACT_ENDPOINT}/${id}`);
    };

    getAllContacts = () => {
        const response = this.get(`${CONTACT_ENDPOINT}`);
        return response;
    };

    createContact = (data: IStudents) => {
        return super.create(`${CONTACT_ENDPOINT}`, data);
    };

    updateContact = (data: IStudents) => {
        return super.update(`${CONTACT_ENDPOINT}`, data);
    };
    //#endregion Contact
}

export const ContactApiService = new StudentsApi();
