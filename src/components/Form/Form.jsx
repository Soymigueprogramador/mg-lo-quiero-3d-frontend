
import { Input } from '../Input/Input.jsx'
import Button from '../Button/Button.jsx'

const Form = () => {
  return (
    <div>
        <h1> Soy un formulario </h1>
        <Form>
            <Input 
                type={Text}
                placeholder='Ingresa un dato'
            />
            <Button type='submit'> Enviar </Button>
        </Form>
    </div>
  )
}

export default Form