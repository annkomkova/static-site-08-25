import React from 'react'

// классовый компонент
// export default class A_Title extends React.Component {
//   render() {
//     return <h2 className="A_Title">{this.props.name}</h2>
//   }
// }

// классический функциональный компонент
// export default function A_Title({ name }) {
//   return <h2 className="A_Title">{name}</h2>
// }

// стрелочный функциональный компонент
const A_Title = ({ name }) => {
  return <h2 className="A_Title">{name}</h2>
}

export default A_Title
