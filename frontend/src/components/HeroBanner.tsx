import styled from 'styled-components';

interface Props {
  image: string;
}

const HeroWrapper = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroBanner = ({ image }: Props) => {
  return (
    <HeroWrapper>
      <Image src={image} />
    </HeroWrapper>
  );
};

export default HeroBanner;
