import React from 'react';
import MyComponent from '../components/MyComponent';
// import Posts from '../components/Posts';
import Toggler from '../components/Toggler';

const Patterns = () => (
    <>
        <Toggler>
            {({ isOpen, onToggle }) => (
                <>
                    <button type="button" onClick={onToggle}>
                        {isOpen ? 'Hide' : 'Show'}
                    </button>
                    {isOpen && <MyComponent a="a" b="b" />}
                </>
            )}
        </Toggler>
        <Toggler>
            {({ isOpen, onToggle }) => (
                <>
                    <label>
                        <input
                            type="checkbox"
                            checked={isOpen}
                            onChange={onToggle}
                        />
                        {isOpen ? 'Hide' : 'Show'}
                    </label>

                    {isOpen && <MyComponent a="a" b="b" />}
                </>
            )}
        </Toggler>
        {/* <Posts /> */}
    </>
);

export default Patterns;
