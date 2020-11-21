class Media {
    constructor(title){
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
  
    get title(){
      return this._title;
    }
  
    get ratings(){
      return this._ratings;
    }
  
    get isCheckedOut(){
      return this._isCheckedOut;
    }
  
    set isCheckedOut(checkedOut){
      this._isCheckedOut = checkedOut;
    }
  
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating(){
      let lengthOfList = this._ratings.length;
      let ratingSum = this._ratings.reduce((currentSum, ratings) => currentSum + ratings);
      let averageSum = ratingSum / lengthOfList;
  
      return averageSum;
    }
  
    addRating(incValue){
      this.ratings.push(incValue);
    }
  };
  
  class Book extends Media {
    constructor(author, title, pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get pages(){
      return this._pages;
    }
  
    get author(){
      return this._author;
    }
  };
  
  class Movie extends Media {
    constructor(director, title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director(){
      return this._director;
    }
  
    get runTime(){
      return this._runTime;
    }
  };
  
  class CD extends Media {
    constructor(artist, title, album){
      super(title);
      this._artist = artist;
      this._album = album;
      this._songs = ['song', 'voce', 'strict', 'sabotage'];
    }
  
    get artist(){
      return this._artist;
    }
  
    get album(){
      return this._album;
    }
  
    get songs(){
      return this._songs;
    }
  
    set songs(songTitle){
      this._songs.push(songTitle);
    }
  
    shuffle(){
      let randomSortedSongs = this._songs;
      randomSortedSongs.sort(() => Math.random() - 0.5);
      return randomSortedSongs;
    }
  }
  
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  const darkestMind = new CD('Kanye West', 'shortage', 'darkestMind');
  
  darkestMind.songs = 'albonara';
  darkestMind.songs = 'switcher';
  darkestMind.shuffle();
  darkestMind.addRating(1)
  darkestMind.addRating(3)
  darkestMind.addRating(3)
  darkestMind.addRating(2)
  
  speed.toggleCheckOutStatus();
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  // console.log(speed.getAverageRating());
  
  historyOfEverything.toggleCheckOutStatus();
  // console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  // console.log(historyOfEverything.getAverageRating());
  
  console.log(darkestMind)
  console.log(speed)
  console.log(historyOfEverything)