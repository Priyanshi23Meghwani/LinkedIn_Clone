import styled from "styled-components";

const JobsCard = () => {
    return(
        <Card>
            <div className="images">
                <img className="logo" src="./images/linkedin.png" />
                <img className="save" src="./images/jobs/myjobs.svg"/>
            </div>

            <div className="description">
                <h5>Intern (Web Developer)</h5>
                <p>LinkedIn</p>
                <p>Maharashtra, India</p>
            </div>

            <div className="recruiting">
                <img src="./images/jobs/recruit.svg" />
                <p>Actively recruiting</p>
            </div>
            <div className="promoted" >
                <p>Promoted</p>
                <p style={{color:"green",fontWeight:"700"}}>:5 applicants</p>
            </div>
        </Card>
    )
}

const Card = styled.div`
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 8px;
    width: 180px;
    height: 240px;
    padding: 15px 20px;
    &:hover{
        box-shadow: -2px 5px 6px 2px rgba(0,0,0,0.39);
        -webkit-box-shadow: -2px 5px 6px 2px rgba(0,0,0,0.39);
        -moz-box-shadow: -2px 5px 6px 2px rgba(0,0,0,0.39);
    }
    .images{
        display:flex;
        justify-content: space-between;

        .logo{
            height: 65px;
            width: 65px;
        }
        .save{
            height: 25px;
            padding: 5px;
            &:hover{
                border-radius: 50%;
                border: none;
                box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.33);
                -webkit-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.33);
                -moz-box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.33);
            }
        }
    }

    .description{
        padding: 20px 0 0 0;
        h5{
            cursor: pointer;
        }   
        h5:hover{
            text-decoration: underline;
        } 
        p{
            padding: 3px 0 0 0;
            font-size: 15px;
        }
    }

    .recruiting{
        display: flex;
        margin-top: 50px;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        p{
            padding-left: 5px;
        }
        img{
            padding-bottom: 10px;
        }
    }

    .promoted{
        display: flex;
        font-size: 12px;
        p{
            padding-right: 5px;
        }
    }

`;

export default JobsCard;