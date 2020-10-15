import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Accordion } from "@moneypensionservice/directories";

// styled components
const Article = styled.article`
  font-size: 1rem;
  color: #515151;
  line-height: 1.5rem;
`;
const Paragraph = styled.p`
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 0 10px 0;
`;
const ListItem = styled.li`
  margin-bottom: 5px;
`;
const List = styled.ul`
  margin-left: 30px;
  list-style-type: disc;
`;
const Anchor = styled.a`
  color: #003d8e;

  &:visited {
    color: #003d8e;
  }
`;

// article contents
const ArticleContent = ({ answer, index }) => {
  const { paragraphs, listItems, needHelp } = answer;

  if (index === 0) {
    // fist faq with list
    return (
      <Fragment>
        <Paragraph>{paragraphs[0]}</Paragraph>
        <List>
          {listItems.map((item, i) => (
            <ListItem key={i}>{item}</ListItem>
          ))}
        </List>
        <Paragraph>{paragraphs[1]}</Paragraph>
        <Paragraph>{paragraphs[2]}</Paragraph>
      </Fragment>
    );
  } else {
    return paragraphs.map((paragraph, i) =>
      needHelp && paragraphs.length === i + 1 ? (
        // insert need help anchor in the end of last paragraph
        <Fragment key={i}>
          <Paragraph>
            {`${paragraph} `}
            <Anchor href="#need_help">{needHelp}</Anchor>
          </Paragraph>
        </Fragment>
      ) : (
        <Paragraph key={i}>{paragraph}</Paragraph>
      )
    );
  }
};

// faqs
const FAQ = ({ locale, ...rest }) => {
  const [activeIndex, changeIndex] = useState();
  // handle accordion click
  const handleClick = (current) => {
    let newIndex = activeIndex === current ? -1 : current;
    changeIndex(newIndex);
  };

  return locale.map(({ question, answer }, i) => (
    <Accordion
      key={i}
      title={question}
      active={activeIndex === i}
      onClick={() => handleClick(i)}
      {...rest}
    >
      <Article>
        <ArticleContent answer={answer} index={i} />
      </Article>
    </Accordion>
  ));
};

export default FAQ;
