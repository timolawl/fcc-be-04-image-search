# Image Search Abstraction Layer Microservice

A full-stack JavaScript application as part of the [Free Code Camp](https://freecodecamp.com "Free Code Camp") curriculum. API Basejump #3 - Image Search Abstraction Layer.

Check out the working app here: [https://timolawl-image-search.herokuapp.com](https://timolawl-image-search.herokuapp.com "Image Search Abstraction Layer").

#### User stories:
1. I can get the image URLs, alternative text, and page URLs for a set of images relating to a given search string.
2. I can paginate through the responses by adding a '?offset=' + single digit (e.g., ?offset=2) parameter to the URL.
3. I can get a list of the most recently submitted search strings.

##### Example usage:
* Image search (e.g., lolcats funny): [https://timolawl-image-search.herokuapp.com/api/imagesearch/lolcats funny?offset=10](https://timolawl-image-search.herokuapp.com/api/imagesearch/lolcats funny?offset=10)
* Recent searches: [https://timolawl-image-search.herokuapp.com/api/latest](https://timolawl-image-search.herokuapp.com/api/latest)

##### Example output:
* Example entry (page displays 10 as an array): { "url": "http://data.whicdn.com/images/17561072/large.jpg", "snippet": "cat, funny, and marshmallow", "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCO7BmkKUwgNi-4qSy3wwgbhQA0ZYY0Qs-U0wS5cX3koIGU2fRP6k_BEU", "context":"http://weheartit.com/entry/17561072" }
* Example of a recent searche (page displays last 10): {"term":"lolcats funny","when":"2016-04-07T12:22:59.226Z"}
