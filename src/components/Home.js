import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";


const Home = () =>{
    return(
        <Container>
            <Section>
                <h5><a>Coach/Mentor/Consultant? -</a></h5>
                <p>Get professional website with appointment booking, online payment & LMS</p>
            </Section>
            <Layout>
                <Leftside/>
                <Main/>
                <Rightside/>
            </Layout>
        </Container>
    )
}

const Container = styled.div`
    padding-top:52px;
    max-width: 100%;

`;
const Content = styled.div`
    max-width:1128px;
    margin-left:auto;
    margin-right:auto;

`;
const Section = styled.div`
    /* min-height: 50px; */
    padding: 8px 0 0px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    h5{
        color: #0a66c2;
        font-size: 15px;
        a{
            font-weight: 700;
        }
    }
    p{
        font-size: 14px;
        color: #434639;
        font-weight: 600;
    }
    @media(max-width: 768px)
    {
        flex-direction: column;
        padding: 0 5px;
    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    /* grid-template-columns: minmax(0,5fr) minmax(300,7fr) minmax(0,8fr); */
    grid-template-columns: 0.35fr 1fr 0.6fr ;
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    /* margin: 25px 0; */
    padding: 20px 80px;
    @media(max-width:768px)
    {
        display: flex;
        flex-direction: column;
        padding:0 5px;
    }

`;


export default Home;