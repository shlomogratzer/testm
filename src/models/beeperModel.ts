interface Beeper {
    id: number,
    name :string,
    status: string,
    created_at : Date,
    detonated_at : Date | string,
    latitude : number | string,
    longitude : number | string
}