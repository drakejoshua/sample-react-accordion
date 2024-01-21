import React from 'react';
import Accordion from './Accordion';

class App extends React.Component {
  // initialize component
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div id='app-ctn' className='w-screen h-screen bg-gray-800 overflow-auto'>

        <div className='accordion-ctn w-2/4 mx-auto'>

          <Accordion 
            items={
              [
                {
                  title: "how does it work?",
                  body: "you just need a home figure made out of stone to fulfil his dreams coz he's heartless"
                },
                {
                  title: "does it work fast?",
                  body: "yeah sure why not?"
                },
                {
                  title: "how many years warranty?",
                  body: "the stine hearted man comes with unlimited warranty"
                },
                {
                  title: "hope it doesnt give any resistance",
                  body: "no he doesn't he's heartless so he can't give onw"
                }
              ]
            }
          />
        </div>
      </div>
    )
  }
}

export default App;