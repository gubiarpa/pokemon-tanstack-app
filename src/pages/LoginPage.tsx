import { Button, Card, Container, Form } from 'react-bootstrap';
import { BsGoogle, BsWhatsapp } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate('/');
	};

	return (
		<Container className='d-flex vh-100 justify-content-center align-items-center'>
			<Card
				className='p-4 shadow'
				style={{ width: '300px' }}
			>
				<h4 className='text-center mb-1'>Iniciar Sesión</h4>
				<hr />
				<Form>
					<Form.Group className='mb-3'>
						<Form.Label>Usuario</Form.Label>
						<Form.Control
							type='text'
							placeholder='Ingrese su usuario'
						/>
					</Form.Group>
					<Form.Group className='mb-3'>
						<Form.Label>Contraseña</Form.Label>
						<Form.Control
							type='password'
							placeholder='Ingrese su contraseña'
						/>
					</Form.Group>
					<Button
						variant='primary'
						className='w-100 mb-2 mt-2'
						onClick={handleLogin}
					>
						Ingresar
					</Button>
				</Form>
				<hr />
				<div className='d-flex justify-content-center gap-4 mt-2'>
					<Button
						variant='outline-danger'
						className='d-flex justify-content-center align-items-center flex-grow-1'
						style={{ width: '25px', height: '45px' }}
					>
						<BsGoogle size={20} />
					</Button>
					<Button
						variant='outline-success'
						className='d-flex justify-content-center align-items-center flex-grow-1'
						style={{ width: '25px', height: '45px' }}
					>
						<BsWhatsapp size={20} />
					</Button>
				</div>
			</Card>
		</Container>
	);
};
