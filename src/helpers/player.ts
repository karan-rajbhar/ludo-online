

export default class Player{
  name: string;
  color: string;
  pawns: Pawn[];

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
    this.pawns = [new Pawn(0), new Pawn(0), new Pawn(0), new Pawn(0)];
  }

    movePawn(diceNumber: number, pawnIndex: number) {
      this.pawns[pawnIndex].position += diceNumber;
  
      // Check if the pawn has completed a lap
      if (this.pawns[pawnIndex].position >= 40) {
        this.pawns[pawnIndex].position -= 40;
      }
    }
}
