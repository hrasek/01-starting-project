import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton.toLowerCase());
  } 

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts key={concept.title} {...concept}/>
            ))}
          </ul>
        </section>
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

          {/* {selectedTopic} */}
        </section>      
      </main>
    </div>
  );
}

export default App;
