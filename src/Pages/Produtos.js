import React from 'react'
import Title from '../Components/Title'
import ProductItem from '../Components/ProductItem'

function Produtos() {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] }
  ]
  
  return (
    <section>
      <Title>Produtos</Title>
      {produtos.map(({ nome, propriedades }) => {
        return <ProductItem key={nome} name={nome} properties={propriedades} />
      })}
    </section>
  )
}

export default Produtos
