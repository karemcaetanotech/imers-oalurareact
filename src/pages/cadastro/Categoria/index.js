import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function  CadastroCategoria(){
  return (
    <PageDefault>
      <h1> Category Registration </h1>

      <form>

        <label>
          Category Name:
          <input type="text"/>
        </label>

        <button>
          Register
        </button>
      </form>


      <Link to="/">
        Go home
      </Link>
    </PageDefault>
  )
}

export  default  CadastroCategoria;