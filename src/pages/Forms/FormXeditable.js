import React, { Component } from "react";
import { Table, Row, Col, Card, CardBody, Container } from "reactstrap";

import Editable from "react-bootstrap-editable";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';



class FormXeditable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems : [
        { title : "Forms", link : "#" },
        { title : "Form X-editable", link : "#" },
      ],
    };
  }

  render() {
    const confirmElement = (
      <button type="submit" className="btn btn-success editable-submit btn-sm me-1"><i className="mdi mdi-check"></i></button>
    );
    /** Cancel button */
    const cancelElement = (
      <button type="button" className="btn btn-danger editable-cancel btn-sm"><i className="mdi mdi-close"></i></button>
    );
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid={true}>

          <Breadcrumbs title="Form X-editable" breadcrumbItems={this.state.breadcrumbItems} />

            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <h4 className="card-title">Inline Example</h4>
                    <p className="card-title-desc">
                      This library allows you to create editable elements on
                      your page. It can be used with any engine (bootstrap,
                      jquery-ui, jquery only) and includes both popup and inline
                      modes. Please try out demo to see how it works.
                    </p>

                    
                      <Table responsive className="mb-0">
                        <thead>
                          <tr>
                            <th style={{ width: "50%" }}>Inline</th>
                            <th>Examples</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Simple Text Field</td>
                            <td>
                              <Editable
                                alwaysEditing={false}
                                disabled={false}
                                editText="superuser"
                                id={null}
                                isValueClickable={false}
                                mode="inline"
                                placement="top"
                                showText
                                type="textfield"
                                renderConfirmElement={confirmElement}
                                renderCancelElement={cancelElement}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Empty text field, required</td>
                            <td>
                              <Editable
                                ajax={null}
                                alwaysEditing={false}
                                renderConfirmElement={confirmElement}
                                renderCancelElement={cancelElement}
                                className={null}
                                disabled={false}
                                editText="Empty"
                                id={null}
                                isValueClickable={false}
                                label={null}
                                mode="inline"
                                onSubmit={null}
                                onValidated={null}
                                placement="top"
                                showText
                                type="textfield"
                                validate={(value) => {
                                  if(!value){
                                    return 'Required';
                                  }
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Select, local array, custom display</td>
                            <td>
                              <Editable
                                ajax={null}
                                alwaysEditing={false}
                                className={null}
                                disabled={false}
                                editText="male"
                                id={null}
                                isValueClickable={false}
                                label={null}
                                mode="inline"
                                onSubmit={null}
                                onValidated={null}
                                options={["male", "female"]}
                                placement="top"
                                showText
                                type="select"
                                validate={null}
                                renderConfirmElement={confirmElement}
                                renderCancelElement={cancelElement}
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>Combodate</td>
                            <td>
                              <Editable
                                ajax={null}
                                alwaysEditing={false}
                                className={null}
                                disabled={false}
                                editText="Enter Date"
                                id={null}
                                isValueClickable={false}
                                label={null}
                                mode="inline"
                                onSubmit={null}
                                onValidated={null}
                                placement="top"
                                showText
                                type="date"
                                validate={null}
                                renderConfirmElement={confirmElement}
                                renderCancelElement={cancelElement}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Textarea, buttons below. Submit by ctrl+enter
                              </td>
                            <td>
                              <Editable
                                ajax={null}
                                alwaysEditing={false}
                                className={null}
                                disabled={false}
                                editText="Awesome User"
                                id={null}
                                isValueClickable={false}
                                label={null}
                                mode="inline"
                                onSubmit={null}
                                onValidated={null}
                                placement="top"
                                showText
                                type="textarea"
                                validate={null}
                                renderConfirmElement={confirmElement}
                                renderCancelElement={cancelElement}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default FormXeditable;