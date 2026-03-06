import React from 'react'
import { MDBContainer, MDBRow,  MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Cont = () => {
return (
<MDBContainer className=" justify-content-center1">
  <MDBRow>
      <form>
        <label htmlFor="defaultFormContactNameEx" className="grey-text widget20 wig">
          الاسم
        </label>
        <br />

        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <br />

        <label htmlFor="defaultFormContactEmailEx" className="grey-text widget20 wig">
          البريد الالكتروني
        </label>
        <br />

        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
        <br />
        <br />

        <label htmlFor="defaultFormContactSubjectEx" className="grey-text widget20 wig">
          الموضوع
        </label>
        <br />

        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
        <br />
        <br />

        <label htmlFor="defaultFormContactMessageEx" className="grey-text widget20 wig">
          رسالتك
        </label>
        <br />

        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
        <div className="text-center mt-4">
                  <MDBBtn color="warning" outline type="submit">
                    ارسال
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
          </MDBRow>
        </MDBContainer>
      );
    };

    export default Cont;


