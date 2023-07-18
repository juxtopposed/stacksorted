# Stack Sorted.
An open-source, open-to-contribution project that categorizes websites, not by general design or topic but by specific elements.

# How to contribute
You can either contribute by improving the code or adding sites to the database.

## Improving the code
If there's a feature you'd like to see, [open an issue](https://github.com/juxtopposed/stacksorted/issues) or send a pull request.

## Adding a site
We add sites and categories mainly to [database.js](src/database.js). 

There are up to 4 properties you can specify for each site: 

```
{
          name: "Site/Project/Design Name",
          url: "https://example.com",
          code: "link to code implementation of the design (if existing, preferrably on Codepen)",
          image: "./images/{category}-{number}.png",
},
```

### Keep in mind
1. The `name`, `url`, and `image` are mandatory. `code` is optional. 
2. You can add it if there is an existing implementation of the design on CodePen or similar sites. If you're making one yourself, you can add the link there too.
3. You can add the images to `public/images`. 
4. There is a naming convention for images too: {category}-{number}.png
The number follows the last existing image number. If you're adding the first site in a category, e.g., grainy, then it'd be grainy-1.png, followed by grainy-2.png, and so on.


Thank you for checking the project out!

<a href="https://www.producthunt.com/products/stack-sorted/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-stack&#0045;sorted" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=543544&theme=dark" alt="Stack&#0032;Sorted&#0046; - Find&#0032;Inspiration&#0032;in&#0032;Design&#0032;Elements&#0046; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
