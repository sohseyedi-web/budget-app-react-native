export function convertDate(dateString) {
    const daysOfWeek = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ];

    const date = new Date(dateString);

    const dayName = daysOfWeek[date.getDay()];
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${dayName} ${month} ${year}`;
}

