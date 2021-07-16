import React from "react";
import styled from 'styled-components';
import { IconContext } from "react-icons";
import { FaHeart, FaPlay, FaPlus } from "react-icons/fa";
import {useParams, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import ReactHlsPlayer  from "react-hls-player";

export default function MovieOverview() {
    const imageUrl = "https://image.tmdb.org/t/p/original";
    const {id} = useParams();
    const movies = useSelector( state => (state.movies.movies));
    let movie = null;
    movies.forEach(mov => {
        if( (mov.id).toString() === id.toString()){
            movie = mov;
        }
    });
    if(movie===null) {
       return <Redirect to="/" /> 
    }
    return (
        <Container>
            <Overview>
                <Poster src={imageUrl + movie.poster_path}></Poster>
                <Details>
                    <div>
                        <Title>{movie.title}</Title>
                        <Description>{movie.overview}</Description>
                    </div>
                    <Buttons>
                        <Button href={"#trailer"}>
                            <IconContext.Provider value={{ color: "#fff", className: "global-class-name", size: '1.2rem' }}>
                                <div>
                                    <FaPlay />
                                </div>
                            </IconContext.Provider>
                            <Span>Trailer</Span>
                        </Button>
                        <Button href={"#trailer"}>
                            <div>
                            <IconContext.Provider value={{ color: "#fff", className: "global-class-name" , size: '1.2rem'}}>
                                <div>
                                    <FaHeart />
                                </div>
                            </IconContext.Provider>
                            </div>
                            <Span>Love</Span>
                        </Button>
                        <Button href={"#trailer"}>
                            <div>
                            <IconContext.Provider value={{ color: "#fff", className: "global-class-name" , size: '1.2rem'}}>
                                <div>
                                    <FaPlus />
                                </div>
                            </IconContext.Provider>
                            </div>
                            <Span>Add To Favourite</Span>
                        </Button>
                    </Buttons>
                </Details>
            </Overview>
            <ReactHlsPlayer
                id={"trailer"}
                src="https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
                autoPlay={false}
                poster={imageUrl+movie.backdrop_path}
                loop={false}
                controls={true}
                width="70%"
                height="auto"
            />
        </Container>
    )
}

const Container = styled.section`
    background-color: #202020;
    padding: 72px 100px 72px;
    min-height: 75vh;
`;

const Overview = styled.div`
    display : flex;
    gap: 20px;
    padding-bottom: 48px;
`;
const Poster = styled.img`
    height : 387px;
    width : 262px;
`;

const Details = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: space-between;
`;

const Title = styled.h1`
    margin: 15px 0px 30px;
    padding: 0px;
    color: #fff;
    font-size: 2.5rem;
`;

const Description = styled.p`
    margin: 0px;
    padding: 0px;
    color: #fff;
    font-size: 1.15rem;
    letter-spacing: .5px;
    line-height: 1.6;
`;

const Buttons = styled.div`
    display : flex;
    gap : 15px;
    margin-bottom: 18px;
`;
const Button = styled.a`
    display : flex;
    align-items : center;
    justify-content : center;
    text-decoration: none;
    cursor : pointer;
    background-color: #ff0000;
    color: #fff;
    min-width : 108px;
    padding: 0px 16px;
    height: 36px;
    transition : 0.1s all ease;
    :hover{
        background-color: #a10000;
        transition : 0.1s all ease;
    }
`;

const Span = styled.span`
    margin-left: 4px;
`;