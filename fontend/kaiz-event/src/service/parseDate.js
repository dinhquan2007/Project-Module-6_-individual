import moment from "moment";

export const parseDate = (inputDateString) => {
    const outputDateFormat = "DD-MM-YYYY HH:mm:ss";
    const parsedDate = moment(inputDateString).format(outputDateFormat);
    return parsedDate;
}
export const vnd = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
})
export const parseDay = (num) => {
    switch (num) {
        case 0:
            return "Chủ Nhật";
        case 1:
            return "Thứ Hai";
        case 2:
            return "Thứ Ba";
        case 3:
            return "Thứ Tư";
        case 4:
            return "Thứ Năm";
        case 5:
            return "Thứ Sáu";
        case 6:
            return "Thứ Bảy";
    }
}