export interface Users {
    id: string;
    email: string;
    name: {
        vezeteknev: string;
        keresztnev: string;
    };
    bornDate: Date;
    szerzodesszam: number;
}