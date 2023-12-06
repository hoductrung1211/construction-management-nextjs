import { ICreatePlanTask } from "./Task";

export interface ICreatePlanWorkItem {
    isSelected: boolean;
    orderIndex: number;

    workItemName: string;
    workItemCode: string;
    supervisorCode: string | null;
    
    tasks: ICreatePlanTask[];
}

export const initWorkItems: ICreatePlanWorkItem[] = [
    {
        isSelected: true,
        orderIndex: 1,
        supervisorCode: '',
        workItemCode: 'WI0001',
        workItemName: 'Basic Construction',
        tasks: [
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK001',
                taskName: 'Clearing the Site',
                labors: [
                    {
                        employeeCode: "#EL0001",
                        firstName: "Diễm Quỳnh",
                        lastName: "Hà"
                    }
                ],
                products: [],
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK002',
                taskName: 'Soil Excavation for Foundation Trenches',
                labors: [],
                products: [],
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK003',
                taskName: 'Earthwork in Filling',
                labors: [],
                products: [],
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK010',
                taskName: 'Woodwork for Doors and Windows',
                labors: [],
                products: [],

            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK011',
                taskName: 'Flooring and Tiling',
                labors: [],
                products: [],

            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK012',
                taskName: 'Painting',
                labors: [],
                products: [],
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK013',
                taskName: 'Plastering Work',
                labors: [],
                products: [],
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK014',
                taskName: 'Masonry work',
                labors: [],
                products: [],
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK015',
                taskName: 'Shuttering (Formwork)',
                labors: [],
                products: [],
            }
        ]
    },
    {
        isSelected: true,
        orderIndex: 2,
        supervisorCode: null,
        workItemCode: 'WI0002',
        workItemName: 'Advanced Construction',
        tasks: [
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK004',
                taskName: 'Damp-Proof Course (DPC)',
                labors: [],
                products: [],
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK005',
                taskName: 'Plain Cement Concrete (PCC) Works',
                labors: [],
                products: [],
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK006',
                taskName: 'Reinforced Cement Concrete Works',
                labors: [],
                products: [],
            }
        ]
    },
    {
        isSelected: true,
        orderIndex: 3,
        supervisorCode: null,
        workItemCode: 'WI0003',
        workItemName: 'Finish Construction',
        tasks: [
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK007',
                taskName: 'Steel Work',
                labors: [],
                products: [],
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK008',
                taskName: 'Shuttering (Formwork)',
                labors: [],
                products: [],
            },
            {
                isSelected: true,
                startDate: null,
                endDate: null,
                taskCode: 'TSK009',
                taskName: 'Masonry work',
                labors: [],
                products: [],
            }
        ]
    }
]