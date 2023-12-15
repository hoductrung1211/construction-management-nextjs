export interface IEmployee {
    employeeid: number,
    firstname: string,
    lastname: string,
    dateofbirth: string,
    idcard: string,
    gender: boolean,
    
    email: string,
    address: string,
    phone: string,

    userid: string,
    status: string,
}

export const listLabors: IEmployee[] = [];