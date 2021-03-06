/**
 * Name: Amy Finlay
 * ID: G00360784
 * Lab 8
 */

import React from 'react';
import { MovieItem } from './movieItem';

//Creates header class and extends into component
export class Movies extends React.Component {

    render() {
        
        return this.props.movies.map(
            (movie) => {
                return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>
            })
    }

}