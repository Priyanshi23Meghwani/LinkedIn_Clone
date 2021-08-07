import React from "react";
import styled from "styled-components";
import PeopleCard from "./PeopleCard";

const MyNetworkRight = () => {
    return(

        <Right>
        <Invitations>
            <div>
                <p>Invitations</p>
                <p>See all 10</p>
            </div>
            <Invite>
                <img src="./images/user.svg"/>
                <div>
                    <p><b>Priyanshi Meghwani</b></p>
                    <p style={{color:"#696969"}}>Computer Science student at BBD </p>
                    <div>
                        <img src="./images/plus-icon.svg" />
                        <p style={{color: "#696969"}}>Shashwat Pandey and 11 more</p>
                    </div>
                </div>
                <button><b>Ignore</b></button>
                <button style={{border:"1px solid blue",borderRadius:"20px",color:"blue",padding:"5px 15px"}}><b>Accept</b></button>
            </Invite>

            <button>
                Show more
            </button>
        </Invitations>

        <BottomRight>
            <p> People you may know</p>
            <div>
                <PeopleCard/>
                <PeopleCard/>
                {/* <PeopleCard/>
                <PeopleCard/> */}
            </div>
        </BottomRight>
        </Right>
    )
}

const Right = styled.div`
    display: flex;
    flex-direction: column;    
`;

const Invitations = styled.div`
    background-color: white;
    border-radius: 8px;
    border: 1px solid lightgray;
    width: 782px;
    height: fit-content;
    div{
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
`;

const Invite = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    img{
        height: 80px;
        width: 80px;
        border-radius: 50%;
    }
    div{
        padding:0;
        padding-left: 10px;
        width: 430px;
        display: flex;
        flex-direction: column;
        border: none;
        p{
            padding:3px 0;
        }
        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;

            img{
                height: 20px;
                width: 20px;
            }
        }
    }

    button{
        border: none;
        background-color: transparent;
        font-size: 16px;
        color: #696969;
    }
`;

const BottomRight = styled.div`
    background-color: white;
    margin-top: 20px;   
    border-radius: 8px;
    border: 1px solid lightgray;
    width: 782px;
    height: fit-content;

    div{
        display: grid;
        place-items: center;
        row-gap: 25px;
        grid-template-columns: repeat(2,18fr);

        // display: flex;
    }
    
`;

export default MyNetworkRight;