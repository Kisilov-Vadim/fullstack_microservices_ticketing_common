import {Subjects} from "./subjects";

export interface OrderCanceledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  }
}