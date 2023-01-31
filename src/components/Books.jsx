import {Component} from "react"
import {Container, Row, Col, Card, Button} from "react-bootstrap"
import fantasy from "../books/fantasy.json"
import history from "../books/history.json"
import horror from "../books/horror.json"
import romance from "../books/romance.json"
import scifi from "../books/scifi.json"

class Books extends Component {
    state = {
        genre: "Fantasy",
        books: fantasy
    }

    render() {
        return (
            <section>
                <Container className="mb-4">
                    <Row>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({genre: "Fantasy", books: fantasy})}}>Fantasy</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({genre: "History", books: history})}}>History</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({genre: "Horror", books: horror})}}>Horror</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({genre: "Romance", books: romance})}}>Romance</Button>
                        <Button className="mx-3" variant="outline-dark" onClick={() => {this.setState({genre: "Scifi", books: scifi})}}>Scifi</Button>
                    </Row>
                </Container>
                <Container>
                    <h2>{this.state.genre}</h2>
                    <Row>
                        {this.state.books.map(b => {
                            return (
                                <Col xs={6} md={4} lg={3} className="mb-3">
                                    <Card key={b.asin}>
                                        <Card.Img variant="top" src={b.img} />
                                        <Card.Body>
                                            <Card.Title>{b.title}</Card.Title>
                                            <Card.Text>
                                            {b.category} - {b.price}€
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Books