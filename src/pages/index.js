import { Link, graphql } from "gatsby";
import * as React from "react"

function getTitle(string) {
  console.log({ string })
  const match = string.match(/\n/);
  if (!match.length) {
    return `${string.substring(0, 50)}${string.length > 50 ? '...': ''}`;
  }

  return string.slice(0, match.index);
}

function IndexPage({ data }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
      <h1>Threads</h1>
      {data.allTwitterConversation.nodes.map(node => (
        <Link key={node.id} to={`/threads/${node.id}`} style={{ marginBottom: 12 }}>
          {getTitle(node.text)}
        </Link>
      ))}
    </div>
  );
}

export const query = graphql`
  query {
    allTwitterConversation {
      nodes {
        id
        text
      }
    }
  }
`

export default IndexPage
