import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";


const Home = (props) =>{
    return(
        <Container>

            {!props.user && <Redirect to="/" />}

            <Layout>
                <Leftside/>
                <Main/>
                <Rightside/>
            </Layout>

        </Container>
    )
}

const Container = styled.div`
    padding-top:73px;
    max-width: 100%;
    @media(max-width:768px)
    {
         padding-top: 60px;
         matgin: 0;
    }

`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    /* grid-template-columns: minmax(0,5fr) minmax(300,7fr) minmax(0,8fr); */
    grid-template-columns: 0.40fr 1fr 0.56fr ;
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 0 300px;
    padding: 20px 55px 20px 80px;
    @media(max-width:768px)
    {
        display: flex;
        flex-direction: column;
        padding:0 5px;
        margin: 0;
        padding: 0;
    }

`;



const mapStateToProps = (state) =>{
    return {
        user: state.userState.user,
    };
};


export default connect(mapStateToProps )(Home);
