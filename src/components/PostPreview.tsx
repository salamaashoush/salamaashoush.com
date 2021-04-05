import { css } from "@emotion/react"
import React from "react"
import { IPost } from "../models/blog"
import { ReadLink } from "./ReadLink"

type Props = {
  post: IPost
}
export function PostPreview({ post }: Props) {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;

        &:first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <ReadLink to={`/blog/${post.slug}`}>read this post &rarr;</ReadLink>
    </article>
  )
}
