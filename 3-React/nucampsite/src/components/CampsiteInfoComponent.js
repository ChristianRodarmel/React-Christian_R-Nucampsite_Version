import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;
    
class CommentForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}><i className="fa fa-pencil fa-lg" />Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleMedia}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm>
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select
                                model=".rating"
                                id="rating"
                                defaultValue={1}
                                name="rating"
                                className="form-control"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            <Label htmlFor="author">Your Name</Label>
                        <Control.text 
                            model=".author"
                            id="author"
                            name="author"
                            placeholder="Your Name"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(2),
                                maxLength: maxLength(15)
                            }}
                            />

                        <Label htmlFor="comment">Comments...</Label>
                        <Control.textarea
                            model=".text"
                            id="text"
                            name="text"
                            placeholder="Type your response"
                            className="form-control"
                            rows="12"
                            />
                            <Button value="submit" type="submit">Submit Comment</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

    function RenderCampsite({campsite}) {
    
    <div></div>
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                        <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );

    }
    
function RenderComments({comments}) {
    if(comments) {
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                
            {comments.map(comment => {
                return(
                    <div key={comment.id}>
                        <p>{comment.text}</p>
                        <p>{comment.author}<br />
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        <p>{comment.date}</p>
                    </div>
                );
            })}
            <CommentForm />
            </div>
        );
    }
    return <div />
}

    function CampsiteInfo(props) {
        if(props.campsite) {
            return(
                <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>{props.campsite.name}</h2>
                    <hr />
                </div>
            </div>
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );    
        }
        return <div />;
        
    }



export default CampsiteInfo;