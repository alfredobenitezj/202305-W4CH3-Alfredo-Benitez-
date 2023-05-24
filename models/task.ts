

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
