
import './App.css';
import Display from './components/display/Display';
import Form from './components/form/Form.js';
import { ButtonProvider } from './context/ButtonContext.js';
import { ColorProvider } from './context/ColorContext.js';
import { FormProvider } from './context/FormContext';
import { LockingProvider } from './context/LockingContext.js';


function App() {
  return (
    <div>
      <FormProvider>
 <Form></Form>
 <ButtonProvider>
  <LockingProvider>
    <ColorProvider>
  <Display></Display>
  </ColorProvider>
  </LockingProvider>
  </ButtonProvider>
  </FormProvider>
  </div>
  );
}

export default App;
