export const fetchBusinessHours = businessId => (
    $.ajax({
        method: "GET",
        // url: `/api/businesses/${businessId}/businessHours`
    })
);