

export interface ILabor{
    isSelected: boolean;
    no: number;
    laborCode: string;
    lastName: string;
    firstName: string;
    role: string,
    shift: number
}
export default function Labors({
    labor
}:{
    labor: ILabor
}
){
   
    const {
        isSelected,
        no,
        laborCode,
        lastName,
        firstName,
        role,
        shift
    } = labor; 
    return(
        <div
        className=" bg-white flex justify-between mx-9 my-3 items-center"
      >
        <p className=" w-3">{no}</p>
        <p className=" w-14">{laborCode}</p>
        <p className=" w-64">
          {lastName} {firstName}
        </p>
        <p className=" w-64">{role}</p>
        <p className=" w-64">{shift}</p>
      </div>  
    )
}