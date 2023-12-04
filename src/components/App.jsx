import SignUpForm from './SignUpForm/SignUpForm';
import ColorPicker from './ColorPicker/ColorPicker';
import Counter from './Counter/Counter';
// import SignUpFormLocalStorage from './SignUpFormLocalStorage/SignUpFormLocalStorage';
import Clock from './Clock/Clock';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export const App = () => {
  return (
    <div className="container">
      <SignUpForm />
      {/* <SignUpFormLocalStorage /> */}

      <ColorPicker options={colorPickerOptions} />

      <Counter />

      <Clock />
    </div>
  );
};
