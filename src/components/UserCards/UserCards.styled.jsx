import styled from 'styled-components';

export const ConteinerCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

export const PositionCards = styled.div`
  position: relative;

  width: 90px;
  height: 90px;
`;

export const UserName = styled.div`
  text-align: center;
  padding-top: 31px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border: 1px solid #e6533c;
  border-radius: 50%;
  background-color: transparent;
`;

export const Post = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: -12px;
  left: 34px;
`;

export const Name = styled.h3`
  margin-bottom: 4px;

  font-size: 18px;
  line-height: 1.11;
  color: #efede8;
`;
export const User = styled.p`
  margin-bottom: 40px;

  font-size: 18px;
  line-height: 1.28;
  color: rgba(239, 237, 232, 0.5);
`;

export const Info = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;
export const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;

  width: 165px;
  height: 96px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  background: #e6533c;
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);
`;

export const DataStatistic = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.11;
  color: #efede8;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Attention = styled.div`
  margin-bottom: 41px;
  width: 335px;
  display: flex;
  gap: 8px;

  color: rgba(239, 237, 232, 0.3);

  font-size: 14px;
  line-height: 1, 28;
`;

export const LogoutButton = styled.button`
  margin-bottom: 18px;
  display: flex;
  align-items: center;

  gap: 8px;
  background-color: transparent;
  color: #efede8;
  border: none;
  margin-left: auto;
`;
