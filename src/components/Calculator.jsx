import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Calculator extends Component {

    state = {
        originalPrice: 0,
        discount: 0,
        youPay: 0,
        saving: 0
    }

    handleCalculation = state => {
        const originalPrice = this.state.originalPrice;
        const discount = this.state.discount;

        const saving = (originalPrice * (discount / 100)).toFixed(2);
        const paying = originalPrice - saving;

        this.setState({
            originalPrice,
            discount,
            youPay: paying,
            saving
        });
    }

    handleInputChangeOrginalPrice = (val) => {
        const originalPrice = val;
        const discount = this.state.discount;

        const saving = (originalPrice * (discount / 100)).toFixed(2);
        const paying = originalPrice - saving;

        this.setState({
            originalPrice,
            discount,
            youPay: paying,
            saving
        });
    }

    handleInputChangeDiscount = ( val ) => {
        const originalPrice = this.state.originalPrice;
        const discount = val;

        const saving = (originalPrice * (discount / 100)).toFixed(2);
        const paying = originalPrice - saving;

        this.setState({
            originalPrice,
            discount,
            youPay: paying,
            saving
        });
    }

    handleInputChangePay = ( val ) => {
        const originalPrice = this.state.originalPrice;
        const discount = this.state.discount;

        const saving = (originalPrice * (discount / 100)).toFixed(2);
        const paying = originalPrice - saving;

        this.setState({
            originalPrice,
            discount,
            youPay: paying,
            saving
        });
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4 offset-4'>
                        <form>
                            <p className='text-center'>Change values in input fields to generate result.</p>
                                <div>
                                    <label className='form-label'>
                                        Original Price
                                    </label>
                                    <input type="number" className='form-control' name="originalprice" value={this.state.originalPrice} onChange={(e) => { this.handleInputChangeOrginalPrice( e.target.value ) }} />
                                </div>
                                <div>
                                    <label className='form-label'>
                                        Discount %
                                    </label>
                                    <input type="number" className='form-control' name="discount" value={this.state.discount} onChange={(e) => { this.handleInputChangeDiscount( e.target.value ) }} />
                                </div>
                                <div>
                                    <label className='form-label'>
                                        You Pay
                                </label>
                                <input type="number" className='form-control' name="youpay" value={this.state.youPay} onChange={(e) => { this.setState({ youPay: e.target.value }) }} />
                            </div>
                            <div>
                                <label className='form-label'>
                                    You're Saving
                                </label>
                                <input type="number" className='form-control' name="youresaving" value={this.state.saving} onChange={(e) => { this.setState({ saving: e.target.value }) }} />
                            </div>
                            <button className='btn bg-primary text-white mt-2' onClick={() => this.handleCalculation(this.state)} type="button">Calculate</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Calculator;