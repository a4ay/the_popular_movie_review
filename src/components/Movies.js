import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../redux/actions/movies';
import { Link } from 'react-router-dom';

export default function Movies(){
    const dispatch = useDispatch();
    const movies = useSelector( state => (state.movies.movies));
    const loading = useSelector( state => state.movies.loading);
    const error = useSelector( state => state.movies.error);
    const imageUrl = "https://image.tmdb.org/t/p/original";
    useEffect(()=>{
        dispatch(getMovies(),[]);
    })
    return (
    <Container>
        <Options>
            <Option className='active'>Popular</Option>
            {/* <Option>Favourite</Option> */}
        </Options>
        { movies.length > 0 && (
            <MovieList>
                {movies.map( movie => (
                    <MovieCard key={movie.id}>
                        <Link to={"/the_popular_movie_review/detail/"+movie.id}>
                            <Poster src={imageUrl+movie.poster_path}></Poster>
                        </Link>
                        <Link to={"/the_popular_movie_review/detail/"+movie.id}>
                            <Title>{(movie.title).toUpperCase()}</Title>
                        </Link>
                        <Details>
                            <Detail>{(movie.release_date).substring(0,5)}</Detail>
                            <Detail>+13</Detail>
                            <Detail>Action</Detail>
                        </Details>
                    </MovieCard>
                ))}
            </MovieList>
        )}
    </Container>
    )
    
        
}

const Container = styled.section`
    background-color: #202020;
    padding: 0px 100px;
    padding-top: 54px;
`;

const Options = styled.div`
    display : flex;
    gap: 12px;
    height : 36px;
    margin-botton: 32px;
`;

const Option = styled.div`
    cursor : pointer;
    width : 108px;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
        color: #ff0000;
        transition : 0.3s all ease-out;
    }
    &.active{
        background-color: #ff0000;
        color: #fff;
    }
    
`;
const MovieList = styled.div`
    display : grid;
    margin-top : 32px;
    grid-template-columns: auto auto auto auto auto;
    gap : 15px;
`;
const MovieCard = styled.div`
    height : 334px;
    width : 164px;
    overflow: hidden;
    margin-bottom: 18px;
    cursor : pointer;
`;

const Poster = styled.img`
    height : 242px;
    margin-bottom: 15px;
    transition : 0.3s transform ease;

    :hover{
        transform : scale(1.1);
        transition : 0.3s transform ease;
    }
`;

const Title = styled.span`
    font-weight: bold;
    font-size: 0.9rem;
    color : #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow : hidden;
    transition : 0.2s all ease;
    :hover{
        color: #ff0000;
        transition : 0.3s all eases;
    }
`;

const Details = styled.div`
    display : flex;
    justify-content : space-between;
    margin-top: 16px;
`;

const Detail = styled.span`
    font-weight: light;
    font-size: 0.9rem;
    color: #a3a3a3;
`;
