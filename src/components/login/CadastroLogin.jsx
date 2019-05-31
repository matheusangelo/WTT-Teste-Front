import React, {Component} from 'react';
import {Container, Form, Input,Button} from 'reactstrap';
import {Link} from 'react-router-dom'

class CadastrarLogin extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container className="container-login">
                <Form className="form-login">
                    <h1 className="titulo-login">Cadastro</h1>
                    <Input type="text" placeholder="Nome Usuário"/>
                    <Input type="password" placeholder="Senha"/>
                    <hr />
                    <Button className="mb-2">Cadastrar-se</Button>
                    <Link className="btn btn-primary">Voltar</Link>
                </Form>
            </Container>
        )
    }
}
export default CadastrarLogin;