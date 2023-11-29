'use client';

export default function PlanDetail(){
    const cSite = 
        {
          id: "#CS0257",
          constructionSiteName: "Thế Giới Di Động",
          address: "128, Trần Quang Khải, phường Tân Định, Quận 9, Tp. Hồ Chí Minh",
          startDate:"25/12/2023",
          endDate: "25/7/2024",
          brand: "Thế Giới Di Động",
          creator: "Hồ Đức Trung",
          createDate: "20/11/2023"
        }
        const cEstimate = 
        {
          id: "#CE2541",
          costEstimateName: "Thế Giới Di Động",
          creator: "Hồ Đức Trung",
          createDate: "15/11/2023",
          totalAmount:"2.240.000.000",
          totalTask: 20  
        }
    return(
        <div className="grid grid-cols-2 mx-8 gap-20">
            <div className="grid grid-cols-2 gap-4">
                <div><p className="font-semibold">Công trình</p></div>
                <div><p>{cSite.id}<span>{cSite.constructionSiteName}</span></p></div>
                <div><p className="font-semibold">Địa chỉ</p></div>
                <div><p>{cSite.address}</p></div>
                <div><p className="font-semibold">Ngày bắt đầu</p></div>
                <div><p>{cSite.startDate}</p></div>
                <div><p className="font-semibold">Ngày kết thúc</p></div>
                <div><p>{cSite.endDate}</p></div>
                <div><p className="font-semibold">Chuỗi</p></div>
                <div><p>{cSite.brand}</p></div>
                <div><p className="font-semibold">Người tạo công trình</p></div>
                <div><p>{cSite.creator}</p></div>
                <div><p className="font-semibold">Ngày tạo công trình</p></div>
                <div><p>{cSite.createDate}</p></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div><p className="font-semibold">Dự toán</p></div>
                <div><p>{cEstimate.id}<span>{cEstimate.costEstimateName}</span></p></div>
                <div><p className="font-semibold">Người tạo dự toán</p></div>
                <div><p>{cEstimate.creator}</p></div>
                <div><p className="font-semibold">Thời gian tạo dự toán</p></div>
                <div><p>{cEstimate.createDate}</p></div>
                <div><p className="font-semibold">Tổng hạng mục</p></div>
                <div><p>{cEstimate.totalTask}</p></div>
                <div><p className="font-semibold">Tổng tiền</p></div>
                <div><p>{cEstimate.totalAmount} VNĐ</p></div>
            </div>
        </div>
    )
}