import React, { Component }             from 'react';
import { ProductConsumer }              from '../context';
import { Link }                         from 'react-router-dom';
import { ButtonContainer }              from './Button';

/**
 * This class used for displaying details of products.
 */

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}

                            {/* Product info */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 ">
                                        <img src={img} className="img-fluid" alt="product"/>
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capatilize">
                                        <h2>Model:{title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by:<span className="text-uppercase">{company}</span></h4>
                                        <h4 className="text-blue">
                                            <strong>Price:<span>&#8377;</span>{price}</strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            some info about product: 
                                        </p>
                                        <p className="text-muted lead">
                                            {info}
                                        </p>
                                        <div>
                                            <Link to="/">
                                            <ButtonContainer>Volver</ButtonContainer>
                                            </Link>
                                            {/* <ButtonContainer cart
                                            disabled={inCart?true:false}
                                            onClick={() => {value.addtoCart(id);value.openModal(id); }}
                                            // onClick={()=>{value.addtoCart(id)}}
                                            >
                                                {inCart?"inCart":"add to cart"}
                                            </ButtonContainer> */}
                                        </div>
                                    </div>
                                </div>
                            {/* End Product info */}
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;