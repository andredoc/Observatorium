import { useState, useContext } from "react"
import { Button, Form } from "react-bootstrap"
import authService from "../../services/auth.service"
import { MessageContext } from './../../context/userMessage.context'
import { useNavigate } from 'react-router-dom'

function SignupForm() {

    const [signupForm, setSignupForm] = useState({
        username: "",
        password: "",
        email: ""
    })

    const { setMessageInfo, setShowMessage } = useContext(MessageContext)

    const navigate = useNavigate()

    const handleInputChange = event => {
        const { name, value } = event.target
        setSignupForm({
            ...signupForm,
            [name]: value
        })
    }

    function handleSubmit(event, res) {

        event.preventDefault()

        authService
            .signup(signupForm)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: "Creado", desc: "Usuario creado exitosamente" })
                navigate("/")
            })
            .catch(err => {
                console.log(err)
                res.status(400).json({ message: "Has ingresado un dato inválido" })
            })
    }

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" name="username" value={signupForm.username} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={signupForm.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" value={signupForm.password} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>Entrar</Button>
        </Form>
    )
}


export default SignupForm