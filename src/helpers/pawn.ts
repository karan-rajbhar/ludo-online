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