import styled from 'styled-components';

export const Container = styled.div`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;

export const Ul = styled.ul`
    margin-left: 16px;
`
export const Li = styled.li`
`
export const A = styled.a`     
    color: #5A7482; 
    font-size: 19px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    padding: 3px;

    &:hover{
        border-left: 2px solid #820ABF;
        transition: ease 500ms  ;
        margin-left: 5px;
    }
`
export const Span = styled.span`  
    margin-left: 22px;

    @media screen and (max-width: 1130px) {
        margin-left: 19px;
    }
`
export const SpanAdd = styled.span`  
    margin-left: 18px;
`
export const Logo = styled.span`  
    margin-left: 0;
    font-size: 22px;
    font-weight: bold;
`
export const SpanIcon = styled.span`  
    svg{
        color: var(--text_color);
    }
`
export const Al = styled.span`  
    flex: 1;
`
export const Logout = styled.div`  
    margin-top: 400px;
`