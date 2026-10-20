export type TypeStatusTask = "todo" | "doing" | "done";

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: TypeStatusTask;
}
//   isArchived?: boolean;
