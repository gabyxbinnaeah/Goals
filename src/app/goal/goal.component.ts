import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';


@Component({
  selector: '[app-goal]',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  title = 'My Goals';
  goals:Goal[]=[
    new Goal( 1 , 'to Understand Java script in angular', 'In line with js',new Date(2019,6,9)),
    new Goal( 2 , ' to Understand Angular basics', 'Building blocks ',new Date(2011,6,9)),
    new Goal( 3 , ' to Understand Angular Structure' , 'Composition ',new Date(2012,6,9)),
    new Goal( 4 , ' to Understand Components' , 'Decouples application ',new Date(2020,6,9)),
    new Goal (5 , ' to Understand Angular Modules' , 'Page wrapper ' ,new Date(2021,6,9)),
    new Goal( 6 , ' to Understand Angular Classes' , 'creates blue prints' ,new Date(2022,6,9)),

    // {id: 1 , name:'to Understand Java script in angular', description:'In line with js'},
    // {id: 2 , name:' to Understand Angular basics', description:'Building blocks '},
    // {id: 3 , name:' to Understand Angular Structure' , description:'Composition '},
    // {id: 4 , name:' to Understand Components' , description:'Decouples application '},
    // {id: 5 , name:' to Understand Angular Modules' , description:'Page wrapper '},
    // {id: 6 , name:' to Understand Angular Classes' , description:'creates blue prints'},
  ];

  addNewGoal(goal: Goal){
    let goalLength = this.goals.length; //length of goals in object goals array
    goal.id = goalLength+1; //id of newly created array
    goal.completeDate = new Date(goal.completeDate)//assigns current date of generating item in array 
    this.goals.push(goal) //pushes inputted form contents into object array
  }

 toggle=false;

  toggleDetails(index: any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
      // this.toggle=!this.toggle;
  }

  deleteGoal(isComplete: any, index: any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      
      if(toDelete){
        this.goals.splice(index,1);
      }
      
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
