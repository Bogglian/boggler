import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../lib/styleUtil";

const ContentLayout = styled.div`
  & {
    background-color: ${oc.gray[4]};
  }
`;

const Positioner = styled.div`
  & {
    background-color: ${oc.gray[3]};
  }
`;

const ShadowedBox = styled.div`
  & {
    width: 100%;
    ${shadow(2)};
  }
`;

const WaveLayout = styled.div`
  & {
    background-color: ${oc.gray[5]};
  }
`;

export { ContentLayout, Positioner, ShadowedBox, WaveLayout };
