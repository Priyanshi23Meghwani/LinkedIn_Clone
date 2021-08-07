import styled from "styled-components";

const Message = () => {
    return(
        <Container>
        <Card>
            <div className="left">
                <div className="heading">
                    <p>Messaging</p>
                    <div>
                        <img src="./images/Message/more.svg"/>
                        <img src="./images/Message/edit.svg" />
                    </div>
                </div>
                <div className="noMessage">
                    No Messages
                </div>

            </div>
            <div className="right">
                <div className="new">
                    <p>New Message</p>
                </div>
                <div className="type">
                    <p>Type a name or multiple names.</p>
                </div> 
                <div className="blank"></div>
                <div className="messagebox">
                    <p>Write a message...</p>
                    <img src="./images/Message/up-arrow.svg" />
                </div>
                <div className="icons">
                    <div className="images">
                        <img src="./images/Message/image.svg" />
                        <img src="./images/Message/attach.svg" />
                        <img src="./images/Message/gif.svg" />
                        <img src="./images/Message/emoji.svg" />
                        <img src="./images/Message/video.svg" />
                    </div>
                    <div className="button">
                        <button>Send</button>
                        <img src="./images/Message/more.svg"/>
                    </div>
                </div>
            </div>
        </Card>
        <Right>
                <img src="/images/demo_image.jpg"/>
        </Right>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    margin-top: 73px;
    @media(max-width:768px){
        flex-direction: column;
    }
`;
const Card = styled.div`
    @media(max-width:768px){
        margin-bottom:25px;
    }
    width: 40%;
    height: 800px;
    margin-left: 20%;
    margin-right: 25px;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 8px;
    display: flex;

    .left{
        width:40%;
        height: 100%;
        border-right: 1px solid lightgray;
        @media(max-width:768px){
            
        }
    }
    .heading{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        height:40px;
        border-bottom:1px solid lightgray;
        p{
            font-weight: 600;
            font-size: 16px;
        }
        div{
            img{
                padding-left: 15px;
            }
        }
    }
    .noMessage{
        color: #5C5C5C;
        display: grid;
        place-items: center;
        height: 100%;
    }
    .right{
        width: 60%;
        height: 100%; 
        @media(max-width:768px){
            width: 0;
            height:0;
        }
    }
    .new{
        height: 40px;
        border-bottom: 1px solid lightgray;
        display: grid;
        place-items: center;
        p{
            color: #5C5C5C;    
        }
    }
    .type{
        height: 32px;
        border-bottom: 2px solid lightgray;
        p{
            color: #5C5C5C; 
            padding: 8px 0 10px 15px;
            font-size: 15px;
        }
    }
    .blank{
        height: 550px;
        border-bottom: 1px solid lightgray;
    }
    .messagebox{
        display: flex;
        justify-content: space-between;
        padding: 15px 20px 0 15px;
        color: #5C5C5C;
        height: 80px;
        img{
            height: 17px;
            width: 17px;
        }    
    }
    .icons{
        background-color: #F9FAFB;
        height: 60px;
        border-top: 1px solid lightgray;
        padding: 15px 15px 0 10px;
        display: flex;
        justify-content: space-between;    
    }
    .images{
        width: 55%;
        display: flex;
        justify-content: space-around;
        img{
            width: 25px;
            height: 25px;
        }
    }
    .button{
        display: flex;
        width: 22%;
        justify-content: space-between;
        button{
            height: 30px;
            width: 60px;
            border: 1px solid lightgray;
            border-radius: 20px;
        }
        img{
            width: 25px;
            height: 25px;
        }
    }
`;
const Right = styled.div`
    background-color: white;
    border-radius: 10px;
    border: 1px solid lightgray;
    height: 250px;
    width: 315px;
    display: grid;
    place-items: center;
    @media(max-width:768px){
        margin-bottom: 100px;
        width: 90%;
        margin-left: 5%;
    }
`;

export default Message;
