  //export makes it available for use anywhere else in the app.
export class Goal {
    
    showDescription: boolean;
    constructor(public id: number,public name: string,public description: string,public completeDate: Date){
       this.showDescription=false;
  }

  // id!:number;
    // name!:string;
    // description!:string;
}

