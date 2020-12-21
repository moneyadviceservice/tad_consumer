import { Page, Document, Font } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";


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

Font.registerHyphenationCallback(word => {
  // Return entire word as unique part
  return [word];
});

// Create Document Component
const MyDocument = ({ t }) => {
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
          <RowText>{t("home.transcript.para1")}</RowText>
        </RowView>
        <RowView>
          <RowText>{t("home.transcript.para2")}</RowText>
        </RowView>
        <RowView>
          <RowText>{t("home.transcript.para3")}</RowText>
        </RowView>
        <RowView>
          <RowText>{t("home.transcript.para4")}</RowText>
        </RowView>
        <RowView>
          <RowText>{t("home.transcript.para5")}</RowText>
        </RowView>
        <RowView>
          <RowText>{t("home.transcript.para6")}</RowText>
        </RowView>
        <RowView>
          <RowText>{t("home.transcript.para7")}</RowText>
        </RowView>
        <RowView>
          <RowText>{t("home.transcript.para8")}</RowText>
        </RowView>
        <RowView>
          <RowText>{t("home.transcript.bottomHeading")}</RowText>
        </RowView>
      </Page>
    </Document>
  );
};

export default MyDocument;
