import { styled } from "styled-components";
import flex from "../../ui/Flex";
import HomeThirdSecItem from "./HomeThirdSecItem";

const StyledHomeThirsSecItems = styled.div`
  flex-direction: column;
  gap: 4.5rem;

  ${flex}

  &>div:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1494);
    padding-bottom: 3.5rem;
    @media (min-width: 1024px) {
      padding-bottom: 2rem;
    }
  }

  @media (min-width: 768px) {
    gap: 4rem;
  }
  @media (min-width: 1024px) {
    gap: 2rem;
  }
  @media (min-width: 1280px) {
    width: 50%;
  }
`;

function HomeThirdSecItems() {
  return (
    <StyledHomeThirsSecItems>
      <HomeThirdSecItem
        image="./homepage/salmon-mobile.jpg"
        alt="salmon"
        title="Seared Salmon Fillet"
        par="Our locally sourced salmon served 
            with a refreshing buckwheat summer salad."
      />
      <HomeThirdSecItem
        image="./homepage/beef-mobile.jpg"
        alt="fillet-mignon"
        title="Rosemary Filet Mignon"
        par="Our prime beef served to your taste 
            with a delicious choice of seasonal 
            sides."
      />
      <HomeThirdSecItem
        image="./homepage/chocolate-mobile.jpg"
        alt="chocolate-mousse"
        title="Summer Fruit Chocolate Mousse"
        par="Creamy mousse combined with 
            summer fruits and dark chocolate shavings."
      />
    </StyledHomeThirsSecItems>
  );
}

export default HomeThirdSecItems;
