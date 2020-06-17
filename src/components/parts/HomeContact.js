import React from 'react';
import styled from 'styled-components';
import Text from 'components/elements/Text';
import Title from 'components/elements/Title';
import phoneIcon from 'assets/icons/call-big.svg';
import mailIcon from 'assets/icons/at-big.svg';
import flagIcon from 'assets/icons/flag.svg';

const StyledWrapper = styled.div`
  position: relative;
  height: 624px;
`;

const StyledMap = styled.iframe`
  width: 100%;
  border: none;
  @media (min-width: 992px) {
    height: 100%;
  }
`;

const InnerWrapper = styled.div`
  padding: 80px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
  @media (min-width: 992px) {
    padding: 32px 0 80px;
    position: absolute;
    width: 400px;
    top: 50%;
    right: 20%;
    border-radius: 4px;
    box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.15), -2px -2px 13px 0 rgba(0, 0, 0, 0.1);
    transform: translate(50%, -50%);
  }
`;

const StyledText = styled(Text)`
  padding: 24px 40px 48px;
`;

const StyledBox = styled.div`
  width: 224px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
`;

const StyledIcon = styled.img`
  padding: 0 24px 0 0;
`;

const HomeContact = () => (
  <StyledWrapper>
    <InnerWrapper>
      <Title>Kontakt</Title>
      <StyledText>
        Odwiedź naszą placówkę lub skontaktuj się telefonicznie/mailowo.
        <br />
        Zapraszamy także na nasze social media!
      </StyledText>
      <StyledBox>
        <StyledIcon src={flagIcon} alt="flag" />
        <Text>
          Novea Clinic Sp. z o. o.
          <br />
          ul. Kolejowa 3
          <br />
          53-508 Wrocław
        </Text>
      </StyledBox>
      <StyledBox>
        <StyledIcon src={phoneIcon} alt="phone" />
        <Text>111 222 333</Text>
      </StyledBox>
      <StyledBox>
        <StyledIcon src={mailIcon} alt="mail" />
        <Text>biuro@noveaclinic.pl</Text>
      </StyledBox>
    </InnerWrapper>
    <StyledMap
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.3792879164416!2d17.02437996827009!3d51.10146186226485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc26d4328eae9%3A0x318ef2eb70bf8a23!2sKolejowa%203%2C%2055-040%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1592389485177!5m2!1spl!2spl"
      aria-hidden="false"
    />
  </StyledWrapper>
);

export default HomeContact;
