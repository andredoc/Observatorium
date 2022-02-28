import { useState } from "react"
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import authService from '../../services/auth.service' 
import { MessageContext } from './../../context/userMessage.context'
// import { AuthContext } from './../../context/auth.context'

function LoginForm() {

    const [loginForm, setLoginForm] = useState({
        password:"",
        email:""
    })

    const navigate = useNavigate()

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)
    // //pendiente de cargar useContext(AuthContext)
    // const { storeToken, authenticateUser } = useContext(AuthContext)

    const handleInputChange = event => {
        const { name, value} = event.target
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        //  authService
        //     .login(loginForm)
        //     .then(({ data }) => {
        //         //console.log("JWT token", data.authToken)
        //         storeToken(data.authToken)
        //         authenticateUser()
        //         setShowMessage(true)
        //         setMessageInfo({ title: 'Éxito', desc: 'Sesión iniciada correctamente' })
        //         navigate('/')
        //     })
        //      .catch(err => { 
        //          console.log(err)
        //         res.status(400).json({message: "Has ingresado un dato inválido"})
        //     })

    }

    return(

        <Form onSubmit={handleSubmit}>
        
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={loginForm.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" value={loginForm.password} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>Iniciar sesión</Button>

        
        </Form>

    )


}

export default LoginForm