import {Table, CloseButton, Button , Card} from "react-bootstrap";
import Image from "next/image";

export default function Basket() {
    return (
      <div >
          <h1>Basket</h1>
          <div className="row mt-4">
            <div className="col-9">
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Bild</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Menge</th>
                    <th>Betrag</th>
                    <th><CloseButton disabled/></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Image src={"/pics/products/cola.jpg"} alt="cola" width={50} height={50} />
                    </td>
                    <td>Cola</td>
                    <td>doppelt</td>
                    <td>1</td>
                    <td>1,99</td>
                    <td><Button className="btn-sm">x</Button></td>
                  </tr>
                  <tr>
                    <td>
                      <Image src={"/pics/products/burger.jpg"} alt="burger" width={50} height={50} />
                    </td>
                    <td>Burger</td>
                    <td>Zwiebl<br/> ohne Käse</td>
                    <td>1</td>
                    <td>6,99</td>
                    <td><Button className="btn-sm">x</Button></td>
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
                  <Button variante="primary">Zur Kasse</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
      </div>
    )
  }