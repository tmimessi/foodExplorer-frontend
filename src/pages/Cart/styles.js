import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 136.8rem;
  padding-inline: 4rem;
  margin-inline: auto;

  > div {
    padding-top: 3.4rem;
    width: 100%;

    h3 {
      font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
      margin-bottom: 3rem;
    }

    .order-section {
      height: 40rem;
      padding-right: 4rem;
      overflow-y: auto;
      width: max-content;
    }

    .total {
      font-size: 2rem;
      margin-top: 1rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding-inline: 12.3rem;
    justify-content: space-between;
    width: 100%;
  }
`

export const Payment = styled.div`
  max-width: 35rem;

  > div {
    border: 1px solid rgba(255, 255, 255, 0.1);

    div:nth-child(1) {
      display: flex;

      button {
        width: 100%;
        height: 8.1rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: transparent;
        color: white;
        font-size: 1.6rem;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.4rem;
      }

      .pix-button {
        background: rgba(255, 255, 255, 0.05);
      }
      
      .credit-button {
        background: rgba(255, 255, 255, 0.05);
      }
    }

    .payment-option {
      padding: 4rem 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > img {
        max-width: 100%;
        margin-inline: auto;
        padding-bottom: 2rem
      }

      @media (min-width: 768px) {
        padding: 4rem 9rem;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 53rem;
  }
`