---
layout: post
published: true
title: Coffee Review API
author: gabe
---

As we've traveled the country drinking coffee and meeting members of the coffee community, we've discovered the 
tool and resource that is CoffeeReview.com. Roasters take pride in their Coffee Review ratings (JBC, Thirty-Thirty, etc), 
and Coffee Review provides a solid starting point for coffee drinkers to explore a region's coffee scene. The roaster / 
bean list is far from comprehensive, but I've found the site very useful these last few months. However, there have 
been times that I've been frustrated that I can't quickly find exactly what I want within that goldmine of data. So I've
 written a pretty basic API for Coffee Review.

Feel free to check out my code and documentation on <a href="http://github.com/gabergg/cr-api">Github</a>. A sample 
http request might look like this: 

    curl 'http://coffeeapi.herokuapp.com/v2/reviews?rating=95&location=cali&order=rating&count=15'

This would result in a json response that looks like this: 

    ```javascript
    {
      reviews: 
        {
        "name":"Panama Ironman Camilina Geisha",
        "roaster":"Klatch Coffee",
        "roast":"Medium-Light",
        "origin":"Boquete growing region, western Panama.",
        "location":"Los Angeles, California",
        "review_date":"September 2014",
        "overall_rating":97,
        "aroma":10,
        "acidity":9,
        "body":9,
        "flavor":10,
        "aftertaste":9,
        "description":"Beautifully structured and almost impossibly intricate in flavor and aroma. The fruit sensation is so deep and so complex that one could find almost any note in it: we settled on guava, mango and tangerine. Intensely floral – passion fruit, lilac, lily – with crisp cacao nib and sandalwood complication. Rich, lyric acidity; syrupy but buoyant mouthfeel. The aromatic fireworks quiet a bit but still saturate the finish.",
        "price":"$49.95/8 ounces",
        "agtron":"58/80",
        "with_milk":null
        }, ...
    }
    ```
    
You can check out more details in the docs on my Github, linked above. For now, it's a very simple API, but I've already 
found it quite useful. I'd love to hear any comments, questions, or issues with it - it's a work in progress.

I hope to integrate Coffee Review with another coffee-related piece of software that I'm working on at the moment. I'll 
write about that in the hopefully not-too-distant future.