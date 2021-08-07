import styled from "styled-components";


function Mid(){
    return(
        <Notify>
            <div className="image">
                <img src="./images/notify.jpeg"/>
            </div>
            <div className="description">
                <p>Hackerank is live: Join us for a fun conversation.</p>
            </div>
            <div className="icons ">
                <p>2 hrs</p>
                <img src="./images/menu.png" />
            </div>

        </Notify>
    )

}

const Notifications = () => {
    return(
        <Layout>
            <Card>
                <div className="upper">
                    <h5>Notifications</h5>
                    <p>You have new notifications</p>
                </div>
                <div className="lower">
                    <p>Improve your notifications</p>
                    <h4>View settings</h4>
                </div>
            </Card>
            <Middle>
                <Mid/>
                <Mid/>
                <Mid/>
                <Mid/>
                <Mid/>
                <Mid/>
                <Mid/>
                <Mid/>
                <Mid/>
                <Mid/> 
            </Middle>
            <Right>
                <img src="/images/demo_image.jpg"/>
            </Right>
        </Layout>
    )
}

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    /* grid-template-columns: minmax(0,5fr) minmax(300,7fr) minmax(0,8fr); */
    grid-template-columns: 0.40fr 1fr 0.56fr ;
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 73px 300px 0 300px;
    padding: 20px 55px 20px 80px;
    @media(max-width:768px)
    {
        display: flex;
        flex-direction: column;
        padding:0 5px;
    }

`;

const Card = styled.div`
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 10px;
    text-align: center;
    height: 160px;
    gridarea: leftside;

    .upper{
        border-bottom: 1px solid lightgray;
        padding: 20px 10px;
        height: 40px;
        
        p{
            color:gray;
            padding-top: 15px;
        }
    }

    .lower{
        height: 39px;
        padding: 20px 10px;
        background-color: #F9FAFB;
        border-radius: 0 0 10px 10px;

        p{
            color: gray;
            font-size: 14px;
            padding-bottom: 6px;
        }
        h4{
            color:blue;
        }
        h4:hover{
            cursor:pointer;
        }
    }
`;

const Middle = styled.div`
    height: fit-content;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 5px 0;
    gridarea: main;
`;

const Notify = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding: 10px;

    .image{
        img{
            height:60px;
            width: 60px;
            
        }
    }
    
    .icons{
        img{
            height: 20px;
            width: 20px;
        }
    }
`;

const Right = styled.div`
    gridarea: rightside;
    background-color: white;
    border-radius: 10px;
    border: 1px solid lightgray;
    height: 250px;
    width: 315px;
    display: grid;
    place-items: center;
`;
export default Notifications;