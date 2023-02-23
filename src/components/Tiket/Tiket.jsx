import React from 'react'
import { Row, Col, Container, Image, Button,  Card } from 'react-bootstrap'
import "./Tiket.css"
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';



const Tiket = () => {
  return (
    <div>
        <div className='TiketHeaderContainter'> 
          <Row className='eTiketHeader'>
              <Col className='col-8' id='tiketButton'>
                <ul>
                  <li> 
                    <a>
                      <AiOutlineArrowLeft/>
                    </a>
                  </li>
                  <li>
                    <p>Tiket</p>
                  </li>
                </ul>
                  <p className='orderID'>
                      Order ID: xxxx
                  </p>
              </Col>
              <Col className='col-4'>
                  <Row className='progressBar'>
                    <ul>
                      <li>
                        <img src='assets\images\png\Tiket_checklist.png'>
                        </img>
                      </li>
                      <li>
                        <p>Pilih Metode
                        </p>
                      </li>
                      <li>
                        <img src='assets\images\png\Tiket_strip.png'>
                        </img>
                      </li>
                      <li>
                        <img src='assets\images\png\Tiket_checklist.png'>
                          </img>
                      </li>
                      <li>
                        <p>Bayar</p>
                      </li>
                      <li> 
                        <img src='assets\images\png\Tiket_strip.png'>
                        </img>
                      </li>
                      <li>
                        <img src='assets\images\png\Tiket_checklist.png'>
                          </img>
                      </li>
                      <li>
                        <p>Tiket</p>
                      </li>
                    </ul>
                  </Row>
              </Col>
          </Row>
          
        </div>
        <Container>
          <Row className='eTiketBody'>
                <div className='Tiket_Success'>
                  <img src='assets\images\png\Tiket_Success.png' className='Tiket_Succes_Img'>
                  </img>
                  <h5>
                    Pembayaran Berhasil ! 
                  </h5>
                  <p>
                     Tunjukan invoice ini ke petugas BCR di titik temu.
                  </p>
                  <Card className='Tiket_Card'>
                    <Container>
                      <Row>
                        <Col className='col-6'>
                            <p>
                              Invoice
                          </p>
                          <p>
                              *no invoice
                          </p>
                        </Col>
                        <Col className='col-6'>
                          <button type="button" class="btn btn-outline-primary">
                            <FiDownload/>
                            Unduh
                            </button>
                        </Col>
                      </Row>
                      <Row>
                        <img src='assets\images\png\Tiket_Invoice.png'></img>
                      </Row>
                     
                     
                    </Container>
                  </Card>
                </div>
             
            </Row>
            
        </Container>
    </div>
  )
}

export default Tiket