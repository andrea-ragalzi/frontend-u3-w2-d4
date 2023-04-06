import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const FavouritesCompanies = () => {
    const companies = useSelector(state => state.favourites.companies)
    console.log(companies);
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Favourites companies</h1>
                </Col>
            </Row>
            <Row>
                {companies.map((company, index) => (
                    <Col key={index} xs={12}>
                        <Link to={`/${company}`} key={company}>
                            <h3>{company}</h3>
                            </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default FavouritesCompanies;