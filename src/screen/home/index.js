import { useState } from "react";
import { Jumbotron, container, Button, Navbar, NavbarToggler, DropdownToggle, NavbarText, NavLink, Collapse, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownMenu, DropdownItem, Container} from "reactstrap";
import Slider from 'infinite-react-carousel';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
    <div>
        <Container>
        <Jumbotron>
        <h1>Hello, world!</h1>
      </Jumbotron>
      
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      <Slider dots autoplay>
    <div>
        <img src="https://www.cmru.ac.th/assets/images/banners/th/06-01-2021/98ffb400b8efa9c2c1ef328aa3ddbbb011049e41.png" 
        alt="รูปแรก"
        />
    </div>
    <div>
        <img src="https://www.cmru.ac.th/assets/images/banners/th/03-02-2021/26c8b10dc51e25adeb818e575d44287c3f15b1b3.png"
        alt="รูปที่2"
        />
    </div>
    <div>
        <img src="https://www.cmru.ac.th/assets/images/banners/th/04-02-2021/5781919f63882117a2c1233753b37f1a36d7ef05.png"
        alt="รูปที่3"
        />
    </div>
    <div>
        <img src="https://www.cmru.ac.th/assets/images/banners/th/29-12-2020/355e723cf01db446a3ad5daa70225bb1901936d1.png"
        alt="รูปที่4"
        />
    </div>
  </Slider>
        <h1>Home Page</h1>
        </Container>
    </div>
    );
};

export default Home;