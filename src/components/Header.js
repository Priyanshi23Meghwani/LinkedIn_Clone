import { connect } from "react-redux";
import styled from "styled-components";
import { signOutAPI } from "../actions";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";


const Header = (props) =>{
    const url = useLocation();
    return(
        <Container>
            <Content>
                <Logo>
                    <Link to="/home">
                        <img src="/images/home-logo.svg" alt="home-logo"/>
                    </Link>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <SearchIcon>
                        <img src="/images/search-icon.svg" alt="" />
                    </SearchIcon>
                </Search>
                <LogOutMobile>
                        <User>
                            <a>
                                {
                                    props.user && props.user.photoURL ? <img src={props.user.photoURL} alt="" /> :
                                    <img src="/images/user.svg" alt="user-svg"/>
                                }                               
                                <span>Me
                                    <img src="/images/down-icon.svg" alt="down-icon"/>
                                </span>
                            </a>

                            <SignOut onClick = {() => props.signOut()}>
                                <a>Sign Out</a>
                            </SignOut>
                        </User>
                </LogOutMobile>
                <Nav>
                    <NavListWrap>
                        <NavList className={url.pathname ==="/home" && "active"}>
                            <Link to="/home">
                                <img src="/images/nav-home.svg" alt="nav-home"/>
                                <span>Home</span>
                            </Link>
                        </NavList>
                        <NavList className={url.pathname ==="/mynetwork" && "active"}>
                            <Link to="/mynetwork">
                                <img src="/images/nav-network.svg" alt="nav-network"/>
                                <span>My Network</span>
                            </Link>
                        </NavList>
                        <NavList className={url.pathname ==="/jobs" && "active"}>
                            <Link to="/jobs">
                                <img src="/images/nav-jobs.svg" alt="nav-jobs"/>
                                <span>Jobs</span>
                            </Link>
                        </NavList>
                        <NavList className={url.pathname ==="/messaging" && "active"}>
                            <Link to="/messaging">
                                <img src="/images/nav-messaging.svg" alt="nav-messaging"/>
                                <span>Messaging</span>
                            </Link>
                        </NavList>
                        <NavList className={url.pathname ==="/notifications" && "active"}>
                            <Link to="/notifications">
                                <img src="/images/nav-notifications.svg" alt="nav-notifications"/>
                                <span>Notifications</span>
                            </Link>
                        </NavList>
                        <UserOuter>
                        <User>
                            <a>
                                {
                                    props.user && props.user.photoURL ? <img src={props.user.photoURL} alt="" /> :
                                    <img src="/images/user.svg" alt="user-svg"/>
                                }                               
                                <span>Me
                                    <img src="/images/down-icon.svg" alt="down-icon"/>
                                </span>
                            </a>

                            <SignOut onClick = {() => props.signOut()}>
                                <a>Sign Out</a>
                            </SignOut>
                        </User>
                        </UserOuter>

                        <Work>
                            <div>

                                <img src="/images/nav-jobs.svg" alt="nav-work"/>
                                <span>Work
                                    <img src="/images/down-icon.svg" alt="down-icon"/>
                                </span>
                            </div>
                        </Work>

                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    background-color: white;
    // border-bottom: 1px solid rgba(0,0,0,0.08);
    
    left:0;
    padding: 5px 5px 5px 5px;
    position: fixed;
    top: 0;
    width:100vw;
    z-index: 100;
    

`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`;

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    & > div{
        max-width: 280px;
        input{
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0,0,0,0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height:34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }
    @media(max-width: 768px){
        margin:0;
        &{
            width: 225px;
        }
    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    margin:0;
    pointer-events: none; //don't convert to mouse pointer arrow over icon
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LogOutMobile = styled.div`
    @media(min-width:768px){
        display: none;
    }
`;

const Nav = styled.nav`
    margin-left:auto;
    display: block;
    @media(max-width:768px){
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;
    }
`;

const NavListWrap = styled.ul`
    display:flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    list-style-type: none;

    .active{
        span:after{
            content:"";
            transform: scaleX();
            border-bottom: 2px solid var(--white, #fff);
            bottom:0;
            left:0;
            position: absolute;
            transition: transform 0.2s ease-in-out;
            width: 100%;
            border-color: rgba(0,0,0,0.9);
        }
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;
    a{
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 42px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        span{
            color:rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
        }
        @media(max-width:768px){
            min-width: 60px;
            font-size: 10px;
        }
    }
    &:hover,
    &.active{
        a{
            span{
                color: rgba(0,0,0,0.9);
            }
        }
    }
    img{
        @media(max-width:768px){
            width: 20px;
            height: 20px;
        }
    }
`;

const SignOut = styled.div`
    position:absolute;
    top: 45px;
    background: white;
    border-radius: 10px 0 10px 10px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 167ms;
    text-align:center;
    display: none;
    cursor: pointer;
`;
const UserOuter = styled.div`
    @media(max-width: 768px){
        &{
            display: none;
        }
    }
`;
const User = styled(NavList)`    
    a>svg{
        width:24px;
        border-radius: 50%;
    }
    a>img{
        width: 24px;
        height:24px;
        border-radius: 50%;
    }
    span{
        display:flex;
        align-items: center;
    }
    &:hover{
        ${SignOut}{
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }
`;
const Work = styled(User)`
    border-left: 1px solid rgba(0,0,0,0.08);
    cursor: pointer;
    @media(max-width: 768px){
        &{
            display: none;
        }
    }
`;

const mapStateToProps = (state) =>{
    return{
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({

    signOut: () => dispatch(signOutAPI()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);