import styled from "styled-components";

const PeopleCard = () =>{
    return(
        <Card>
        <UserInfo>
            <CardBackground/>
            <a>
                <Photo />
                <p>Priyanshi</p>
            </a>
            <a>
                <AddPhotoText>CSE student with strong foundation in logic & keen interest in CTFs.</AddPhotoText>
            </a>
        </UserInfo>
        
        <button>Connect</button>
    </Card>
    )
}


const Card = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 8px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    width: 200px;
    height: 280px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

    button{
        color: blue;
        background-color: transparent;
        border: 1px solid blue;
        padding: 5px 30px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 15px;
        margin-top: 15px;
    }
`;

const UserInfo = styled.div`
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
    p{
        font-size: 16px;
        line-height: 1.5;
        color: rgba(0,0,0,0.9);
        font-weight: 600;
    }
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
    width: 100px;
    height: 100px;
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

const AddPhotoText = styled.div`
    color: #20272F;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
`;


export default PeopleCard;