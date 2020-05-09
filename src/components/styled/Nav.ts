import styled from '@emotion/styled';

interface NavItemProps {
    isSelected: boolean;
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    box-sizing: border-box;
    height: 4.5rem;
    z-index: 998;

    background-color: white;
    box-shadow: 0 1px 0px #ebebeb;
    padding: 1.5rem 3rem;

    display: flex;
    flex-row: column;
    align-items: center;
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
`;

const NavItem = styled.span<NavItemProps>`
    cursor: pointer;
    margin: 1rem;
    text-decoration: ${({ isSelected }: any) => isSelected ? "underline" : "none"};
`;

const NavLogo = styled.img`
    cursor: pointer;
    height: 3rem;

    &:hover {
        transform: scale(1.015);
    }
`;

export {
    Nav,
    RightContainer,
    LeftContainer,
    NavItem,
    NavLogo,
}