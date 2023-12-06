import { Injectable } from '@angular/core';
import { Node } from '../models/node.model';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  private nodeGrid: Node[][] = [];
  private nodePath: Node[] = [];

  constructor() {
    for (let i = 0; i < 30; i++) {
      this.nodeGrid[i] = [];
      for (let j = 0; j < 30; j++) {
        const node = new Node("x" + i + "y" + j);
        node.xPos = i;
        node.yPos = j;
        this.nodeGrid[i].push(node);
      }
    }
  }

  getNodeGrid(): Node[][] {
    return this.nodeGrid;
  }
}