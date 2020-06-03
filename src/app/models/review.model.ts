export interface Review {
    id: string;
    productId: string;

    stars: number;
    author: string;
    creationDate: Date;
}