import React from "react";
import PropTypes from "prop-types";
import AccordionItem from "./AccordionItem";

class Accordion extends React.Component {
    // initialize component
    constructor( props ) {
        super( props )
    }

    render() {
        // collect list of accordion items into variable
        var itemsToRender = this.props.items;

        return (
            <div className="accordion">

                {/* list rendering technique to render all items passed into component */}
                {
                    itemsToRender.map(
                        function( item, index ) {
                            return (
                                <AccordionItem title={ item.title } body={ item.body } key={ index } />
                            );
                        }
                    )
                }
            </div>
        );
    }
}


// declare type-validation for props passed into components
Accordion.propTypes = {
    items: PropTypes.arrayOf( PropTypes.object ).isRequired
}


export default Accordion