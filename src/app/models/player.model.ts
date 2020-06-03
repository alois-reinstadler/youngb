import { Record, SnakeRecord, PongRecord } from './records.model';

export interface Player {
    id: string;
    username: string;
    records: Record | SnakeRecord | PongRecord;
}