import React, { Component } from 'react';
import Layout from './Layout/Layout';
// import Tasks from './Tasks/Tasks';
// import Modal from './Modal/Modal';
// import Clock from './Clock';
import Tabs from './Tabs/Tabs';

const tabs = [
    {
        label: 'Tab 1',
        text: 'Line 12:5:  Parsing error: Unexpected token',
    },
    {
        label: 'Tab 2',
        text: `Note that the development build is not optimized.
        To create a production build, use npm run build`,
    },
    {
        label: 'Tab 3',
        text: `Compiled successfully!

        You can now view first-react-app in the browser.
        
          Local:            http://localhost:3000/goit-react-homework/homework-02/phonebook/build    
          On Your Network:  http://192.168.0.106:3000/goit-react-homework/homework-02/phonebook/build`,
    },
];

export default class App extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    render() {
        // const { showModal } = this.state;
        return (
            <Layout>
                <div>
                    <Tabs items={tabs} />
                </div>
                {/* <div>
                    <button type="button" onClick={this.toggleModal}>
                        {showModal ? 'Hide' : 'Show'} Clock
                    </button>

                    {showModal && <Clock />}
                </div>
 */}
                {/* <div>
                    <button type="button" onClick={this.toggleModal}>
                        {showModal ? 'Hide' : 'Show'} Modal
                    </button>
                    {showModal && (
                        <Modal onClose={this.toggleModal}>
                            <h2>Modal title</h2>
                            <p>
                                Compiled successfully! You can now view
                                first-react-app in the browser. Local:
                                http://localhost:3000/goit-react-homework/homework-02/phonebook/build
                                On Your Network:
                                http://192.168.0.106:3000/goit-react-homework/homework-02/phonebook/build
                                Note that the development build is not
                                optimized. To create a production build, use npm
                                run build.
                            </p>
                            <button type="button" onClick={this.toggleModal}>
                                Close modal
                            </button>
                        </Modal>
                    )}
                </div> */}
            </Layout>
        );
    }
}
