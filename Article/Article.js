/* Using jQuery, select all the article elements */
let articles = $('.article');

class Article {
  /* The constructor will take an element as it's only argument */
  constructor(element) {
    /* 
      We need to make sure the element being passed to us is a jQuery element.
      To do so, wrap the element in jQuery syntax. 
    */
    this.element = $(element);
    // console.log(element);
    /* 
      Using our new reference to the element, find the expand button within 
      the element and set a new property on the Article class. 
    */
    this.expandButton = this.element.find('.expandButton');
    /* 
      Using our new reference to the expandButton, use jQuery to set the inner
      text on the button. 
    */
    this.expandButton.text("click to expand")
    /* 
      Set a click handler on the expand button (or article element), calling 
      the expandArticle method. 
    */
    this.expandButton.click( () => {
      console.log('button clicked');
      this.expandArticle();
    });

    /** STRETCH GOAL */
    this.para = this.element.find('p');
    // console.log(this.para);
  }

  expandArticle() {
    /* Using our reference to the article element, add or remove a class */
    this.element.toggleClass('article-open');
    console.log(this.para.length);

    /** ANIMATE open button */
    let font_size = this.para.css('font-size');
    this.para.animate({ color: '#000', fontSize: '20px' }, 1000);
    this.para.animate({ color: '#000', fontSize: font_size }, 1000);
  }

}

/* 
  Use jQuery's .map function to map over the array of jQuery elements
  Within .map, we create a new instance of Article passing in each article element 
  to the constructor
*/
articles = articles.map( (i, art) => {
  new Article(art);
});

/** ADD NEW ARTICLES TO THE PAGE */
let articles2 = $('.articles-2');
articles2 = articles2.map( (i, art) => {
  new Article(art);
} )