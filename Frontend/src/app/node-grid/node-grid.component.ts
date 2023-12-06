import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Node } from '../models/node.model';
import { NodeService } from '../services/node.service';

@Component({
  selector: 'app-node-grid',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './node-grid.component.html',
  styleUrl: './node-grid.component.css'
})
export class NodeGridComponent implements OnInit {
  nodeGrid: Node[][] = [];
  startNode: Node | null = null;
  endNode: Node | null = null;
  path: number[] = [];

  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
    this.nodeGrid = this.nodeService.getNodeGrid();
  }

  selectNode(node: Node): void {
    if (!this.startNode) {
      this.startNode = node;
      node.isStart = true;
    } else if (!this.endNode) {
      this.endNode = node;
      node.isEnd = true;
      this.calculatePath();
    } else {
      this.startNode.isStart = false;
      this.endNode.isEnd = false;
      this.startNode = node;
      node.isStart = true;
      this.endNode = null;
      this.erasePath();
    }
  }

  erasePath() {
    while (this.path.length > 1) {
      let x: number | undefined = this.path.shift();
      let y: number | undefined= this.path.shift();
      if (x === undefined || y === undefined) {
        x = 0;
        y = 0;
      }
      this.nodeGrid[x][y].isPath = false;
    }
  }

  calculatePath() {
    const rowNr = this.random(0, this.nodeGrid.length)
    for (let i = 3; i < 10; i++) {
      const node = this.nodeGrid[i][rowNr];
      node.isPath = true;
      this.path.push(i);
      this.path.push(rowNr);
    }
  }
  
  random(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}