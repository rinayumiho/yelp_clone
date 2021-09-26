export const fetchBusinessHour = businessId => (
    $.ajax({
        method: "GET",
        url: `/api/businesses/${businessId}/business_hour`
    })
);