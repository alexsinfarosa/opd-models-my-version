import React, { Component } from 'react';
import { Link } from 'react-router'

class NavLink extends Component {
    render() {
        let isActive = this.context.router.isActive(this.props.to, true);
        let className = isActive ? "is-active" : "";

        return (
            <li className={className}>
                <Link {...this.props} activeClassName="is-active"/>
            </li>
        );
    }
}

NavLink.contextTypes = {
    router: React.PropTypes.object
};

export default NavLink;
