export default class Player{
    name: string;
    color: string;
    pawn_1:number;
    pawn_2:number;
    pawn_3:number;
    pawn_4:number;
  
    constructor(name: string, color: string) {
      this.name = name;
      this.color = color;
      this.pawn_1=0
      this.pawn_2=0
      this.pawn_3=0
      this.pawn_4=0
    }
}