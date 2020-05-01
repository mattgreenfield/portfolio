import React from 'react';
import { graphql } from 'gatsby';

import Heading from 'components/Heading/Heading';
import Tag from 'components/Tag/Tag';
// import Message from 'components/Message/Message';

const authenticated = false;

const foo = ({ pageContext, data }) => {
  const { about, email } = data.siteData.siteMetadata;
  return (
    <div>
      <Heading level={1}>CV</Heading>
      <p>{about}</p>
      <p>
        Here's a summary of my work history, please contact me for more details.
      </p>
      <a href={`mailto:${email}`}>{email}</a>
      {/* <Message>I'm not currently looking for work</Message> */}
      {pageContext.items.map(({ description, name, dates, tags }) => (
        <section>
          <header>
            <Heading
              level={2}
              subHeading={authenticated && `${dates.start} to ${dates.end}`}
            >
              {name}
            </Heading>
          </header>
          {authenticated && <p>{description}</p>}
          <ul className="reset-list grid-list">
            {tags.map(tag => (
              <li>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
export default foo;

export const pageQuery = graphql`
  query cvData {
    siteData: site {
      siteMetadata {
        title
        job_description
        about
        email
      }
    }
  }
`;
