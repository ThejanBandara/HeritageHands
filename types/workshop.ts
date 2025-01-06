export interface Workshop {
    workshopID: string,
    WorkshopTitle: string
    startDateShort: string,
    startDateLong: string,
    endDateShort: string,
    endDateLong: string,
    startTime: string,
    endTime: string,
    location: string,
    duration: string,
    totalSeats: number,
    availableSeats: number,
    description: string,
    imageUrl: string,
    price: number,
    isDiscounted: boolean,
    discountedPrice: number
}