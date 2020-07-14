import { Paragraph } from "@moneypensionservice/directories";
import styled from "styled-components";

const Results = () => {
  return (
    <div>
      <Paragraph
        style={{
          marginTop: 0,
          marginBottom: 0,
          background: "#edf0f0",
          borderRadius: "5px",
          padding: "15px 18px",
          width: "100%",
        }}
      >
        Showing 1 -10 of 1000 firms that match
      </Paragraph>
    </div>
  );
};

export default Results;
