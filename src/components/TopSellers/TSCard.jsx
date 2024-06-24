import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import B1 from '../../images/bouquets/b1.jpg';
import B2 from '../../images/bouquets/b2.jpg';
import B3 from '../../images/bouquets/b3.jpg';
import B4 from '../../images/bouquets/b4.jpg';
import B5 from '../../images/bouquets/b5.jpg';
import B6 from '../../images/bouquets/b6.jpg';
import B7 from '../../images/bouquets/b7.jpg';
import B8 from '../../images/bouquets/b8.jpg';


function TSCard() {
  return (
    <div>
        <MDBContainer  className="my-5 text-center">
        <h4 className="mt-4 mb-5">
            <strong>الباقات الاكثر مبيعاً </strong>
        </h4>

        <MDBRow>
            <MDBCol md="12" lg="4" className="mb-4">
            <MDBCard>
                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image rounded hover-zoom">
                <MDBCardImage src={B3} fluid className="w-100"
                />
                <a href="#!">
                    <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                        {/* <span className="badge bg-success ms-2">Eco</span> */}
                        <span className="badge bg-danger ms-2">-10%</span>
                        </h5>
                    </div>
                    </div>
                    <div className="hover-overlay">
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </div>
                </a>
                </MDBRipple>
                <MDBCardBody>
                <a href="#!" className="text-reset">
                    <h5 className="card-title mb-3">باقة فرحة العيد</h5>
                </a>
                <a href="#!" className="text-reset">
                    <p>باقة ورد احمر جوري وبيبي جوري وتغليف وردي انيق </p>
                </a>
                <h6 className="mb-3">
                    <s>₪299.90</s>
                    <strong className="ms-2 text-danger">₪269.99</strong>
                </h6>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>


            <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image rounded hover-zoom">
                <MDBCardImage src={B6} fluid className="w-100"/>
                <a href="#!">
                    <div className="mask">
                    <div class="d-flex justify-content-start align-items-end h-100">
                        <h5>
                            {/* <span className="badge bg-primary ms-2">New</span> */}
                            {/* <span className="badge bg-success ms-2">Eco</span> */}
                            <span className="badge bg-danger ms-2">-15%</span>
                        </h5>
                    </div>
                    </div>
                    <div className="hover-overlay">
                    <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                    </div>
                </a>
                </MDBRipple>
                <MDBCardBody>
                <a href="#!" className="text-reset">
                    <h5 className="card-title mb-3">باقة ورد ليلك</h5>
                </a>
                <a href="#!" className="text-reset">
                    <p>الباقه ممكونه من ورد الجوري وبيبي جوري بالاضافه لزهرة الليلك الجميله</p>
                </a>
                <h6 className="mb-3">
                    <s>₪349.90</s>
                    <strong className="ms-2 text-danger">₪299.90</strong>
                </h6>                
                </MDBCardBody>
            </MDBCard>
            </MDBCol>



            <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
                <MDBRipple rippleColor="light" rippleTag="div" className="bg-image rounded hover-zoom">
                <MDBCardImage src={B5}
                    fluid
                    className="w-100"
                />
                <a href="#!">
                    <div className="mask">
                    <div class="d-flex justify-content-start align-items-end h-100">
                        <h5>
                        <span className="badge bg-primary ms-2">New</span>
                        {/* <span className="badge bg-success ms-2">Eco</span> */}
                        <span className="badge bg-danger ms-2">-10%</span>
                        </h5>
                    </div>
                    </div>
                    <div className="hover-overlay">
                    <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                    </div>
                </a>
                </MDBRipple>
                <MDBCardBody>
                <a href="#!" className="text-reset">
                    <h5 className="card-title mb-3">باقة ورد بنفسج</h5>
                </a>
                <a href="#!" className="text-reset">
                    <p>باقة ورد جميله باللون البنفسج والابيض مكونه من ورد جوري وبيبي جوري وبعض الزهور الهولنديه</p>
                </a>
                <h6 className="mb-3">
                    <s>₪389.90</s>
                    <strong className="ms-2 text-danger">₪349.90</strong>
                </h6>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
    </div>
  );
}

export default TSCard;