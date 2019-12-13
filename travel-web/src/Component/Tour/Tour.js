import React, {Component} from "react";
import "./tour.scss";

export default class Tour extends Component {
    state = {
        showInfo: false
    };
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    };

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    convert(str){
        if (str.includes(" ")) {
            return str.split(" ").map(x=>this.capitalize(x)).join("_");
        } else {
            return this.capitalize(str);
        }
    }

    render() {
        const {id, city, img, name} = this.props.tour;
        const {removeTour} = this.props;
        const targetURL = "/locations/" + this.convert(city);
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="city tour"/>
                    <span className="close-btn" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close"/>
          </span>
                </div>
                <div className="tour-info">
                    <a href={targetURL} primary="true" size='huge'>
                        <h3>{city}</h3>
                    </a>
                    <h4>{name}</h4>
                </div>
            </article>
        );
    }
}
