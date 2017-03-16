import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes: Array<any> = [
    { id: 1, text: 'Life is about making an impact, not making an income. ', author: 'Kevin Kruse' },
    { id: 2, text: 'Whatever the mind of man can conceive and believe, it can achieve.', author: 'Napoleon Hill' },
    { id: 3, text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein' },
    { id: 4, text: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. ', author: 'Robert Frost' },
    { id: 5, text: 'I attribute my success to this: I never gave or took any excuse.', author: 'Florence Nightingale' },
    { id: 6, text: 'Life is about making an impact, not making an income. ', author: 'Kevin Kruse' },
    { id: 7, text: 'Whatever the mind of man can conceive and believe, it can achieve.', author: 'Napoleon Hill' },
    { id: 8, text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein' },
    { id: 9, text: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. ', author: 'Robert Frost' },
    { id: 10, text: 'I attribute my success to this: I never gave or took any excuse.', author: 'Florence Nightingale' },
    { id: 11, text: 'Ive missed more than 9000 shots in my career. Ive lost almost 300 games. 26 times Ive been trusted to take the game winning shot and missed. Ive failed over and over and over again in my life. And that is why I succeed.', author: 'Michael Jordan' },
    { id: 12, text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart' },
    { id: 13, text: 'Every strike brings me closer to the next home run.', author: 'Babe Ruth' },
    { id: 14, text: 'Definiteness of purpose is the starting point of all achievement.', author: 'W. Clement Stone' },
    { id: 15, text: 'Life isnt about getting and having, its about giving and being.', author: 'Kevin Kruse' },
    { id: 16, text: 'Life is what happens to you while you’re busy making other plans.', author: 'John Lennon' },
    { id: 17, text: 'We become what we think about.', author: 'Earl Nightingale' },
    { id: 18, text: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.', author: 'Mark Twain' },
    { id: 19, text: 'Life is 10% what happens to me and 90% of how I react to it.', author: 'Charles Swindoll' },
    { id: 20, text: 'The most common way people give up their power is by thinking they don’t have any.', author: 'Alice Walker' },
    { id: 21, text: 'The mind is everything. What you think you become. ', author: 'Buddha' },
    { id: 22, text: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: 'Chinese Proverb' },
    { id: 23, text: 'An unexamined life is not worth living.', author: 'Socrates' },
    { id: 24, text: 'Eighty percent of success is showing up.', author: 'Woody Allen' },
    { id: 25, text: 'Your time is limited, so don’t waste it living someone else’s life.', author: 'Steve Jobs' },
    { id: 26, text: 'Winning isn’t everything, but wanting to win is.', author: 'Vince Lombardi' },
    { id: 27, text: 'I am not a product of my circumstances. I am a product of my decisions.', author: 'Stephen Covey' },
    { id: 28, text: 'Every child is an artist.  The problem is how to remain an artist once he grows up.', author: 'Pablo Picasso' },
    { id: 29, text: 'You can never cross the ocean until you have the courage to lose sight of the shore.', author: 'Christopher Columbus' }
  ];
  constructor() { }

  ngOnInit() {
  }
  //removeQuote function will remove the selected quote from the QUOTES array
  //this works by displaying the quote IDs that have NOT been removed
  removeQuote (id) {
    this.quotes = this.quotes.filter(
      (oneQuote) => oneQuote.id !== id
    );
  }
}
