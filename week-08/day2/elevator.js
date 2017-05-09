 function elevatorController{
    this.eventHandler = function(){
        
        // The object should have a method which handling the events. It invokes the elevatorModel's correct method to moving the elevator, add or remove people.    
    }    
}

 
function elevatorModel(maximumFloor, maximumPeople){
    
    // The object should track the following things:
     
    // elevator position
    // elevator direction
    // people in the elevator
    
    this.addPeople = function(){
        
    }
    
    this.removePeople = function(){
        
    }
    
    this.floorLimitChecker = function(){
        
        // It should have check if the floor are beyond the limits.
    }
    
    this.peopleLimitChecker = function(){
        
        // It should have check if the numbers of people.
    }
    
    elevatorView();
    // The object invokes the elevatorView.
}





function elevatorView(){

    // The object draw the elevator's state to the browser. 
}
