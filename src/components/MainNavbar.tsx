import { Navbar, Nav, Container } from 'react-bootstrap';
import { IoCheckmarkDone } from 'react-icons/io5';

export const MainNavbar = () => {
	return (
		<Navbar
			expand='lg'
			className='bg-body-tertiary'
		>
			<Container>
				<Navbar.Brand href='/'>
					<IoCheckmarkDone style={{ marginBottom: '0.4rem' }} /> PokeCheck
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href='#action1'>Home</Nav.Link>
						<Nav.Link href='#action2'>Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
