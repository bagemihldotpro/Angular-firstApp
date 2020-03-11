import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;
  turns: number;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9);
    this.winner = null;
    this.xIsNext = true;
    this.turns = 0;
  }

  get player() {
    return this.xIsNext ? "X": "O";
  }

  makeMove(index: number) {
    if( this.winner === null && this.squares[index] == null) {
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
      this.turns++;
    }
    if(this.turns >= 9 && this.winner == null)
        this.winner = '0';
  }

  calculateWinner() {  
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i = 0; i < wins.length; i++) {
      if( this.squares[wins[i][0]] != null && 
        this.squares[wins[i][0]] == this.squares[wins[i][1]] && 
        this.squares[wins[i][1]] == this.squares[wins[i][2]]) {
          return this.squares[wins[i][0]];
      }
    }
    return null;
  }

}
