# Stack Sorted.
An open-source, open-to-contribution project that categorizes websites, not by general design or topic but by specific elements.

# How to contribute
You can either contribute by improving the code or adding sites to the database.
Before that, make sure to read the [Codes of Conduct](https://github.com/juxtopposed/stacksorted/blob/main/CONTRIBUTIONS.md).

## Improving the code
If there's a feature you'd like to see, [open an issue](https://github.com/juxtopposed/stacksorted/issues) or send a pull request.

## Adding a site
We add sites and categories mainly to [database.js](src/database.js). 

There are up to 5 properties you can specify for each site: 

```
{
          name: "Site/Project/Design Name",
          url: "https://example.com",
          code: "link to code implementation of the design (if existing, preferrably on Codepen)",
          image: "/images/{category}-{number}.webp",
          gif: "/images/{category}-{image-number}.webp",
},
```

### Keep in mind
1. The `name`, `url`, and `image` are mandatory. `code` and `gif` are optional. 
2. You can add it if there is an existing implementation of the design on CodePen or similar sites. If you're making one yourself, you can add the link there too.
3. You can add the images to `public/images`. 
4. There is a naming convention for images too: {category}-{number}.webp
The number follows the last existing image number. If you're adding the first site in a category, e.g., grainy, then it'd be grainy-1.webp, followed by grainy-2.webp, and so on.
5. A GIF is added when it's helpful to show a preview animation of the element. It must have the same number as the image followed by letter 'g', e.g., image-1g.webp. This GIF will show in the modal only.
6. Image should perfectly capture the element (200x344).
7. GIF should be as short as possible, only capturing the main effect/animation, so the file should not exceed 10MB.


Thank you for checking the project out!

<a href="https://www.producthunt.com/products/stack-sorted/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-stack&#0045;sorted" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=543544&theme=dark" alt="Stack&#0032;Sorted&#0046; - Find&#0032;Inspiration&#0032;in&#0032;Design&#0032;Elements&#0046; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
