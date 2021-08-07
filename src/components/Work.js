import styled from "styled-components";


const Work = (props) => {


    return(
        
        <Container>
            {/* Cross sign */}
            <Content>
                <button> 
                    <img src="/images/work/cross.svg" alt="close-icon" />
                </button>
                <Card1>
                    <p>Visit More LinkedIn Products.</p>

                    <div>
                        <span>
                            <img src= "/images/work/learning.svg"/>
                            Learning
                        </span>
                        <span>
                            <img src= "/images/work/insights.svg"/>
                            Insights
                        </span>
                        <span>
                            <img src= "/images/work/post-job.svg"/>
                            Post a job
                        </span>
                        <span>
                            <img src= "/images/work/advertise.svg"/>
                            Advertise
                        </span>
                        <span>
                            <img src= "/images/work/find-leads.svg"/>
                            Find Leads
                        </span>
                        <span>
                            <img src= "/images/work/groups.svg"/>
                            Groups
                        </span>
                        <span>
                            <img src= "/images/work/pro-finder.svg"/>
                            ProFinder
                        </span>
                        <span>
                            <img src= "/images/work/salary.svg"/>
                            Salary
                        </span>

                    </div>
                </Card1>

                <Card2>
                    <h4>LinkedIn Business Services</h4>

                    <div>
                        <h5>Talent Solutions</h5>
                        <h6>Find, attract and recruit talent</h6>
                        <h5>Sales Solutions</h5>
                        <h6>Unlock sales opportunities</h6>
                        <h5>Post a job for free</h5>
                        <h6>Get your job in front of quality candidates</h6>
                        <h5>Marketing Solutions</h5>
                        <h6>Acquire customers and grow your business</h6>
                        <h5>Learning Solutions</h5>
                        <h6>Develop talent across your organization</h6>
                    </div>

                    <p>Create a Company Page +</p>
                </Card2>
                
            </Content>
        </Container>

    )
}

export default Work;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: black;
    background-color: rgb(0,0,0,0.6);
    animation: fadeIn 0.3s;
    top: 55px;
`;

const Content = styled.div`
    width: 100%;
    max-width: 370px;
    height: 100%;
    background-color: white;
    border-radius: 8px 0 0 8px;
    position: relative;
    margin: 0 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    button{
        margin-left: 300px;
        margin-top: 20px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;

const Card1 = styled.div`
    
    border: 1px solid lightgray;
    border-radius: 8px;
    width: 80%;
    
    margin: 40px 15px;

    p{
        font-weight: 600;
        border-bottom: 1px solid lightgray;
        padding: 20px;
    }

    div{
        display: grid;
        grid-template-columns: repeat(4,1.5fr);
        // justify-content: space-around;
        padding:  15px 10px;
        
        span{
            display: flex;
            flex-direction: column;
            font-size: 11px;
            font-weight: 610;
            padding: 4px 5px 5px 5px;
            // text-align: center;

            img{
                height: 32px;
                width: 32px;
                border: 1px solid lightgray;
                border-radius: 4px;
                padding: 5px;
                margin: 3px;
            }

            img:hover{
                box-shadow: 0px 2px 6px 0px rgba(123,111,111,0.75);
                -webkit-box-shadow: 0px 2px 6px 0px rgba(123,111,111,0.75);
                -moz-box-shadow: 0px 2px 6px 0px rgba(123,111,111,0.75);
            }
        }

    }
`;

const Card2 = styled.div`
    border: 1px solid lightgray;
    border-radius: 8px;
    width: 80%;

    
    h4{
        font-weight: 600;
        border-bottom: 1px solid lightgray;
        padding: 20px;
    }

    div{
        padding: 10px 0 5px 20px;
        h5{
            font-weight: 600;
            font-size: 15px;

        }
        h5:hover{
            text-decoration: underline;
            cursor: pointer;
        }
        h6{
            padding-bottom:10px;
            font-size: 13px;
            font-weight: 500;
            color: #7C7C7C;
        }
    }

    p{
        padding: 10px 10px 10px 20px; 
        border-top: 1px solid lightgray;
        font-weight: 600;
        font-size: 15px;
    }
    p:hover{
        text-decoration: underline;
        cursor: pointer;
    }

`;