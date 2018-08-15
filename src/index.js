import React from 'react'
import ReactDOM from 'react-dom'
const Keskiarvo = (props) => {
  if(props.value>0)
    return <div>Keskiarvo {props.value1}</div>
  else
    return ''
}
const Positivia = (props) => {
  if(props.value>0)
    return <div>positivia {props.value1}%</div>
  else
    return ''
}
const DisplayHyv = (props) => {
  if(props.value>0)
    return <div>hyvä {props.hyva}</div>
  else
    return ''
}
const DisplayNeu = (props) => {
  if(props.value>0)
    return <div>neutraali {props.neutraali}</div>
  else
    return ''
}
const DisplayHuo = (props) => {
  if(props.value>0)
    return <div>huono {props.huono}</div>
  else
    return ''
}
const DisplayEmptyStatText = ({value}) => {
  if(value>0)
    return ''
  else
    return <div>ei yhtään palautetta annettu</div>
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva:0,
      huono:0,
      neutraali:0,
      value:0,
      positivia:0,
      keskiarvo:0,
      selected:0,
      pitseet:[0,0,0,0,0,0]
    }
  }

  asetaArvoon = (hyv,huo,neu) => () => this.setState({ hyva: hyv, huono:huo, neutraali:neu })
  nextanecdote = () => () => this.setState({ selected:Math.floor(Math.random() * Math.floor(5))})

  addVote = (index) => () => {
    const kopio = {...this.state.pitseet}
    kopio[index]+=1
    this.setState({ pitseet: kopio})
  }
  render() {
    return (
      <div>
        <div>
          {this.props.anecdotes[this.state.selected]}<br />
          has {this.state.pitseet[this.state.selected]} votes
        </div>
        <div>
          <Button
            handleClick={this.nextanecdote()}
            text="next anecdote"
          />
          <Button
            handleClick={this.addVote(this.state.selected)}
            text="vote"
          />
          
        </div>
        <div>
          <h1>anna palautette</h1>
          <Button
            handleClick={this.asetaArvoon(this.state.hyva + 1, this.state.huono, this.state.neutraali)}
            text="hyvä"
          />
          <Button
            handleClick={this.asetaArvoon(this.state.hyva, this.state.huono, this.state.neutraali + 1)}
            text="neutraali"
          />
          <Button
            handleClick={this.asetaArvoon(this.state.hyva, this.state.huono + 1, this.state.neutraali)}
            text="huono"
          />
          <h1>statistiikka</h1>
          <DisplayEmptyStatText value={this.state.huono+this.state.hyva+this.state.neutraali} />
          <table>
          <tbody>
            <tr>
              <td><DisplayHyv hyva={this.state.hyva} value={this.state.huono+this.state.hyva+this.state.neutraali} /></td>
            </tr>
            <tr>
              <td><DisplayNeu neutraali={this.state.neutraali} value={this.state.huono+this.state.hyva+this.state.neutraali} /></td>
            </tr>
            <tr>
              <td><DisplayHuo huono={this.state.huono} value={this.state.huono+this.state.hyva+this.state.neutraali} /></td>
            </tr>
            <tr>
              <td><Keskiarvo value1={ (-1*this.state.huono+this.state.hyva)/(this.state.huono+this.state.hyva+this.state.neutraali)} value={this.state.huono+this.state.hyva+this.state.neutraali} /></td>
            </tr>
            <tr>
              <td><Positivia value1={ (this.state.hyva)*100/(this.state.huono+this.state.hyva+this.state.neutraali)} value={this.state.huono+this.state.hyva+this.state.neutraali} /></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
 document.getElementById('root')
)
