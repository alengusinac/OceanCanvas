import { memo } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '@/styles/variables';

const BannerWrapper = styled.div`
  background-color: ${colors.coral};
  color: ${colors.white};
  font-family: ${fonts.body};
  font-size: 0.85rem;
  text-align: center;
  padding: 8px 16px;
`;

const DemoBanner = () => {
  return (
    <BannerWrapper data-testid="cy-demoBanner">
      This is a fake store built for demonstration purposes. No real
      products are sold and no real payments are processed.
    </BannerWrapper>
  );
};

export default memo(DemoBanner);
