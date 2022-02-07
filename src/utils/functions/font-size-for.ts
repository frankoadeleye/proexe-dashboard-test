import { css } from "styled-components";

const FontSizeFor = {
  NormalText: css`
    @media (min-width: 200px) {
      font-size: 12px;
    }

    @media (min-width: 320px) {
      font-size: 14px;
    }

    @media (min-width: 768px) {
      font-size: 15px;
    }

    @media (min-width: 1200px) {
      font-size: 16px;
    }

    @media (min-width: 1400px) {
      font-size: 20px;
    }

    @media (min-width: 1600px) {
      font-size: 22px;
    }

    @media (min-width: 1800px) {
      font-size: 19px;
    }

    @media (min-width: 2200px) {
      font-size: 24px;
    }
  `,
  HeaderText: css`
    @media (min-width: 200px) {
      font-size: 14px;
    }

    @media (min-width: 320px) {
      font-size: 18px;
      line-height: 36px;
    }

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 42px;
    }

    @media (min-width: 1024px) {
      font-size: 32px;
      line-height: 60px;
    }

    @media (min-width: 1400px) {
      font-size: 36px;
      line-height: 84px;
    }

    @media (min-width: 1600px) {
      font-size: 42px;
      line-height: 100px;
    }

    @media (min-width: 2200px) {
      font-size: 50px;
      line-height: 124px;
    }
  `,
};

export default FontSizeFor;
