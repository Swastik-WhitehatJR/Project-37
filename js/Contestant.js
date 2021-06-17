class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('Project37/contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('Project37/').update({
      contestantCount: count
    });
  }

  update(){
    var contestantIndex = "Project37/contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('Project37/contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}
