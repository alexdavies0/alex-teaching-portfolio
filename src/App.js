import './App.css';
import Gallery from "./components/gallery";
import Heading from "./components/heading";

export default function App() {
  return (
    <main>
      <div className='body'>
        <Heading />
        <Gallery />
      </div>
    </main>
  );
}
