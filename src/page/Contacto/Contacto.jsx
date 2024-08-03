import Input from '../../components/Input/Input.jsx'

const Contacto = () => {
  return (
    <div>
        <h1 className='text-center'> Te invitamos a ponerte en contacto con nosotros mediante este formulario </h1>

        <form>
          <label> Nombre </label>
          <Input 
            type='text'
            placeholder='Ingresa tu nombre'
          />

          <label> Asunto </label>
          <Input 
            type='text'
            placeholder='Ingresa tu nombre'
          />

          <label> Email </label>
          <Input 
            type='email'
            placeholder='Ingresa tu nombre'
          />

          <label> Mensaje </label>
        </form>
    </div>
  )
}

export default Contacto