export { ICar };
declare global {
    interface ICar {
        make: string;
        model: string;
        rating: number;
        reviews: number;
        price: number;
        mileage: number;
        year: number;
        thumbnailImage: string;
    }
}
