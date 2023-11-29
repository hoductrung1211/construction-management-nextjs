import Icon from "@/components/Icon";

export default function Page() {
    const workItems = [
        {
            id: 1,
            isChecked: true,
            workItemName: "Dao mong",
            workItemId: "WI0321",
            supervision: "Ha Diem Quynh",
            NumberOfTask: 6,
        },
        {
            id: 2,
            isChecked: true,
            workItemName: "Nhay Samba",
            workItemId: "WI0123",
            supervision: "Ha Diem Quynh",
            NumberOfTask: 2,
        },
        {
            id: 3,
            isChecked: false,
            workItemName: "Xay tuong",
            workItemId: "WI1231",
            supervision: "Ho Duc Trung",
            NumberOfTask: 4,
        },
        {
            id: 4,
            isChecked: false,
            workItemName: "Son tuong",
            workItemId: "WI2311",
            supervision: "Dinh Truong Son",
            NumberOfTask: 1,
        },
    
    ]

    return (
        <main>
            {workItems.map(workItem => (
                <div className="px-3 flex justify-between bg-apple-gray-3">
                <section className="h-10 items-center flex">
                    <span className="w-8">
                        <Icon name="angle-right" />
                    </span>
                    <span className="w-8 text-primary">
                        {
                            workItem.isChecked ? <Icon name="square-check" /> : <Icon name="square" />       
                        }
                    </span>
                    <p className="w-48">{workItem.workItemName}</p>
                    <p className="w-28">#{workItem.workItemId}</p>
                    <p className="w-48 flex items-center gap-2">
                        <Icon name="user" />
                        {workItem.supervision}
                    </p>
                    <p>{workItem.NumberOfTask}</p>
                </section>
                <section>
                    <Icon name="user-plus" />
                </section>
            </div>
            ))}
        </main>
    )
}