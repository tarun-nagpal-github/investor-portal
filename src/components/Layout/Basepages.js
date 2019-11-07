import React from 'react';

class Basepages extends React.Component {

    render() {
        return (
            <div className="wrapper">
                {this.props.children}
            </div>
        );
    }

}

export default Basepages;