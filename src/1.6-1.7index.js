import React from 'react'
import ReactDOM from 'react-dom'
const Keskiarvo = ({ value }) => {
  if(!value)
    return <div>Keskiarvo: 0</div>
  else
    return <div>Keskiarvo: {value}</div>
}
const Positivia = ({ value }) => {
  if(!value)
    return <div>positivia 0%</div>
  else
    return <div>positivia {value}%</div>
}
const DisplayHyv = ({ hyva }) => <div>hyvä {hyva}</div>
const DisplayNeu = ({ neutraali }) => <div>neutraali {neutraali}</div>
const DisplayHuo = ({ huono }) => <div>huono {huono}</div>
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva:0,
      huono:0,
      neutraali:0,
      value:0
    }

  }

  asetaArvoonHyv = (arvo) => () => this.setState({ hyva: arvo })
  asetaArvoonHuo = (arvo) => () => this.setState({ huono: arvo })
  asetaArvoonNeu = (arvo) => () => this.setState({ neutraali: arvo })

  render() {
    return (
      <div>
        <div>
          <h1>anna palautette</h1>
          <Button
            handleClick={this.asetaArvoonHyv(this.state.hyva + 1)}
            text="hyvä"
          />
          <Button
            handleClick={this.asetaArvoonNeu(this.state.neutraali + 1)}
            text="neutraali"
          />
          <Button
            handleClick={this.asetaArvoonHuo(this.state.huono + 1)}
            text="huono"
          />
          <h1>statistiikka</h1>
          <DisplayHyv hyva={this.state.hyva}/>
          <DisplayNeu neutraali={this.state.neutraali}/>
          <DisplayHuo huono={this.state.huono}/>
          <Keskiarvo value={ (-1*this.state.huono+this.state.hyva)/(this.state.huono+this.state.hyva+this.state.neutraali)} />
          <Positivia value={ (this.state.hyva)*100/(this.state.huono+this.state.hyva+this.state.neutraali)} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
 document.getElementById('root')
)
