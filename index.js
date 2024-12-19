const Button = props => {
  //  Write your code here.
  const {className , buttonText} = props;
  return <button className ={`button ${className}`}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div className='bg-container d-flex flex-row justify-content-center'>
    <h1 className='heading'>Social Buttons</h1>
    <div className='container'>
      <Button buttonText='Like' className='btn1' />
      <Button buttonText='Comment' className='btn2' />
      <Button buttonText='Share' className='btn3' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
