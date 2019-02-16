var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var m = this.cards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  };
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  if (firstCard === secondCard){
    this.pairsClicked ++;
    this.pairsGuessed ++;
    return true;
  } else {
    this.pairsClicked ++;
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length / 2) {
    return true;
  } else {
    return false;
  }
};

function flip(e) {
  if ($(e).parent().first().attr('class', 'back')){
    $(e).removeClass('back');
    $(e).addClass('front');

    $(e).next().removeClass('front');
    $(e).next().addClass('back');
  }
}