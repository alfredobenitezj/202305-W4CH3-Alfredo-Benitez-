export type TaskStructure = {
  Name: string;
  Family: string;
  Age: number;
  Status: string;
  speech: string;
};

export type GoDie = {
  status: string;
};

export class Task implements TaskStructure {
  static generateId() {
    return Math.trunc(Math.random() * 1_000_000_000_000).toString();
  }

  id!: number;
  status: boolean;
  constructor(public title: string, public owner: string) {
    // this.id = Task.generateId();
    this.status = false;
  }
  Name: string;
  Family: string;
  Age: number;
  Status: string;
  speech: string;
}
