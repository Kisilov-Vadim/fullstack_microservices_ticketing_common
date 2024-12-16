import {Subjects} from "./subjects";

export interface OrderCanceledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  }
}