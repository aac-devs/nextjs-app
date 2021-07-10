import { Fragment } from "react";
import Link from "next/link";
// our-domain.com/news

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framwork">
            NextJS Is A Great Framework
          </Link>
        </li>
        <Link href="/news/something-else">
          <li>Something Else</li>
        </Link>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
