import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title

  if (title) {
    return <h1 id="cstm-title" class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
  font-size: 4rem;
}
`

ArticleTitle.afterDOMLoaded = `
document.addEventListener("nav", () => {
  const title = document.getElementById('cstm-title')?.innerHTML || "";
  let toBeDisplayed = "";

  let i = 0;
  const interval = setInterval(() => {
    if (i < title.length) {
      toBeDisplayed += title[i++];
      document.getElementById('cstm-title').innerHTML = toBeDisplayed;
    } else {
      clearInterval(interval);
    }
  }, 40);
});

`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
