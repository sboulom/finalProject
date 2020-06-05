import React from 'react'
import API from '../utils/API'

var beerList = API.getBeers;

export const Home = () => (
    <div>
        <h1> Hello Abelard, Robert and Nick</h1>
        <p>PLAIN TEXT</p>
        test: {beerList}
    </div>
)


export default Home