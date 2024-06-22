"use client";

import styled from "@emotion/styled";
import { CardsCreateAccount } from "@/app/components/create-account";

const CentrallyPlacedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Home() {
  return (
    <div>
      <CentrallyPlacedDiv>
        <CardsCreateAccount />
      </CentrallyPlacedDiv>
    </div>
  );
}
