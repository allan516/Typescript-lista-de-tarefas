export interface Task {
  name: string;
  add(arg: string): Task[];
  markAsRead(arg: HTMLSpanElement, arg2: HTMLParagraphElement): void;
  exclude(): void;
}
