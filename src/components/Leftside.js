import { connect } from "react-redux";
import styled from "styled-components";

const Leftside = (props) =>{
    return(
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground/>
                    <a>
                        <Photo />
                        <Link>{props.user ? props.user.displayName : "there"}</Link>
                    </a>
                    <a>
                        <AddPhotoText>CSE student with strong foundation in logic & keen interest in CTFs.</AddPhotoText>
                    </a>
                </UserInfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src="/images/widget-icon.svg" alt="widget-icon" />
                    </a>
                </Widget>
                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt="bookmark"/>
                        My Items
                    </span>
                </Item>
            </ArtCard>

            <CommunityCard>
                <a>
                    <span>Group</span>
                </a>
                <a>
                    <span>Events
                        <img src="/images/plus-icon.svg" alt="plus-icon" />
                    </span>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <a>
                    <span>Discover more</span>
                </a>
            </CommunityCard>
        </Container>
    )
}

const Container = styled.div`
    grid-area: leftside;
    @media(max-width:768px)
    {
        width: 100%;        
    }
`;

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 8px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
    
`;
const CardBackground = styled.div`
    background: url("/images/card-bg.svg");
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
`;
const Photo = styled.div`
    box-shadow: none;
    background-image: url("/images/photo.png");
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid wheat;
    margin: -38px auto 12px;
    border-radius: 50%;

`;
const Link = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0,0,0,0.9);
    font-weight: 600;
`;
const AddPhotoText = styled.div`
    color: #20272F;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
`;

const Widget = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding: 12px 0;
    @media(max-width:768px)
    {
        &{
            display: none;
        }
    }
    
    & > a{
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;

        &:hover{
            background-color: rgba(0,0,0,0.08);
            cursor: pointer;
        }

        div{
            display:flex;
            flex-direction: column;
            text-align: left;
            span{
                font-size: 12px;
                line-height: 1.4;
                &:first-child{
                    color:rgba(0,0,0,0.6);
                }
                &:nth-child(2){
                    color:rgba(0,0,0,1);
                }
            }
        }
    }
    /* svg not working... */
    svg{
        color:blue;
    }
`;
const Item = styled.a`
    border-color: rgba(0,0,0,0.8);
    text-align:left;
    padding: 12px;
    font-size: 12px;
    display:block;
    @media(max-width:768px)
    {
        &{
            display: none;
        }
    }
    span{
        display: flex;
        align-items: center;
        color: rgba(0,0,0,1);
        svg{
            color:rgba(0,0,0,0.6)
        }
    }

    &:hover{
        background-color: rgba(0,0,0,0.08);
        cursor: pointer;
    }
`;

const CommunityCard = styled(ArtCard)`
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    @media(max-width:768px)
    {
        &{
            display: none;
        }       
    }
    a{
        color: black;
        padding: 4px 12px 4px 12px;
        font-size: 12px;

        &:hover{
            color: #0a66c2;
        }
        span{
            display:flex;
            align-items: center;
            justify-content: space-between;
        }
        &:last-child{
            color: rgba(0,0,0,0.6);
            text-decoration:none;
            border-top: 1px solid #d6cec2;
            padding:12px;
            &:hover{
                background-color: rgba(0,0,0,0.08);
            }
        }
    }
`;


const mapStateToProps = (state) =>{
    return{
        user: state.userState.user,
    }
}

export default connect(mapStateToProps)(Leftside);