import PriceList from '../components/PriceListComponent';
import FirstExercise from '../exercises/FirstExercise';
import SecondExercise from '../exercises/SecondExercise';
import '../style/custom.css';
import { useState } from 'react';

function PrincipalPage(){

    let variavel = "Gustavo";
    const constante = 3;

    return(
        <>
            <FirstExercise />
            <br></br>
            <SecondExercise />
        </>
    );
}

export default PrincipalPage;