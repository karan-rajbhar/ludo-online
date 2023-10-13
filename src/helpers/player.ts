export default class Player{
    name: string;
    color: string;
    pawns:Object;
  
    constructor(name: string, color: string) {
      this.name = name;
      this.color = color;
      this.pawns={
        1:0,
        2:0,
        3:0,
        4:0
      }

    }
}