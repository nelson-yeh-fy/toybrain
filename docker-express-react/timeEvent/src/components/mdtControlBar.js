import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import './../css/main.css';

class MdtControlBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <div> Hello mdt controlbar </div>
                <div>
                    <ButtonGroup justified>
                        <Button className="btn logFilterBtn logFilterBtnActive" active>Initiate CFS</Button>
                        <Button className="btn logFilterBtn">Initiate MVStop</Button>
                        <Button className="btn logFilterBtn">NCIC</Button>
                        <Button className="btn logFilterBtn">Chat</Button>
                        <Button className="btn logFilterBtn">Super</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default MdtControlBar;
