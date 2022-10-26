import {Table, Spinner, Button , Card} from "react-bootstrap";
import { useRouter } from "next/router";

export default function Order() {
    const router = useRouter();
    const {nr} = router.query;

    return (
      <div >
          <h1>Bestellstatus</h1>
          <div className="row mt-4">
            <div className="col-9">
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Bestell Nr.</th>
                    <th>Kunde</th>
                    <th>Adresse</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{nr}</td>
                    <td>Luki</td>
                    <td>Zipf 70</td>
                    <td>
                        <span>Zubereitung</span>
                        <Spinner animation="border" variant="success" size="sm"/>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="col-3 p-2">
              <div className="shadow"></div>
              <Card>
                <Card.Header as="h5">Gesamt</Card.Header>
                <Card.Body className="text-center">
                  <Card.Title>
                    6.95 EUR
                  </Card.Title>
                  <Button variante="success disabled">bezahlt</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
      </div>
    )
  }