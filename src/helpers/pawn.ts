class Pawn {
    position: number;
  
    constructor(position: number) {
      this.position = position;
    }
  }
  
  class Player {
    name: string;
    color: string;
    pawns: Pawn[];
  
    constructor(name: string, color: string) {
      this.name = name;
      this.color = color;
      this.pawns = [new Pawn(0), new Pawn(0), new Pawn(0), new Pawn(0)];
    }
  }