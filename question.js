class Question {

    constructor() {
        this.input = createInput("Name");
    this.button = createButton('Play');
   // this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.question=createElement('h2');
    this.option=createButton("a) chair");
    this.option2=createButton("b) bottle");
    this.option3=createButton("c) blanket");
    this.option4=createButton("d) glass");
    this.result=createElement("h2");

    
    }
    hide(){
       // this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
      }
      display(){
        
        this.title.html("QUIZ TIME");
        this.title.position(displayWidth/2 - 50, 0);
        
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
    2
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          contestant.name = this.input.value();
          contestantCount+=1;
          contestant.index = contestantCount;
          contestant.update();
          contestant.updateCount(contestantCount);
          this.question.html("1) What has a neck and a cap but no face?" )
          this.question.position(displayWidth/2 -720, displayHeight/4 -100);
          this.option.position(displayWidth/2 -700, displayHeight/4 -20);
          this.option2.position(displayWidth/2 -700, displayHeight/4 );
          this.option3.position(displayWidth/2 -700, displayHeight/4 +20 );
          this.option4.position(displayWidth/2 -700, displayHeight/4 +40 );
        });
        this.option2.mousePressed(()=>{
            this.result.html("CORRECT");
            this.result.position(displayWidth/2 -720, displayHeight/4 +100 );
          }
          )
          this.option.mousePressed(()=>{
            this.result.html("WRONG");
            this.result.position(displayWidth/2 -720, displayHeight/4 +100 );
          }
          )
          this.option3.mousePressed(()=>{
            this.result.html("WRONG");
            this.result.position(displayWidth/2 -720, displayHeight/4 +100 );
          }
          )
          this.option4.mousePressed(()=>{
            this.result.html("WRONG");
            this.result.position(displayWidth/2 -720, displayHeight/4 +100 );
          }
          )
      }
}