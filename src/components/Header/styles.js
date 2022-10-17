import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.header`
  height: 10.4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
`

export const Content = styled.div`
  padding-inline: 12rem;
  margin-inline: auto;
  display: flex;
  align-items: center;
  gap: 3.2rem;
  width: 100%;
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: none;
  border: none;
`

export const Logout = styled(Link)`
  border: none;
  background: none;
  
  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 2.2rem;
    height: 2.2rem;
  }
`

export const Button = styled(Link)`
  width: 100%;
  height: 5.6rem;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 1.7rem;

  &:disabled {
    opacity: 0.5;
  }
  @media (min-width: 768px) {
    width: 21.6rem;
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_400};
  border-radius: 0.5rem;
  padding-right: 1.6rem;
  position: relative;
  
  > svg {
    left: 1.6rem;
    position: absolute;
  }

  > input {
    width: 100%;
    height: 4.8rem;
    
    font-size: 1.6rem;
    padding-left: 4.8rem;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
  @media (min-width: 768px) {
    flex: 1;
  }
`