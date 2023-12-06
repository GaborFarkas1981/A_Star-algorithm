export class Node {
    id: string;
    xPos: number;
    yPos: number;
    isStart: boolean;
    isEnd: boolean;
    isPath: boolean;
  
    constructor(id: string) {
      this.id = id;
      this.isStart = false;
      this.isEnd = false;
      this.isPath = false;
      this.xPos = 0;
      this.yPos = 0;
    }    
  }