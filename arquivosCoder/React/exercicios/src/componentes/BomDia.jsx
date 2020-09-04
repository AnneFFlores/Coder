import React from 'react'
//import ReactDOM from 'react-dom'

export default props => [

  <h1 key='h1'>Bom dia {props.nome}!</h1>,
  <h2 key='h2'>Até Breve!</h2>

]

//pode usar <React.Fragment> ou usar uma div ou ainda importar o Fragment
// export default props =>
  // <React.Fragment>
  //   <h1>Bom dia {props.nome}!</h1>
  //   <h2>Até Breve!</h2>
  // </React.Fragment>

  // export default props =>
  // <div>
  //   <h1>Bom dia {props.nome}!</h1>
  //   <h2>Até Breve!</h2>
  // </div>



