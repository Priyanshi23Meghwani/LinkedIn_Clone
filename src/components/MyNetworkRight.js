import React from "react";
import styled from "styled-components";
import PeopleCard from "./PeopleCard";

const Request = () => {
    return(
        <Invite>
                <img className="avatar" src="./images/user.svg"/>
                <div className="content">
                    <p><b>Priyanshi Meghwani</b></p>
                    <p style={{color:"#696969"}}>CSE student at BBDU </p>
                    <div className="more">
                        <img src="./images/connect.svg" />
                        <p style={{color: "#696969"}}>Shashwat Pandey and 11 more</p>
                    </div>
                </div>
                <div className="buttons">
                    <button className="ignore"><b>Ignore</b></button>
                    <button style={{border:"1px solid blue",borderRadius:"20px",color:"blue"}}><b>Accept</b></button>
                </div>
            </Invite>
    )
}

const MyNetworkRight = () => {
    return(

        <Right>
        <Invitations>
            <div className="invitations">
                <p>Invitations</p>
                <p>See all 10</p>
            </div>
            <Request/>
            <Request/>
            <Request/>
            <button>
                Show more
            </button>
        </Invitations>
        <People><p>People you may know</p></People>
        <BottomRight>
                <PeopleCard/>
                <PeopleCard/>
                <PeopleCard/>
                <PeopleCard/>
                <PeopleCard/>
                <PeopleCard/>
                <PeopleCard/>
                <PeopleCard/>
                <PeopleCard/>    
        </BottomRight>
        </Right>
    )
}

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width:768px){
        width: 360px;
    }  
`;

const Invitations = styled.div`
    background-color: white;
    border-radius: 8px;
    border: 1px solid lightgray;
    width: 782px;
    height: fit-content;
    .invitations{
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
    }
    button{
        background-color: transparent;
        color: blue;
        border: none;
        font-size: 18px;
        font-weight: 500;
        width: 100%;
        padding: 5px 0;
    }
    @media(max-width:768px){
        width: 320px;
    } 
`;

const Invite = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;    
    padding: 15px 0 10px 0;
    border-bottom: 1px solid lightgray;
    img{
        height: 80px;
        width: 80px;
        border-radius: 50%;
        margin-left: 10px;
    }
    div{
        padding: 0 20px 15px 15px;
        width: 430px;
        display: flex;
        flex-direction: column;
        border: none;
        p{
            padding:3px 0;
        }
        .more{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            padding: 0;
            margin: 0;

            img{
                height: 20px;
                width: 20px;
            }
            @media(max-width: 768px){
                font-size: 12px;
            }
        }
        @media(max-width:768px){    
            font-size: 14px;
            width: 100%;
        }
    }
    
    button{
        border: none;
        background-color: transparent;
        font-size: 16px;
        color: #696969;
        cursor:pointer;
    }
    .buttons{
        display: flex;
        flex-direction: row;
        margin: 0;
        
        @media(max-width: 768px){
            flex-direction: column;
            button{
                font-size: 12px;
                width: 90px;
                padding: 5px 5px;
            }
            .ignore{
                border: 1px solid gray;
                border-radius: 20px;
            }
        }
    }
    @media(max-width:768px){
        width: 320px;
        flex-direction: column;
        align-items: center;
        padding:20px 0;
        justify-content: space-between;
        border: 1px solid lightgray;
        .avatar{
            height: 60px;
            width: 60px;
        }
        .buttons{
            flex-direction: row;
            padding: 0;
            button{
                margin: 0 35px;
                padding: 5px 25px;
                text-align: center;
            }
        }
        .content{
            width: 70%;
            text-align: center;
        }
    } 
`;

const BottomRight = styled.div`
    background-color: white;
    margin-top: 20px;   
    border-radius: 8px;
    border: 1px solid lightgray;
    width: 782px;
    height: fit-content;
    padding: 30px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    place-items: center;
    div{
      

        display: flex;
        flex-direction: column;
    }
    @media(max-width:768px)
    {
        display: flex;
        flex-direction: column;
        width: fit-content; 
        padding: 20px 50px;
        margin-bottom: 70px;       
    }
    
`;
const People = styled.div`
    p{
        margin: 25px 0 0 0;
        font-weight: 600;
        font-size: 20px;
    }
`;

export default MyNetworkRight;