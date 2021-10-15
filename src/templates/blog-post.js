import React from "react"
import { graphql } from "gatsby"
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export default function BlogPost({ data }) {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <div dangerouslySetInnerHTML={{ __html: md.render(data.twitterConversation.text) }} />
    </div>
  )
}

export const query = graphql`
  query GetConversation($id: String!) {
    twitterConversation(id: {eq: $id}) {
      id
      text
    }
  }
`