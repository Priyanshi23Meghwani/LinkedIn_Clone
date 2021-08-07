import React from "react";
import styled from "styled-components";

const MyNetworkLeft = () => {
    return(
        <Card>
            <p>Manage my network</p>
            <div>
                <span>
                    
                    <img src="./images/network/nav-network.svg" />
                    <div>
                        <p>Connections</p>
                        <p>75</p>
                    </div>
                    
                </span>
                <span>
                    
                    <img src="./images/network/contacts.svg" />
                    <div>
                        <p>Contacts</p>
                        <p>258</p>
                    </div>
                    
                </span>
                <span>
                    
                    <img src="./images/network/people.svg" />
                    <div>
                        <p>People I Follow</p>
                        <p>2</p>
                    </div>
                    
                </span>
                <span>
                    
                    <img src="./images/network/group.svg" />
                    <div>
                        <p>Groups</p>
                        <p>1</p>
                    </div>
                    
                </span>
                <span>
                    
                    <img src="./images/network/event.svg" />
                    <div>
                        <p>Events</p>
                        <p>3</p>
                    </div>
                    
                </span>
                <span>
                    
                    <img src="./images/network/page.svg" />
                    <div>
                        <p>Pages</p>
                        <p>27</p>
                    </div>
                
                </span>
                <span>
                    
                    <img src="./images/network/newsletter.svg" />
                    <div>
                        <p>Newsletters</p>
                    </div>
                    
                </span>
                <span>
                    
                    <img src="./images/network/hashtag.svg" />
                    <div>
                        <p>Hashtags</p>
                        <p>5</p>
                    </div>
                    
                </span>
            </div>
        </Card>
    )
}

const Card = styled.div`

    background-color: white;
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid lightgray;
    color: #808080;
    width: 270px;
    max-height: 390px;

    p{
        padding: 8px 15px 5px 5px;
        color: black;
    }

    div{
        span{    
            display:flex;
            align-items:center;
            padding: 7px;
            cursor:pointer;    
            div{
                width: 100%;
                padding-left: 10px;
                display:flex;
                align-items: center;
                justify-content: space-between;
                p{
                    color: #808080;
                }
            }
        }
    }
    @media(max-width: 768px){
        margin-top: 60px;
        margin-bottom: 25px;
    }
`;

export default MyNetworkLeft;