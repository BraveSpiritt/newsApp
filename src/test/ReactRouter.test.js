import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, Route, Router, Routes, useParams } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';



const Home = () => <h1>Home page</h1>
const About = () => <h1>About page</h1>
const Error = () => <h1>404 error</h1>



const Contact = () => {
    const { name } = useParams();
    return <h1 data-testid='contact-me'>{name}</h1>
};

const LocationDisplay = withRouter(({ loation }) => (
    <div data-testid="location-display">{location.pathname}</div>
));

const NAME = "John Doe";


const RouterComponent = () => {
    <>
        <nav data-testid="navbar">
            <Link data-testid="home-link" to="/">
                Home
            </Link>
            <Link data-testid="about-link" to="/about">
                About
            </Link>
            <Link data-testid="contact-link" to={`/contact/${NAME}`}>
                Home
            </Link>
        </nav>

        <Routes>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={Home} />
            <Route path='/contact:name' component={Home} />
            <Route component={Error} />
        </Routes>

        <LocationDisplay />
    </>;
}


const renderWithRouter = (
    component,
    {
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] }),
    } = {}
) => {
    const Wrapper = ({ children }) => (
        <Router history={history}>{children}</Router>
    );
    return {
        ...renderWithRouter(component, { wrapper: Wrapper }),
        history,
    };
};



decribe("React Router", () => {
    it("should render the home page", () => {
        // const history = createMemoryHistory();
        // const { container, getByTestId } = render(
        //     <Route history={history} >
        //         <RouterComponent />
        //     </Route>
        // );
        const { container, getByTestId } = renderWithRouter(<RouterComponent />);
        const navbar = getByTestId('navbar');
        const link = getByTestId('home-link');
        expect(container.innerHTML).toMatch("Home page");
        expect(navbar).toContainElement(link);
    });
    it("should navigate page", () => {
        // const history = createMemoryHistory();
        // const { container, getByTestId } = render(
        //     <Route history={history} >
        //         <RouterComponent />
        //     </Route>
        // );
        const { container, getByTestId } = renderWithRouter(<RouterComponent />);
        fireEvent.click(getByTestId("contact-link"));
        expect(container.innerHTML).toMatch("John Doe");
    });
    it("should navigate to error page if route is worng", () => {
        // const history = createMemoryHistory();
        // hishtory.push("wrong-route")
        // const { container } = render(
        //     <Route history={history} >
        //         <RouterComponent />
        //     </Route>
        // );
        const { container } = renderWithRouter(<RouterComponent />, {
            route: "wrong-route",
        });
        expect(container.innerHTML).toMatch("404  Error");
    })
    it("rendering a component that use withRouter", () => {
        // const history = createMemoryHistory();
        // const route = "/some-route";
        // history.push(route);
        // const { container } = render(
        //     <Route history={history} >
        //         <RouterComponent />
        //     </Route>
        // );
        const { getByTestId } = renderWithRouter(<RouterComponent />, {
            route: "wrong-route",
        });
        expect(getByTestId("location-display")).toHaveTextContent(route);
    })
})


export default RouterComponent;