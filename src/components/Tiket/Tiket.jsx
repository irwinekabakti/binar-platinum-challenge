import React from 'react'
import { Row, Col, Container, Image, Button,  Card } from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import classes from "./Tiket.module.css"


const Tiket = () => {
  return (
    <div>
        <div className={classes.tiketHeaderContainter}> 
          <Row className= {classes.eTiketHeader}>
              <Col className='col-8' id='tiketButton'>
                <ul className={classes.ulTiket} >
                  <li className={classes.liTiket}> 
                    <a>
                      <AiOutlineArrowLeft/>
                    </a>
                  </li>
                  <li className={classes.liTiket}> 
                    <p>Tiket</p>
                  </li>
                </ul>
                  <p className={classes.orderID}>
                      Order ID: xxxx
                  </p>
              </Col>
              <Col className='col-4'>
                  <Row className='progressBar'>
                    <ul className={classes.ulProgressBar}>
                      <li className={classes.liProgressBar}>
                        <img src='assets\images\png\Tiket_checklist.png'>
                        </img>
                      </li>
                      <li className={classes.liProgressBar}>
                        <p>Pilih Metode
                        </p>
                      </li>
                      <li className={classes.liProgressBar}>
                        <img src='assets\images\png\Tiket_strip.png'>
                        </img>
                      </li>
                      <li className={classes.liProgressBar}>
                        <img src='assets\images\png\Tiket_checklist.png'>
                          </img>
                      </li>
                      <li className={classes.liProgressBar}>
                        <p>Bayar</p>
                      </li>
                      <li className={classes.liProgressBar}>
                        <img src='assets\images\png\Tiket_strip.png'>
                        </img>
                      </li>
                      <li className={classes.liProgressBar}>
                        <img src='assets\images\png\Tiket_checklist.png'>
                          </img>
                      </li>
                      <li className={classes.liProgressBar}>
                        <p>Tiket</p>
                      </li>
                    </ul>
                  </Row>
              </Col>
          </Row>
          
        </div>
        <Container>
          <Row className={classes.eTiketBody}>
                <div className={classes.Tiket_Success}>
                  <img src='assets\images\png\Tiket_Success.png' className={classes.tiketSuccesImg}>
                  </img>
                  <h5 className={classes.tiketSuccessH5}>
                    Pembayaran Berhasil ! 
                  </h5>
                  <p className={classes.tiketSuccessP}>
                     Tunjukan invoice ini ke petugas BCR di titik temu.
                  </p>
                  <Card className={classes.tiketCard}>
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
                          <button type="button" class={`btn btn-outline-primary ${classes.btnEtiket}`}>
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