import styled from "styled-components";
import {
  Radio,
  Formfield,
  resolveMedia,
} from "@moneypensionservice/directories";

export const DummyCard = styled.div`
  border: 1px solid #edf0f0;
  min-height: 100px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 30px;
  padding-top: 20px;
  font-size: 16px;
  box-shadow: 0 1px #a8b2ba;
`;

export const CompanyName = styled.h2`
  color: #003d8e;
  border-bottom: 1px solid #edf0f0;
`;

export const SubHead = styled.h5`
  margin-top: 20px;
`;

export const CommsInfo = styled.div`
  border: 1px solid #edf0f0;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  width: 90%;
`;

export const Comms = styled.span`
  vertical-align: super;
  display: inline-block;
`;

export const FilterFormFIeld = styled(Formfield)`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #edf0f0;
  padding-left: 0;
`;

export const ExtendedRadio = styled(Radio).attrs(({ required }) => ({
  required,
}));

export const FormDiv = styled.div`
  border: 1px solid #edf0f0;
  padding: 0 18px 18px;
  display: none;
  ${resolveMedia.md`
      display: block;
  `};
`;

export const Legend = styled.legend`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 700;
  width: 100%;
  margin-bottom: 0.75rem;
`;

export const Select = styled.select`
  font-size: 16px;
  width: 70%;
  padding: 10px;
`;
