import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Accordion } from "@moneypensionservice/directories";

// styled components

const AEMAccordion = styled(Accordion)`
    
    border-top: 1px solid #9DA1CA;
     &:last-child {
        border-bottom:1px solid #9DA1CA;
    }
    button{
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`;
const FAQArticle = styled.article`
  font-size: 1rem;
  color: #515151;
  line-height: 1.5rem;
  
`;
const FAQParagraph = styled.p`
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 0 10px 0;
`;
const List = styled.ul`
  margin-left: 30px;
  list-style-type: none;
`;
const ListItem = styled.li`
  margin-bottom: 5px;

  &:before {
    content: "\\2022 ";
    color: #006a00;
    display: block;
    position: relative;
    width: 0;
    height: 0;
    left: -20px;
    top: -1px;
  }
`;
const Anchor = styled.a`
  color: #00788F;

  &:visited {
    color: #003d8e;
  }
`;

// article contents
const ArticleContent = ({ answer, index }) => {
  const { paragraphs, listItems, needHelp } = answer;

  if (index === 0) {
    // first faq with list
    return (
      <Fragment>
        <FAQParagraph>{paragraphs[0]}</FAQParagraph>
        <List>
          {listItems.map((item, i) => (
            <ListItem key={i}>{item}</ListItem>
          ))}
        </List>
        <FAQParagraph>{paragraphs[1]}</FAQParagraph>
        <FAQParagraph>{paragraphs[2]}</FAQParagraph>
      </Fragment>
    );
  } else if (index === 1) {
    // second tab
    return (
      <Fragment>
        <FAQParagraph>
          {`${paragraphs[0]} `}
          <strong>{needHelp}</strong>
          {` ${paragraphs[1]}`}
        </FAQParagraph>
      </Fragment>
    );
  } else if (index === 2) {
    // third tab
    return (
      <Fragment>
        <FAQParagraph>{paragraphs[0]}</FAQParagraph>
        <FAQParagraph>
          {`${paragraphs[1]} `}
          <strong>{needHelp}</strong>
        </FAQParagraph>
      </Fragment>
    );
  } else {
    return paragraphs.map((paragraph, i) => (
      <FAQParagraph key={i}>{paragraph}</FAQParagraph>
    ));
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
    <AEMAccordion
      key={i}
      title={question}
      active={activeIndex === i}
      onClick={() => handleClick(i)}
      {...rest}
    >
      <FAQArticle>
        <ArticleContent answer={answer} index={i} />
      </FAQArticle>
    </AEMAccordion>
  ));
};

export  default FAQ;
