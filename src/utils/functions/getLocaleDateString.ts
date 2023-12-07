export function getVNLocaleDateString(date: string) {
    return new Date(date)
        .toLocaleDateString("vi-VN",
            {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: '2-digit'
            });
}