"use client";

import styled from "@emotion/styled";
import { CardsCreateAccount } from "@/app/components/create-account";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

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
