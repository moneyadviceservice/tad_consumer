import { Page, Document, Font } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";

const Heading = styled.Text`
  font-size: 30px;
  color: #428513;
  margin-bottom: 15px;
  font-family: "Helvetica";
  font-weight: semibold;
  padding: 0;
`;
const TableHeadView = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 5px;
  padding-top: 5px;
  border-color: #006a00;
  border-bottom: 1px;
  border-color: #006a00;
`;
const RowView = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom: 1px;
  border-color: #428513;
`;
const TableHeadText = styled.Text`
  width: 25%;
  font-size: 13px;
  color: #006a00;
  font-family: "Helvetica";
  font-weight: semibold;
`;
const RowText = styled.Text`
  width: 25%;
  font-size: 10px;
  color: #000;
  font-family: "Helvetica";
  font-weight: medium;
`;

Font.registerHyphenationCallback(word => [word]);
// Create Document Component
const MyDocument = ({ firms, t }) => {
  return (
    <Document title="List of Travel Insurance Firms">
      <Page
        size="A4"
        orientation="landscape"
        style={{
          flexDirection: "column",
          padding: 48,
        }}
      >
        <Heading>{t("download.title")}</Heading>
        <TableHeadView>
          <TableHeadText>{t("download.header.name")}</TableHeadText>
          <TableHeadText
            style={{ width: "43%"}}
          >
            {t("download.header.website")}
          </TableHeadText>
          <TableHeadText style={{ width: "10%" }}>
            {t("download.header.phone")}
          </TableHeadText>
          <TableHeadText>{t("download.header.email")}</TableHeadText>
        </TableHeadView>
        {firms &&
          firms.hits.map((firm, i) => {
            return (
              <RowView key={i}>
                <RowText>{firm.company}</RowText>
                <RowText
                  style={{
                    width: "43%",
                  }}
                >
                  {firm.online.website}
                </RowText>
                <RowText style={{ width: "10%" }}>{firm.online.phone}</RowText>
                <RowText>{firm.online.email}</RowText>
              </RowView>
            );
          })}
      </Page>
    </Document>
  );
};

export default MyDocument;
