export interface IAccount{
    id:number,
    username: string,
    token:string,
    type: string,
    roles: IRoleAccount[]
}


export interface IRoleAccount {
    authority: string
}