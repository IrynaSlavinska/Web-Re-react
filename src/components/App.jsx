import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Collection from 'pages/Collection';
import CollectionItem from 'pages/CollectionItem';
import Layout from './Layout';
import Gallery from './Gallery';
import Subbreed from './Subbreead';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="collection" element={<Collection />} />
        <Route path="collection/:collectionId" element={<CollectionItem />}>
          <Route path="subbreed" element={<Subbreed />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};

// NavLink змінює адресну строку, коли path співпадає з якимось Route, то рендериться певний елемент розмітки
// NavLink - змінює URL, Route - реагує на зміни URL

// import { Route, Routes, NavLink } from 'react-router-dom';

//  <nav>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/collection">Collection</NavLink>
//       </nav>

//  <ul>
//   <li>
//      <NavLink to="/">Home</NavLink>
//    </li>
//   <li>
//      <NavLink to="/collection">Collection</NavLink>
//  </li>
// </ul>;
//  <Routes>
//      <Route path="/" element={<Home />} />
//    <Route path="/collection" element={<Collection />} />
//     <Route
//       path="/collection/:collectionId"
//       element={<CollectionItem />}
//     /> </Routes></>
