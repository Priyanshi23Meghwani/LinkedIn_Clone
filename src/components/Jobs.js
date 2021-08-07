import styled from "styled-components";
import JobsCard from "./JobsCard";

const Jobs = () =>{
    return(
        <Container>
            <Layout>
            <Left>
                <Box1>
                    <div>
                        <span>
                            <img src="./images/jobs/myjobs.svg" />
                            <p>My Jobs</p>
                        </span>
                        <span>
                            <img src="./images/jobs/alerts.svg" />
                            <p>Job Alerts</p>
                        </span>
                        <span>
                            <img src="./images/jobs/salary.svg" />
                            <p>Salary</p>
                        </span>
                        <span>
                            <img src="./images/jobs/skill.svg" />
                            <p>Skill Assessments</p>
                        </span>
                        <span>
                            <img src="./images/jobs/interview.svg" />
                            <p>Interview Prep</p>
                        </span>
                        <span>
                            <img src="./images/jobs/resume.svg" />
                            <p>Resume Builder</p>
                        </span>
                        <span>
                            <img src="./images/jobs/settings.svg" />
                            <p>Application Settings</p>
                        </span>
                    </div>
                </Box1>
                <Box2>
                    <img src="./images/jobs/edit.svg"/>
                    <p>Post a free job</p>
                </Box2>
            </Left>
            <Mid>
                <Box3>
                    <h4>Recommended for you</h4>
                    <p>Based on your profile and search history</p>
                    <div className="grid">
                        <JobsCard/>
                        <JobsCard/>
                        <JobsCard/>
                        <JobsCard/>
                        <JobsCard/>
                        <JobsCard/> 
                        <JobsCard/>
                        <JobsCard/>
                        <JobsCard/>
                        <JobsCard/>
                    </div>   
                </Box3>
            </Mid>
            <Right>
                <Box4>
                    <h3>Search for your next job</h3>
                    <div className="searchboxes">
                        <Search>
                            <div>
                                <input type="text" placeholder="Search by title or skill..."/>
                            </div>
                            <SearchIcon>
                                <img src="/images/jobs/search-icon.svg" alt="" />
                            </SearchIcon>
                        </Search>
                        <Search>
                            <div>
                                <input type="text" placeholder="City,state, or zip code..."/>
                            </div>
                            <SearchIcon>
                                <img src="/images/jobs/location.svg" alt="" />
                            </SearchIcon>
                        </Search>
                        <button>Search</button>
                    </div>

                </Box4>
            </Right>
            </Layout>    
        </Container>
    )
}
const Container = styled.div`
    padding-top:73px;
    max-width: 100%;
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
        margin: 0 10px;
    }

`;
const Left = styled.div`
    gridarea: leftside;
`;
const Mid = styled.div`
    gridarea: main;
    
`;
const Right = styled.div`
    grid-area: rightside;
`; 

const Box1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: -25px;
    
    width: fit-content;
    background-color: white;
    border-radius: 8px;
    border: 1px solid lightgray;
    padding: 14px 0 14px 16px;

    div{  
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 336px;
        width: 209px;    
        span{
            display: flex;
            align-items: center;
            padding: 5px 20px 5px 0;
            font-weight: 600;
            color: #666666;
            cursor: pointer;

            img{
                padding-right: 8px;
            }
            p{
                font-size: 13px;
            }
        }
    }
    @media(max-width:768px)
    {
        width: 95%;        
    }    
`;

const Box2 = styled.div`
    width:209px;
    height: 24px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 16px 0px 16px 16px;
    p{
        color: blue;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
    }
    img{
        padding-right: 8px;
    }
    @media(max-width:768px)
    {
        width: 95%;    
        margin-bottom: 25px;    
    } 
`;

const Box3 = styled.div`
    height: fit-content;
    padding: 30px 25px;
    margin-top: -25px;
    background-color: white;
    border-radius: 8px;
    border: 1px solid lightgray;  
    p{
        color: gray;
        padding: 2px 0 25px 0;
    }
    .grid{
        display: grid;
        place-items: center;
        row-gap: 25px;
        grid-template-columns: repeat(2,18fr);
        @media(max-width:768px)
        {
            display: flex;
            flex-direction: column;
            
        }
    }
    @media(max-width:768px)
    {
        margin-bottom: 25px;        
    } 
    
`;

const Box4 = styled.div`
    height: fit-content;
    width: 291px;
    margin-top: -25px;
    padding: 30px 12px 12px 24px;
    background-color: white;
    border-radius: 8px;
    border: 1px solid lightgray;

    .searchboxes{
        padding: 10px 0;
    }
    button{
        padding: 8px 20px;
        border: 1px solid blue;
        border-radius: 20px;
        color: blue;
        background-color: transparent;
        font-weight: 600;
        font-size: 15px;
        margin-top: 10px;
        cursor: pointer;
        &:hover{
            border: 2px solid blue;
            background-color:#E2F0FE;
            padding: 7px 20px;
        }
    }
    @media(max-width:768px)
    {
        width: 89.5%;
        margin-bottom: 100px;        
    } 
`;

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    pointer: cursor;
    padding: 10px 0;
    & > div{
        max-width: 280px;
        input{
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0,0,0,0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height:34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 18px;
    left: 2px;
    margin:0;
    pointer-events: none; //don't convert to mouse pointer arrow over icon
    display: flex;
    justify-content: center;
    align-items: center;
`;





export default Jobs;