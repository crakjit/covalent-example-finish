import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import AddressField from "./components/addressField";
import ShowBalance from "./components/showBalance";

export default function App() {
  const [address, setAddress] = useState("");

  return (
    <div>
      <AddressField label="Track Portfolio" onChange={setAddress} value={address} />
      <hr />
      <ShowBalance address={address} />
    </div>
  );
}
