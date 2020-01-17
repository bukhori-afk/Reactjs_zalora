import React, { Component } from 'react'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wanita: "WANITA",
            pria: "PRIA",
            anak: "ANAK-ANAK"
        };
    }
    render() {
        return (
            <div id="header">
                <div id="header-master">
                    <div id="header-zalora">
                        <p>ZALORA</p>
                    </div>
                    <div id="header-gender">
                        <ul>
                            <li><a href="#">{this.state.wanita}</a></li>
                            <li><a href="#">{this.state.pria}</a></li>
                            <li><a href="#">{this.state.anak}</a></li>
                        </ul>
                    </div>
                    <div id="header-cari">
                        <input type="text" id="cari" placeholder="Cari Produk, Tren, dan Merek" />
                        <span id="iconcari">
                            <i><img src={require('../images/search.png')} /></i>
                        </span>
                    </div>
                    <div id="header-logo">
                        <ul>
                            <li><img src={require('../images/user.png')} /></li>
                            <li><img src={require('../images/love.png')} id="heart" /></li>
                            <li><img src={require('../images/shopping.png')} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;