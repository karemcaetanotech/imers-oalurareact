import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function  CadastroVideo ( ) {
  return (
    <PageDefault>
      < h1 > Video Registration </h1>

      < Link  to = "/ registration / category" >
        Register Category
      </Link>
    </PageDefault>
  )
}

export  default  CadastroVideo ; 