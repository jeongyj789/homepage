import * as React from 'react';
import './Header.css';
import Button from './Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from './Responsive';
import Categories from './Categories';


const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }

`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 컨텐츠가 4rem 아래 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;


const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
            {children}
    </div>
)


const Header = () => {
    return (
      <HeaderBlock>

        <Wrapper>
          <Link to="/" className="">
            <Button>
            이&정 Company
            </Button>
          </Link>

          <Link to="/" className="right">
            <Button>
            서울시 옥외광고 현황판
            </Button>
          </Link>
          <Link to="/" className="right">
            <Button to="/login">
              로그인
            </Button>
          </Link>
          </Wrapper>

            <div className="menu">
                <MenuItem>
                <Link to="/">홈</Link>
                </MenuItem>
                <MenuItem>
                <Link to="/log">소개</Link>
                </MenuItem>
                <MenuItem>
                <Link to="/pos">포스트</Link>
                </MenuItem>
                <MenuItem>대시보드</MenuItem>
                <MenuItem>고객센터</MenuItem>
            </div>
            <p></p>
            <div>
              <Categories/>
            </div>
            </HeaderBlock>
    );
};

export default Header;
