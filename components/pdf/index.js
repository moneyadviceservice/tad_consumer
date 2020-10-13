import { Page, Document } from "@react-pdf/renderer";
import styled from "@react-pdf/styled-components";
import hits from "./firms";

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

const Firms = () => {
  const firms = hits.hits;
  return (
    firms &&
    firms.map((firm, i) => {
      return (
        <RowView key={i}>
          <RowText>{firm.company}</RowText>
          <RowText style={{ width: "38%" }}>{firm.online.website}</RowText>
          <RowText style={{ width: "12%" }}>{firm.online.phone}</RowText>
          <RowText>{firm.online.email}</RowText>
        </RowView>
      );
    })
  );
};
// Create Document Component
const EnglishListings = () => {
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
        <Heading>List of Travel Insurance Firms</Heading>
        <TableHeadView>
          <TableHeadText>Name</TableHeadText>
          <TableHeadText style={{ width: "38%" }}>Website</TableHeadText>
          <TableHeadText style={{ width: "12%" }}>Phone</TableHeadText>
          <TableHeadText>Email</TableHeadText>
        </TableHeadView>
        <Firms />
      </Page>
    </Document>
  );
};

const WelshListings = () => {
  return (
    <Document title="Rhestr o Gwmnïau Yswiriant Teithio">
      <Page
        size="A4"
        orientation="landscape"
        style={{
          flexDirection: "column",
          padding: 48,
        }}
      >
        <Heading>Rhestr o Gwmnïau Yswiriant Teithio</Heading>
        <TableHeadView>
          <TableHeadText>Enw</TableHeadText>
          <TableHeadText style={{ width: "38%" }}>Gwefan</TableHeadText>
          <TableHeadText style={{ width: "12%" }}>Ffôn</TableHeadText>
          <TableHeadText>E-bost</TableHeadText>
        </TableHeadView>
        <Firms />
      </Page>
    </Document>
  );
};

export { EnglishListings, WelshListings };
