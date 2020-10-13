import { useState, useEffect } from "react";
import { Page, Document, Text, View } from "@react-pdf/renderer";
// import styled from "styled-components";
import styled from "@react-pdf/styled-components";

const Heading = styled.Text`
  font-size: 13px;
  font-family: "Helvetica";
  font-weight: bold;
  padding: 0;
`;

const RowView = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 5px;
  padding-top: 5px;
`;

const RowText = styled.Text`
  font-size: 10px;
  color: #000;
  font-family: "Helvetica";
  font-weight: medium;
  line-height: 1.5;
`;

export const transcriptFile = {
  en: {
    topHeading: "Script for Travel Insurance Directory",
    bottomHeading:
      "We hope you find the insurance you need - so you can have the trip you deserve",
    para1:
      "Most people agree it’s important to get travel insurance if you’re travelling away from home. But if you a have a serious medical condition, finding the right insurance can be a frustrating,exhausting and expensive experience.",
    para2: "We can help.",
    para3:
      "Our directory has a list of firms that specialise in offering travel insurance to people with serious or life-threatening medical conditions.",
    para4:
      "So, if you’ve had your travel insurance declined or cancelled because of a medical condition - or your condition won’t be covered, you are in the right place.",
    para5:
      "Also, if an extra premium has been added to your policy because of your condition, then its worth seeing if any of the firms on our directory can offer a better price.",
    para6:
      "All of the firms are regulated by the Financial Conduct Authority and have been through a very specific entry criteria to prove their specialism.",
    para7:
      "You will have to go to individual firms to get a quote, but it’s worth trying more than one, as prices will vary.",
    para8:
      "But if the process of shopping around starts to get you down and it all feels too difficult, you can ask an insurance broker to do the hard work for you. The box at the bottom of the screen will tell you more about this service.",
  },
  cy: {
    topHeading: "Sgript ar gyfer Cyfeiriadur Yswiriant Teithio",
    bottomHeading:
      "Gobeithio y dewch chi o hyd i'r yswiriant sydd ei angen arnoch chi - er mwyn i chi gael y daith rydych chi'n ei haeddu",
    para1:
      "Mae'r rhan fwyaf o bobl yn cytuno ei bod hi'n bwysig cael yswiriant teithio os ydych chi'n teithio oddi cartref. Ond os oes gennych gyflwr meddygol difrifol, gall dod o hyd i'r yswiriant cywir fod yn brofiad rhwystredig, blinedig a drud.",
    para2: "Gallwn helpu.",
    para3:
      "Mae gan ein cyfeirlyfr restr o gwmnïau sy'n arbenigo mewn cynnig yswiriant teithio i bobl â chyflyrau meddygol difrifol neu sy'n peryglu bywyd.",
    para4:
      "Felly, os yw'ch yswiriant teithio wedi dirywio neu wedi'i ganslo oherwydd cyflwr meddygol - neu os nad yw'ch cyflwr wedi'i orchuddio, rydych chi yn y lle iawn.",
    para5:
      "Hefyd, os ychwanegwyd premiwm ychwanegol at eich polisi oherwydd eich cyflwr, yna mae'n werth gweld a all unrhyw un o'r cwmnïau ar ein cyfeirlyfr gynnig gwell pris.",
    para6:
      "Mae pob un o'r cwmnïau'n cael eu rheoleiddio gan yr Awdurdod Ymddygiad Ariannol ac wedi bod trwy feini prawf mynediad penodol iawn i brofi eu harbenigedd.",
    para7:
      "Bydd yn rhaid i chi fynd at gwmnïau unigol i gael dyfynbris, ond mae'n werth rhoi cynnig ar fwy nag un, gan y bydd prisiau'n amrywio.",
    para8:
      "Ond os yw'r broses o siopa o gwmpas yn dechrau eich siomi a bod y cyfan yn teimlo'n rhy anodd, gallwch ofyn i frocer yswiriant wneud y gwaith caled i chi. Bydd y blwch ar waelod y sgrin yn dweud mwy wrthych am y gwasanaeth hwn.",
  },
};

// Create Document Component
export const WelshTranscript = () => {
  return (
    <Document title="Script for Travel Insurance Directory Video">
      <Page
        size="A4"
        orientation="portrait"
        style={{
          flexDirection: "column",
          padding: 68,
        }}
      >
        <RowView>
          <Heading>{transcriptFile.cy.topHeading}</Heading>
        </RowView>

        <RowView>
          <RowText>{transcriptFile.cy.para1}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.cy.para2}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.cy.para3}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.cy.para4}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.cy.para5}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.cy.para6}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.cy.para7}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.cy.para8}</RowText>
        </RowView>
        <RowView>
          <Heading>{transcriptFile.cy.bottomHeading}</Heading>
        </RowView>
      </Page>
    </Document>
  );
};

export const EnglishTranscript = () => {
  return (
    <Document title="Script for Travel Insurance Directory Video">
      <Page
        size="A4"
        orientation="portrait"
        style={{
          flexDirection: "column",
          padding: 68,
        }}
      >
        <RowView>
          <Heading>{transcriptFile.en.topHeading}</Heading>
        </RowView>

        <RowView>
          <RowText>{transcriptFile.en.para1}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.en.para2}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.en.para3}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.en.para4}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.en.para5}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.en.para6}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.en.para7}</RowText>
        </RowView>
        <RowView>
          <RowText>{transcriptFile.en.para8}</RowText>
        </RowView>
        <RowView>
          <Heading>{transcriptFile.en.bottomHeading}</Heading>
        </RowView>
      </Page>
    </Document>
  );
};
