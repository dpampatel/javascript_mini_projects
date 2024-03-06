"use strict";
const game = {
  player1: new Pig(),
  player2: new Pig(),
  currentPlayer: null,
  get isValid() {
    if (this.player1.name === "" || this.player2.name === "") {
      return false;
    } else {
      return true;
    }
  },
  start(name1, name2) {
    this.player1.name = name1;
    this.player2.name = name2;
    this.currentPlayer = this.player1;
    return this;
  },
  reset() {
    try {
      this.player1.reset();
      this.player2.reset();
    } catch (error) {
      alert(g_error);
    } finally {
      return this;
    }
  },
  changePlayer() {
    try {
      if (this.currentPlayer && this.currentPlayer.name === this.player1.name) {
        this.currentPlayer = this.player2;
      } else {
        this.currentPlayer = this.player1;
      }
    } catch (error) {
      alert(g_error);
    } finally {
      return this;
    }
  },
  hold(score1, score2) {
    try {
      this.currentPlayer.hold();
      if (this.currentPlayer?.name === this.player1.name) {
        score1.val(this.currentPlayer.total);
      } else {
        score2.val(this.currentPlayer.total);
      }
    } catch (error) {
      alert(g_error);
    } finally {
      return this;
    }
  },
  checkWinner() {
    try {
      if (this.player1.total >= 100) {
        return this.player1.name;
      } else if (this.player2.total >= 100) {
        return this.player2.name;
      } else {
        return "none";
      }
    } catch (error) {
      alert(g_error);
      return "none";
    }
  },
};
