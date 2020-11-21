import React, { Component } from 'react';

const Subscription = {
    FREE: 'free',
    PRO: 'pro',
    PREMIUM: 'premium',
};

export default class SingupForm extends Component {
    state = {
        email: '',
        password: '',
        agreed: false,
        subscription: null,
        age: '',
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleAgreedChange = e => {
        this.setState({ agreed: e.target.checked });
    };

    handleSubscriptionChange = e => {
        this.setState({ subscription: e.target.value });
    };

    handleAgeChange = e => {
        this.setState({ age: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Submit!');
    };

    render() {
        const {
            handleSubmit,
            handleChange,
            handleAgreedChange,
            handleSubscriptionChange,
            handleAgeChange,
        } = this;

        const { email, password, agreed, subscription, age } = this.state;

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={handleChange}
                        name="email"
                    />
                </label>
                <br />
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={handleChange}
                        name="password"
                    />
                </label>
                <br />
                <div role="group">
                    <label>
                        <input
                            type="radio"
                            value={Subscription.FREE}
                            checked={Subscription.FREE === subscription}
                            onChange={handleSubscriptionChange}
                        />
                        Free
                    </label>
                    <label>
                        <input
                            type="radio"
                            value={Subscription.PRO}
                            checked={Subscription.PRO === subscription}
                            onChange={handleSubscriptionChange}
                        />
                        Pro
                    </label>
                    <label>
                        <input
                            type="radio"
                            value={Subscription.PREMIUM}
                            checked={Subscription.PREMIUM === subscription}
                            onChange={handleSubscriptionChange}
                        />
                        Premium
                    </label>
                </div>
                <br />
                <label>
                    Choose your age
                    <select name="age" value={age} onChange={handleAgeChange}>
                        <option value="" disabled>
                            choose need option
                        </option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36+">36+</option>
                    </select>
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={handleAgreedChange}
                    />
                    Соглашаюсь с чем-то
                </label>
                <br />
                <button type="submit" disabled={!agreed}>
                    Зарегестрироваться как {email}
                </button>
            </form>
        );
    }
}
