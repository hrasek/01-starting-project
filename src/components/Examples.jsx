import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './../data.js';
import TabButton from './TabButton.jsx';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton.toLowerCase());
    } 
    return (
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map((concept) => (
              <TabButton isSelected={selectedTopic === concept.title.toLowerCase()} onSelect={() => handleSelect(concept.title)} key={concept.title}>{concept.title}</TabButton>
            )
            )}
          </menu>
          {selectedTopic ? (
            <div id="tab-content">  
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>) : (<p>Please select a topic.</p>)
          }
        </section>  
    );
}   