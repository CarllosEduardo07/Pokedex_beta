


export interface Pokemon {
    image:string;
    number:number;
    name:string;
    types: Type[];

}



enum Type{
    Grass = 'Grass',
    Poison = 'Poison',
}
