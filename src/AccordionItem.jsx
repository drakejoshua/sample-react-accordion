import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class AccordionItem extends React.Component {
    // initialize component
    constructor( props ) {
        super( props );

        // initialize component's state
        this.state = { 
            displayState: false
        }

        // bind "this" to showBody() for later access
        this.showBody = this.showBody.bind( this );
    }


    // the showBody()
    // the method is used to toggle display of the accordion-body and icons 
    // based on the displayState
    showBody() {
        if ( this.state.displayState ) {
            this.setState({
                displayState: false
            });
        } else {
            this.setState({
                displayState: true
            });
        }
    }


    render() {
        return (
            <div className="accordion-item mb-2 first:mt-5">

                {/* accordion-header */}
                <div className="accordion-header flex justify-between align-center p-4 border-2 border-white rounded" onClick={this.showBody}>

                    {/* accordion title */}
                    <h3 className="text-xl text-white capitalize font-semibold">
                        {
                            this.props.title
                        }
                    </h3>

                    {/* conditional rendering technique to toggle plus/minus icons */}
                    {
                        this.state.displayState && <FontAwesomeIcon icon="fa-solid fa-minus" className="text-white h-7"/>
                    }
                    
                    {
                        !( this.state.displayState ) && <FontAwesomeIcon icon="fa-solid fa-plus" className="text-white h-7"/>
                    }
                </div>

                {/* conditional rendering technique to toggle accordion-item body text */}
                {
                    this.state.displayState
                    &&
                    <div className="accordion-body p-4 border-2 border-t-0 border-white capitalize text-white rounded bg-white text-gray-800">
                        {
                            this.props.body
                        }
                    </div>
                }
            </div>
        );
    }
}


// declare type-validation for props passed into components
AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}


export default AccordionItem;