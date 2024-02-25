import { useCallback, useEffect, useMemo, useState } from "react";
import Hoocs from "./Hoocs";
import Upload from "./components/Upload";
import Toast from "./Toast";
import Product from "./Product";
function App() {
  

  return (
    <>
    {/* <Hoocs/> */}
    <Upload/>
    <Toast/>
    <Product/>

    </>
  );
}

export default App;
