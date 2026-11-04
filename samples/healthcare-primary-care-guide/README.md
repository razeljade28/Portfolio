# Healthcare article package

A finished article for patients choosing a primary care doctor, with an HTML preview, SEO fields, a printable comparison checklist, and source notes. The prose was edited using [Humanizer](https://github.com/blader/humanizer).

## Files

- `article.md`: Clean article text with headings, source links, and a comparison checklist.
- `index.html`: Responsive, self-contained HTML preview with metadata, navigation, and print styling.
- `seo.json`: SEO title, description, suggested slug, keyword candidates, and publishing fields.
- `sources.md`: Reference links and what they support.
- `README.md`: Usage and publishing instructions.

## Preview

Open `index.html` in a browser. No build, package installation, or internet connection is needed for the preview itself. Source links open external websites. The print button opens the browser's print dialog; the checklist includes blank spaces for comparing two providers.

## Publish in a content management system

1. Paste the contents of `article.md` into the article editor, or import the rendered article from the HTML preview.
2. Use one H1 for the title and H2 for the article sections.
3. Enter the title, description, and suggested slug from `seo.json`.
4. Add the actual author's details and appropriate links to your provider, service, fees, or booking pages.
5. Choose the target country and update the medical-register example and any payment information to match.
6. Add the final canonical URL and actual publisher details once the destination is known. Only credit medical review if it has occurred.
7. Preview on mobile and verify the links after publishing.

## SEO research status

Keyword phrases are candidates. No search-volume or ranking-difficulty values have been invented. Geography, site domain, author, and reviewer are intentionally unset because they have not been supplied. The HTML includes a title, description, social preview text, and basic Article structured data; it makes no claim about authorship, clinical review, or publication date.

## GitHub placement

The package lives at `samples/healthcare-primary-care-guide/` in the `razeljade28/Portfolio` repository. It is linked from the homepage and the [Sample projects page](https://razeljade28.github.io/Portfolio/#/sample-projects). [Read the article](https://razeljade28.github.io/Portfolio/samples/healthcare-primary-care-guide/index.html) on GitHub Pages.

The article uses the portfolio's cream, navy, and orange palette and system font stack. Its theme button shares the main portfolio's saved light/dark preference.
