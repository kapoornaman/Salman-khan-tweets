# Salman Khan Tweets API

A simple API to retrieve iconic Salman Khan tweets — *Bhai style.*


🌐 **Website and Demo:**  
https://salman-khan-tweets.onrender.com/

**Production Host:**  
🆕 https://salman-khan-tweets.onrender.com





## API
### `GET /random`

Get a random Salman Khan tweet:

>https://salman-khan-tweets.onrender.com/random

  [
  {
    "id": 4,
    "tweet": "Sub theek ?",
    "date": "May 28"
  }
  ]

### `GET /api/quotes`

Get all tweets in an array:
>https://salman-khan-tweets.onrender.com/api/quotes
  
  Example response:
  [
    {
      "id": 1,
      "tweet": "Best of luck to zinta",
      "date": "2010-12-06"
    },
    {
      "id": 2,
      "tweet": "So jao ab",
      "date": "2010-11-02"
    }
  ]




## Contributing

If you want to add some quotes, just add them in `quotes.js` file and do a pull request !


## Credits

Inspired by [Breaking Bad Quotes](https://github.com/shevabam/breaking-bad-quotes).