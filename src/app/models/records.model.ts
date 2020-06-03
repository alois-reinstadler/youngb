import { Player } from './player.model';

export interface Record {
    id: string;
    accountId: string;
    accountName: string;

    score: number;
    creationDate: Date;
    
    game: 'snake' | 'pong';
}

export interface SnakeRecord extends Record {
    duration: number;
}

export interface PongRecord extends Record {
    players: Player[];
    duration: number;
}