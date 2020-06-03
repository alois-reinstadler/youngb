import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// import { GameService } from 'src/app/services/game/game.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-snake',
    templateUrl: './snake.component.html',
    styleUrls: ['./snake.component.scss']
})

export class SnakeComponent implements OnInit, OnDestroy {
    loaded: boolean = false;

    name: string;
    subscription: Subscription;

    //ui
    settings = false;
    gameover = false;
    ingame = false;

    //settings
    score: number = 0;
    wall = false;
    speed: 0 | 25 | 45 = 0;

    //game
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    frame: number;

    snake: Snake;
    food: Position;

    grid = 16;
    count = 0;
    maxCells = 4;

    leaderboards: Record[];

    constructor(private firestore: AngularFirestore) { }

    ngOnInit() {
        setTimeout(() => {this.loaded = true;}, 500);
        
        document.body.classList.add('gaming');
        this.init();
    }

    ngOnDestroy() {
        this.loaded = false;
        this.subscription.unsubscribe();

        document.body.classList.remove('gaming');
        document.removeEventListener('keydown', e => this.toggleGame(e));
    }

    init() {
        document.addEventListener('keydown', e => this.toggleGame(e));
    }

    newGame() {
        this.ingame = true;

        this.canvas = document.getElementById('game') as HTMLCanvasElement;
        this.canvas.focus();

        this.grid = this.canvas.width / 25;
    
        this.context = this.canvas.getContext('2d');
        this.count = 0;
        this.score = 0;
        
        this.snake = new Snake();
        this.snake.setPos(160, 160);
        this.snake.dx = this.grid;

        this.snake.dy = 0;
        this.snake.maxCells = this.maxCells;
        this.snake.cells = [];

        this.food = {x: 320, y: 320};
        
        let then = performance.now();
        let now, elapsed;

        let loop = () => {
            if(this.ingame) {
                this.frame = requestAnimationFrame(loop);
            }
            
            now = performance.now();
            elapsed = now - then;

            if(elapsed > this.speed || this.speed == 0) {
                if(this.speed != 0)
                    then = now - (elapsed % this.speed);

                // slow game loop to 15 fps instead of 60 (60/15 = 4)
                if (++this.count < 4) {
                    return;
                }
            
                this.count = 0;
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                
                // move snake by it's velocity
                this.snake.x += this.snake.dx;
                this.snake.y += this.snake.dy;
            
                // wrap snake position horizontally on edge of screen
                if (this.snake.x < 0) {
                    if(this.wall)
                        this.endGame();
                    else
                        this.snake.x = this.canvas.width - this.grid;
                }
                else if (this.snake.x >= this.canvas.width) {
                    if(this.wall)
                        this.endGame();
                    else
                        this.snake.x = 0;
                }
            
                // wrap snake position vertically on edge of screen
                if (this.snake.y < 0) {
                    if(this.wall)
                        this.endGame();
                    else
                        this.snake.y = this.canvas.height - this.grid;

                    if(this.wall)
                        this.endGame();
                }
                else if (this.snake.y >= this.canvas.height) {
                    if(this.wall)
                        this.endGame();
                    else
                        this.snake.y = 0;
                }
            
                // keep track of where snake has been. front of the array is always the head
                this.snake.cells.unshift({x: this.snake.x, y: this.snake.y});
                
                // remove cells as we move away from them
                if (this.snake.cells.length > this.snake.maxCells) {
                    this.snake.cells.pop();
                }
            
                // draw apple
                this.context.fillStyle = 'red';
                this.context.fillRect(this.food.x, this.food.y, this.grid-1, this.grid-1);
                
                // draw snake one cell at a time
                this.context.fillStyle = 'white';
                this.snake.cells.forEach((cell, index) => {
                    this.context.fillRect(cell.x, cell.y, this.grid, this.grid);  
                    
                    // snake ate apple
                    if (cell.x === this.food.x && cell.y === this.food.y) {
                        this.snake.maxCells++;
                        this.score += 10;
                    
                        this.food.x = getRandomInt(0, this.canvas.width / this.grid) * this.grid;
                        this.food.y = getRandomInt(0, this.canvas.height / this.grid) * this.grid;
                    }
                    
                    // check collision with all cells after this one (modified bubble sort)
                    for (var i = index + 1; i < this.snake.cells.length; i++) {
                    
                        // snake occupies same space as a body part. reset game
                        if (cell.x === this.snake.cells[i].x && cell.y === this.snake.cells[i].y) {
                            this.endGame();
                        }
                    }
                });
            }
        }

        // listen to keyboard events to move the snake
        document.addEventListener('keydown', e => this.changeDirection(e));
        
        // start the game
        if(this.ingame)
            this.frame = requestAnimationFrame(loop);
    }

    endGame() {
        this.ingame = false;
        this.gameover = true;

        document.removeEventListener('keydown', e => this.changeDirection(e));

        cancelAnimationFrame(this.frame);
        requestAnimationFrame(() => {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        });
    }

    changeDirection(e: KeyboardEvent) {
        e.preventDefault();

        // prevent snake from backtracking on itself by checking that it's 
        // not already moving on the same axis (pressing left while moving
        // left won't do anything, and pressing right while moving left
        // shouldn't let you collide with your own body)
        
        // left arrow key
        if (e.which === 37 && this.snake.dx === 0) {
            this.snake.dx = -this.grid;
            this.snake.dy = 0;
        }
        // up arrow key
        else if (e.which === 38 && this.snake.dy === 0) {
            this.snake.dy = -this.grid;
            this.snake.dx = 0;
        }
        // right arrow key
        else if (e.which === 39 && this.snake.dx === 0) {
            this.snake.dx = this.grid;
            this.snake.dy = 0;
        }
        // down arrow key
        else if (e.which === 40 && this.snake.dy === 0) {
            this.snake.dy = this.grid;
            this.snake.dx = 0;
        }
    }

    toggleGame(e) {
        if(e.which === 32) {
            if(this.ingame)
                this.endGame();
            else
                this.newGame();
        }
    }

    updateLeaderboards() {
        
    }
}

class Snake {
    x: number;
    y: number;

    dx: number;
    dy: number;

    cells: Position[];
    maxCells: number;

    constructor() {
        this.dx = 16;
        this.dy = 0;

        this.maxCells = 4;
    }

    setPos(x?: number, y?: number) {
        if(x)
            this.x = x;
        if(y)
            this.y = y;
    }
}

interface Position {
    x: number;
    y: number;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

interface Record {
    score: number;
    holder: string;
    duration: number;
}