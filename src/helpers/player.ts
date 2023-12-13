class Pawn {
  position: number;
  home: boolean;
  captured: boolean;
  start: boolean;

  constructor(position: number) {
    this.position = position;
    this.home = false;
    this.captured = false;
    this.start = true;
  }


  move(diceNumber: number) {
    if (this.start && diceNumber === 6) {
      this.start = false;
    }

    if (!this.home && this.position + diceNumber >= 40) {
      this.position = this.position + diceNumber - 40;
      this.home = true;
    } else {
      this.position += diceNumber;
    }
    if (!this.start) {
      // ... existing move logic ...
    }
  }

  reset() {
    this.position = 0;
    
  }
  capture() {
    this.position = 0;
    this.captured = true;
  }
}

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